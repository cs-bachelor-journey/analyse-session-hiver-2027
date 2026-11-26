import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/react/daygrid'
import timeGridPlugin from '@fullcalendar/react/timegrid'
import classicThemePlugin from '@fullcalendar/react/themes/classic'
import frLocale from '@fullcalendar/react/locales/fr'
import type { EventClickInfo, EventInput } from '@fullcalendar/react'
import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/react/themes/classic/theme.css'
import '@fullcalendar/react/themes/classic/palette.css'

import { courses, getCourse } from '@/data/courses'
import { sessionCalendar, sessionInfo, weekPlan } from '@/data/planning'

/** Couleur neutre pour les plages de travail personnel suggérées. */
const PERSONAL_COLOR = '#64748b'

const SESSION_START = new Date(2027, 0, 11)
const SESSION_END = new Date(2027, 3, 23)
const LECTURE_START = new Date(2027, 2, 1)
const LECTURE_END = new Date(2027, 2, 7)
const WEEK_MS = 7 * 24 * 60 * 60 * 1000

function dateKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

function toISO(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/** « 16h30 – 17h50 » → { start: '16:30', end: '17:50' } */
function classTimeRange(label: string): { start: string; end: string } {
  const times = label.match(/(\d{1,2})h(\d{2})/g)
  if (!times || times.length < 2) return { start: '00:00', end: '00:00' }
  const [h1, m1] = times[0].split('h')
  const [h2, m2] = times[1].split('h')
  return {
    start: `${h1.padStart(2, '0')}:${m1}`,
    end: `${h2.padStart(2, '0')}:${m2}`,
  }
}

/** Semaines de la session : 1 à 15 (8 = semaine de lecture), 16 = période d'examens. */
function sessionWeekNumber(date: Date): number {
  const offset = (date.getDay() + 6) % 7
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - offset)
  const diff = Math.round((monday.getTime() - SESSION_START.getTime()) / WEEK_MS)
  return diff < 0 ? 0 : diff + 1
}

function buildEvents(): EventInput[] {
  const events: EventInput[] = []
  const holidayKeys = new Set(sessionInfo.easter.map((e) => dateKey(new Date(e.date))))

  const cursor = new Date(SESSION_START)
  while (cursor <= SESSION_END) {
    const iso = toISO(cursor)
    const weekday = (cursor.getDay() + 6) % 7 // 0 = lundi … 6 = dimanche
    const isLectureWeek = cursor >= LECTURE_START && cursor <= LECTURE_END
    const isHoliday = holidayKeys.has(dateKey(cursor))

    // --- Séances de cours (lundi à vendredi) ---
    const day = sessionCalendar[weekday]
    if (day && !isLectureWeek && !isHoliday) {
      for (const entry of day.classes) {
        const course = getCourse(entry.courseId)
        if (!course) continue
        const isLabChoice = entry.time === 'Section au choix'
        const range = isLabChoice ? { start: '12:30', end: '14:20' } : classTimeRange(entry.time)
        events.push({
          title: isLabChoice ? 'GIF-1003 — Labo (section à choisir)' : `${course.code}${entry.kind === 'laboratoire' ? ' — Labo' : ''}`,
          start: `${iso}T${range.start}:00`,
          end: `${iso}T${range.end}:00`,
          color: course.accent,
          contrastColor: '#ffffff',
          extendedProps: { courseId: entry.courseId },
        })
      }
    }

    // --- Plages de travail personnel suggérées (tous les jours) ---
    const plan = weekPlan[weekday]
    if (plan && !isLectureWeek && !isHoliday) {
      for (const activity of plan.activities) {
        events.push({
          title: activity.label,
          start: `${iso}T${activity.slot.start}:00`,
          end: `${iso}T${activity.slot.end}:00`,
          color: PERSONAL_COLOR,
          contrastColor: '#ffffff',
          extendedProps: { personal: true },
        })
      }
    }

    cursor.setDate(cursor.getDate() + 1)
  }

  // --- Périodes spéciales (journées entières) ---
  events.push(
    {
      title: 'Semaine de lecture',
      start: sessionInfo.lectureWeek.start,
      end: '2027-03-06',
      allDay: true,
      color: '#0f766e',
      contrastColor: '#ffffff',
    },
    {
      title: 'Congé de Pâques',
      start: '2027-03-26',
      end: '2027-03-30',
      allDay: true,
      color: '#d97706',
      contrastColor: '#ffffff',
    },
    {
      title: "Période d'examens",
      start: '2027-04-26',
      end: '2027-05-03',
      allDay: true,
      color: '#e11d48',
      contrastColor: '#ffffff',
    },
  )

  // --- Dates importantes (journées entières, déjà couvertes par les périodes exclus) ---
  const covered = new Set(['2027-03-01', '2027-03-26', '2027-04-26'])
  for (const item of sessionInfo.importantDates) {
    if (covered.has(item.date)) continue
    events.push({
      title: item.label,
      start: item.date,
      allDay: true,
      color: '#475569',
      contrastColor: '#ffffff',
    })
  }

  return events
}

export function SessionCalendar() {
  const navigate = useNavigate()
  const events = useMemo(buildEvents, [])

  function handleEventClick(info: EventClickInfo) {
    const courseId = info.event.extendedProps.courseId as string | undefined
    if (courseId) {
      info.jsEvent.preventDefault()
      navigate(`/cours/${courseId}`)
    }
  }

  return (
    <div className="session-calendar space-y-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, classicThemePlugin]}
        initialView="timeGridWeek"
        initialDate="2027-01-11"
        locale={frLocale}
        firstDay={1}
        fixedWeekCount={false}
        height="auto"
        headerToolbar={{ left: 'prev,next today', center: 'title', right: '' }}
        views={{
          timeGridWeek: { titleFormat: { year: 'numeric', month: 'long', day: 'numeric' } },
        }}
        slotMinTime="08:00:00"
        slotMaxTime="23:00:00"
        scrollTime="08:00:00"
        validRange={{ start: '2027-01-04', end: '2027-05-03' }}
        weekNumbers
        weekNumberCalculation={sessionWeekNumber}
        events={events}
        eventTimeFormat={{ hour: '2-digit', minute: '2-digit', meridiem: false }}
        dayMaxEvents={4}
        moreLinkText="autres"
        allDayText="Journée"
        eventClick={handleEventClick}
      />

      {/* Légende */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
        {courses.map((course) => (
          <span key={course.id} className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm" style={{ backgroundColor: course.accent }} aria-hidden />
            {course.code}
          </span>
        ))}
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm" style={{ backgroundColor: PERSONAL_COLOR }} aria-hidden />
          Travail personnel suggéré
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-teal-700" aria-hidden />
          Semaine de lecture (1–5 mars)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-amber-600" aria-hidden />
          Congé de Pâques (26–29 mars)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-rose-600" aria-hidden />
          Examens (26 avril – 2 mai)
        </span>
      </div>

      <p className="text-xs text-muted-foreground">
        Naviguer semaine par semaine. Semaines&nbsp;: <strong>1 à 15</strong> = semaines de la
        session (la <strong>semaine 8 est la semaine de lecture</strong>, du 1<sup>er</sup> au 5
        mars)&nbsp;· <strong>16</strong> = période d&rsquo;examens. Cliquer sur un cours pour
        ouvrir sa page détaillée. Les plages de travail personnel (en gris) sont des suggestions à
        ajuster selon les échéances réelles.
      </p>
    </div>
  )
}
