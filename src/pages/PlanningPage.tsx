import {
  BookOpen,
  CalendarDays,
  FlaskConical,
  FolderGit2,
  GraduationCap,
  TriangleAlert,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Link } from 'react-router-dom'

import { Callout } from '@/components/Callout'
import { SessionCalendar } from '@/components/SessionCalendar'
import { UnsplashImage } from '@/components/UnsplashImage'
import { courseIcons } from '@/components/courseIcons'
import { courses, getCourse } from '@/data/courses'
import {
  labSections,
  scheduleConfirmations,
  sessionCalendar,
  weekPlan,
  workTypes,
} from '@/data/planning'

const workTypeIcons = {
  'University Learning': GraduationCap,
  'Deep Learning': BookOpen,
  'Practical Projects': FolderGit2,
} as const

function parseHours(value: string): number {
  const [h, m] = value.split('h').map((part) => Number(part.trim()) || 0)
  return h + m / 60
}

function formatHours(total: number): string {
  const h = Math.floor(total)
  const m = Math.round((total - h) * 60)
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, '0')}`
}

type CalendarDay = {
  day: string
  classes: (typeof sessionCalendar)[number]['classes']
  dayNote?: string
  activities: (typeof weekPlan)[number]['activities']
}

const calendarDays: CalendarDay[] = weekPlan.map((plan) => {
  const sessionDay = sessionCalendar.find((session) => session.day === plan.day)
  return {
    day: plan.day,
    classes: sessionDay?.classes ?? [],
    dayNote: sessionDay?.dayNote,
    activities: plan.activities,
  }
})

function CalendarDayCard({ day }: { day: CalendarDay }) {
  const personalTotal = day.activities.reduce((sum, activity) => sum + parseHours(activity.hours), 0)

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base">{day.day}</CardTitle>
          <Badge variant="muted">≈ {formatHours(personalTotal)} de travail personnel</Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3">
        {day.classes.length > 0 ? (
          <div className="space-y-2">
            {day.classes.map((entry) => {
              const course = getCourse(entry.courseId)!
              const Icon = courseIcons[entry.courseId]
              return (
                <div
                  key={`${entry.courseId}-${entry.time}`}
                  className="rounded-lg border border-border border-l-4 bg-card px-3 py-2"
                  style={{ borderLeftColor: course.accent }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="flex size-6 items-center justify-center rounded-md"
                      style={{ backgroundColor: `${course.accent}1f`, color: course.accent }}
                    >
                      <Icon className="size-3.5" aria-hidden />
                    </span>
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: course.accent }}
                    >
                      {course.code}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                      {entry.kind}
                    </span>
                    <span className="ml-auto text-xs font-semibold whitespace-nowrap">
                      {entry.time}
                    </span>
                  </div>
                  {entry.note && (
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{entry.note}</p>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <p className="rounded-lg border border-dashed border-border px-3 py-2 text-xs text-muted-foreground">
            Aucune séance programmée ce jour-là.
          </p>
        )}

        {day.dayNote && (
          <p className="flex items-start gap-2 rounded-r-lg border border-border border-l-4 border-l-amber-500 bg-muted/60 p-2.5 text-xs leading-relaxed text-muted-foreground">
            <TriangleAlert className="mt-0.5 size-3.5 shrink-0 text-amber-500" aria-hidden />
            {day.dayNote}
          </p>
        )}

        <div className="mt-auto">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Travail personnel suggéré
          </p>
          <div className="flex flex-wrap gap-1.5">
            {day.activities.map((activity) => (
              <span
                key={activity.label}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs"
              >
                <span className="text-muted-foreground">
                  {activity.slot.start} – {activity.slot.end}
                </span>
                {activity.label}
                <span className="font-semibold text-primary">{activity.hours}</span>
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function PlanningPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <UnsplashImage photo="photo-1454165804606-c3d57bc86b40" alt="Agenda et prise de notes" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Badge variant="muted" className="mb-3">
            Organisation
          </Badge>
          <h1 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Calendrier et répartition hebdomadaire
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Le calendrier officiel des cours de la session d&rsquo;hiver 2027, jour par jour, avec
            pour chaque jour une proposition de travail personnel visant les 25 heures
            hebdomadaires recommandées.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        {/* ---------------------------------------- Calendrier interactif */}
        <section aria-labelledby="calendrier">
          <h2
            id="calendrier"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            <CalendarDays className="size-5 text-primary" aria-hidden />
            Calendrier de la session — Hiver 2027
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Toute la session du 11 janvier au 23 avril 2027, navigable mois par mois&nbsp;:
            séances de cours, laboratoires, plages suggérées de travail personnel, semaine de
            lecture (1er au 5 mars), congé de Pâques (26 au 29 mars), dates limites
            administratives et période d&rsquo;examens (26 avril au 2 mai).
          </p>
          <div className="mt-6">
            <SessionCalendar />
          </div>
        </section>

        {/* ------------------------------------------------------- Grille horaire */}
        <section aria-labelledby="grille">
          <h2
            id="grille"
            className="font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            Répartition officielle des heures
          </h2>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cours</TableHead>
                  <TableHead>Cours</TableHead>
                  <TableHead>Laboratoire</TableHead>
                  <TableHead>Travail personnel</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-semibold">{course.code}</TableCell>
                    <TableCell>{course.workload.course}</TableCell>
                    <TableCell>{course.workload.lab}</TableCell>
                    <TableCell>{course.workload.personal}</TableCell>
                    <TableCell>{course.workload.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell className="font-semibold">Total</TableCell>
                  <TableCell>15 h</TableCell>
                  <TableCell>5 h</TableCell>
                  <TableCell>25 h</TableCell>
                  <TableCell className="font-semibold">45 h</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </section>

        {/* ---------------------------------------- Calendrier de la session */}
        <section aria-labelledby="emploi-du-temps">
          <h2
            id="emploi-du-temps"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            <CalendarDays className="size-5 text-primary" aria-hidden />
            Emploi du temps hebdomadaire — cours et travail personnel
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Ce choix de cinq cours est réalisable sur le plan des horaires, à condition de bien
            choisir les modalités de participation et les sections de laboratoire. Un seul
            chevauchement subsiste&nbsp;: 50 minutes le mardi entre GLO-2005 et GIF-1001,
            potentiellement résolvable grâce à la formule comodale de GLO-2005 (séances
            enregistrées, suivies en classe ou à distance). Chaque jour indique aussi le
            travail personnel suggéré&nbsp;: c&rsquo;est un point de départ, pas un horaire
            rigide&nbsp;: les échéances, les examens et les laboratoires déterminent les
            priorités réelles de chaque semaine.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Horaires officiels du 11 janvier au 23 avril 2027, sujets à modification par
            l&rsquo;université — la page officielle de chaque cours reste la référence.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {calendarDays.map((day) => (
              <CalendarDayCard key={day.day} day={day} />
            ))}
          </div>
        </section>

        {/* ---------------------------------------- Laboratoire GIF-1003 */}
        <section aria-labelledby="laboratoire">
          <h2
            id="laboratoire"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            <FlaskConical className="size-5 text-primary" aria-hidden />
            Choix du laboratoire GIF-1003 (vendredi)
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Le cours GIF-1003 comporte une section liée obligatoire le vendredi, pour les
            travaux pratiques. Quatre plages horaires sont offertes&nbsp;:
          </p>

          <div className="mt-4 max-w-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Horaire du vendredi</TableHead>
                  <TableHead>Recommandation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {labSections.map((lab) => (
                  <TableRow key={lab.section}>
                    <TableCell className="font-semibold">{lab.section}</TableCell>
                    <TableCell>{lab.time}</TableCell>
                    <TableCell>
                      {lab.recommended ? (
                        <Badge>Recommandée</Badge>
                      ) : (
                        <span className="text-sm text-muted-foreground">Compatible</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 max-w-2xl">
            <Callout title="Choix conseillé">
              Privilégier la section B ou C&nbsp;: elle laisse le vendredi matin libre tout en
              restant pleinement compatible avec les quatre autres cours. Les quatre sections
              restent toutefois compatibles avec le reste de l&rsquo;horaire — le choix peut
              donc aussi dépendre des préférences personnelles (matin ou après-midi).
            </Callout>
          </div>
        </section>

        {/* ---------------------------------------- Points à confirmer */}
        <section aria-labelledby="confirmations">
          <h2
            id="confirmations"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            <TriangleAlert className="size-5 text-amber-500" aria-hidden />
            Points à confirmer avant de finaliser l&rsquo;inscription
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Avant de finaliser l&rsquo;inscription, il reste à obtenir une confirmation de la
            gestion des études sur les points suivants&nbsp;:
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {scheduleConfirmations.map((question, index) => (
              <div
                key={question}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-xs font-bold text-amber-600 dark:text-amber-400">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed">{question}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 max-w-2xl">
            <Callout title="Verdict">
              Aucun des cinq cours ne doit être abandonné pour le moment. Le seul problème
              identifié est le chevauchement du mardi, qui pourrait être résolu grâce à la
              formule comodale de GLO-2005 — d&rsquo;où l&rsquo;importance des confirmations
              ci-dessus. Il reste aussi à choisir la section de laboratoire de GIF-1003 et à
              vérifier les horaires d&rsquo;examens.
            </Callout>
          </div>
          <div className="mt-4">
            <Button asChild variant="outline">
              <Link to="/cours">Voir les pages officielles de chaque cours</Link>
            </Button>
          </div>
        </section>

        {/* ---------------------------------------------- Types de travail */}
        <section aria-labelledby="worktypes">
          <h2 id="worktypes" className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            Trois types de travail, séparés
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Ne pas confondre les trois&nbsp;: un exercice universitaire n&rsquo;a pas
            nécessairement besoin de devenir un projet GitHub.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {workTypes.map((type) => {
              const Icon = workTypeIcons[type.title as keyof typeof workTypeIcons]
              return (
                <Card key={type.title}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <CardTitle className="text-base">{type.title}</CardTitle>
                    </div>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {type.items.map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}
