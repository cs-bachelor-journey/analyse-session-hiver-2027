import { BookOpen, CalendarDays, GraduationCap, FolderGit2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { UnsplashImage } from '@/components/UnsplashImage'
import { courses } from '@/data/courses'
import { weekPlan, workTypes } from '@/data/planning'

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
            Répartition hebdomadaire
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Avec 45 heures théoriques par semaine, une organisation claire fait la différence.
            Cette proposition concerne le travail personnel uniquement&nbsp;: les heures de cours
            et de laboratoire sont déjà programmées dans la grille horaire.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6 sm:py-16">
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

        {/* ------------------------------------------------- Semaine type */}
        <section aria-labelledby="semaine">
          <h2
            id="semaine"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            <CalendarDays className="size-5 text-primary" aria-hidden />
            Exemple de semaine type
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Sélectionner un jour pour voir les activités suggérées. C&rsquo;est un point de
            départ, pas un horaire rigide&nbsp;: les échéances des travaux, les examens et les
            laboratoires déterminent les priorités réelles de chaque semaine.
          </p>

          <Card className="mt-6">
            <CardContent className="p-6">
              <Tabs defaultValue="Lundi">
                <TabsList className="w-full justify-start overflow-x-auto">
                  {weekPlan.map((day) => (
                    <TabsTrigger key={day.day} value={day.day}>
                      {day.day}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {weekPlan.map((day) => {
                  const total = day.activities.reduce(
                    (sum, activity) => sum + parseHours(activity.hours),
                    0,
                  )
                  return (
                    <TabsContent key={day.day} value={day.day} className="mt-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-lg font-bold">{day.day}</span>
                        <Badge variant="muted">≈ {formatHours(total)} de travail personnel</Badge>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {day.activities.map((activity) => (
                          <span
                            key={activity.label}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm"
                          >
                            {activity.label}
                            <span className="font-semibold text-primary">{activity.hours}</span>
                          </span>
                        ))}
                      </div>
                    </TabsContent>
                  )
                })}
              </Tabs>
            </CardContent>
          </Card>
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
