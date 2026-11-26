import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  Hammer,
  Info,
  Library,
  ListChecks,
  Star,
  Target,
  TriangleAlert,
  User,
  MonitorSmartphone,
  GraduationCap,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Callout } from '@/components/Callout'
import { ExternalLink } from '@/components/ExternalLink'
import { UnsplashImage } from '@/components/UnsplashImage'
import { courseIcons } from '@/components/courseIcons'
import { courses, getCourse } from '@/data/courses'

function SectionTitle({ icon: Icon, children }: { icon: typeof BookOpen; children: string }) {
  return (
    <h2 className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl">
      <Icon className="size-5 text-primary" aria-hidden />
      {children}
    </h2>
  )
}

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>()
  const course = getCourse(id)

  if (!course) return <Navigate to="/cours" replace />

  const Icon = courseIcons[course.id]
  const index = courses.findIndex((c) => c.id === course.id)
  const previous = courses[index - 1]
  const next = courses[index + 1]

  return (
    <article>
      {/* ------------------------------------------------------------- Hero */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <UnsplashImage
            photo={course.image}
            alt={`Illustration du cours ${course.code}`}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${course.accent}e6, ${course.accent}b3 45%, transparent)`,
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link to="/cours">
              <ArrowLeft aria-hidden /> Tous les cours
            </Link>
          </Button>

          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-sm font-bold text-white shadow"
            style={{ backgroundColor: course.accent }}
          >
            <Icon className="size-4" aria-hidden />
            {course.code}
          </span>

          <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
            {course.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {course.tags.map((tag) => (
              <Badge
                key={tag}
                className="border-white/40 bg-white/15 text-white backdrop-blur"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-white/90">
            <Clock className="size-4" aria-hidden />
            {course.workload.course} de cours · {course.workload.lab} de laboratoire ·{' '}
            {course.workload.personal} de travail personnel · {course.workload.total} / semaine
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        {/* ------------------------------------------------ Présentation */}
        <section>
          <SectionTitle icon={BookOpen}>Présentation</SectionTitle>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{course.intro}</p>
        </section>

        {/* ------------------------------------ Informations officielles */}
        <section>
          <SectionTitle icon={Info}>Informations officielles — Hiver 2027</SectionTitle>
          <div className="mt-4">
            <Card>
              <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MonitorSmartphone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Mode d&rsquo;enseignement
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{course.mode}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Enseignant
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{course.teacher}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Horaire
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{course.schedule}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Préalables
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{course.prerequisites}</p>
                    {course.prerequisitesNote && (
                      <p className="text-xs text-muted-foreground">{course.prerequisitesNote}</p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <ExternalLink href={course.officialUrl} className="text-sm">
                    Page officielle du cours (ulaval.ca)
                  </ExternalLink>
                </div>
              </CardContent>
            </Card>
            {course.scheduleNote && (
              <p className="mt-3 flex items-start gap-2 rounded-r-lg border border-border border-l-4 border-l-amber-500 bg-muted/60 p-3 text-sm text-muted-foreground">
                <TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                {course.scheduleNote}
              </p>
            )}
          </div>
        </section>

        {/* ------------------------------------------------------------- Thèmes */}
        <section>
          <SectionTitle icon={ListChecks}>Thèmes du cours</SectionTitle>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Thème</TableHead>
                  <TableHead>Ce qu&rsquo;il faut comprendre</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {course.themes.map((theme) => (
                  <TableRow key={theme.theme}>
                    <TableCell className="font-semibold">{theme.theme}</TableCell>
                    <TableCell className="text-muted-foreground">{theme.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {course.themesNote && (
            <p className="mt-3 text-sm text-muted-foreground">{course.themesNote}</p>
          )}
        </section>

        {/* --------------------------------------------------------- Compétences */}
        <section>
          <SectionTitle icon={Target}>Compétences visées</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            À la fin du cours, les compétences suivantes devraient être acquises&nbsp;:
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {course.skills.map((skill) => (
              <li key={skill} className="flex items-start gap-2.5 text-sm leading-relaxed">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0"
                  style={{ color: course.accent }}
                  aria-hidden
                />
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* --------------------------------------------------------- Ressources */}
        <section>
          <SectionTitle icon={Library}>Ressources d&rsquo;apprentissage</SectionTitle>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {course.resources.map((resource) => (
              <Card
                key={resource.name}
                className="border-l-4"
                style={{ borderLeftColor: course.accent }}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {resource.priority && (
                      <Badge>
                        <Star className="size-3" aria-hidden />
                        Priorité principale
                      </Badge>
                    )}
                    {resource.paid && <Badge variant="muted">Ressource payante</Badge>}
                  </div>
                  <CardTitle className="text-base">{resource.name}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {resource.links.map((link) => (
                    <ExternalLink key={link.url} href={link.url}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------- Projets */}
        <section>
          <SectionTitle icon={Hammer}>Idées de projets personnels</SectionTitle>
          {course.projectsNote && (
            <p className="mt-4 text-muted-foreground">{course.projectsNote}</p>
          )}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.projects.map((project) => (
              <Card key={project.name} className="flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm" style={{ color: course.accent }}>
                    {project.name}
                  </CardTitle>
                  {project.level && (
                    <CardDescription className="text-xs font-medium">
                      {project.level}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span
                          className="mt-[7px] size-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: course.accent }}
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {project.example && (
                    <div className="mt-auto border-t border-border pt-3 text-xs leading-relaxed">
                      <span className="mr-1 font-medium text-muted-foreground">Exemple&nbsp;:</span>
                      <ExternalLink href={project.example.url}>{project.example.label}</ExternalLink>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Callout accent={course.accent}>{course.advice}</Callout>
          </div>
        </section>

        {/* ---------------------------------------------------- Prev / next */}
        <nav className="flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between" aria-label="Navigation entre les cours">
          {previous ? (
            <Button asChild variant="outline" className="justify-start">
              <Link to={`/cours/${previous.id}`}>
                <ArrowLeft aria-hidden />
                <span className="truncate">
                  {previous.code} — {previous.title}
                </span>
              </Link>
            </Button>
          ) : (
            <span className="hidden sm:block sm:flex-1" />
          )}
          {next ? (
            <Button asChild variant="outline" className="justify-start sm:justify-end">
              <Link to={`/cours/${next.id}`}>
                <span className="truncate">
                  {next.code} — {next.title}
                </span>
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          ) : (
            <span className="hidden sm:block sm:flex-1" />
          )}
        </nav>
      </div>
    </article>
  )
}
