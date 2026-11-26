import { Link } from 'react-router-dom'
import { ArrowRight, FolderGit2, Layers, Star } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Callout } from '@/components/Callout'
import { UnsplashImage } from '@/components/UnsplashImage'
import { courseIcons } from '@/components/courseIcons'
import { courses } from '@/data/courses'
import { projectPriorities } from '@/data/resources'

export function ProjectsPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <UnsplashImage photo="photo-1498050108023-c5249f4df085" alt="Code sur un ordinateur portable" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Badge variant="muted" className="mb-3">
            Portfolio
          </Badge>
          <h1 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Les 25 projets&nbsp;: lesquels réaliser&nbsp;?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Cinq idées de projets sont associées à chaque cours, soit 25 au total. Les développer
            toutes pendant la session n&rsquo;est ni réaliste ni utile&nbsp;: la stratégie
            recommandée est un projet principal par cours, éventuellement complété par un projet
            avancé pendant les vacances ou après les examens. Cinq projets sérieux couvrent ainsi
            cinq domaines différents de l&rsquo;informatique.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        {/* ----------------------------------------------------- Priorités */}
        <section aria-labelledby="priorities">
          <h2
            id="priorities"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            <Star className="size-5 text-primary" aria-hidden />
            Projets recommandés
          </h2>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cours</TableHead>
                  <TableHead>Projet principal</TableHead>
                  <TableHead>Projet avancé</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectPriorities.map((row) => (
                  <TableRow key={row.code}>
                    <TableCell className="font-semibold">
                      <Link to={`/cours/${row.courseId}`} className="hover:underline">
                        {row.code}
                      </Link>
                    </TableCell>
                    <TableCell>{row.main}</TableCell>
                    <TableCell className="text-muted-foreground">{row.advanced}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* ------------------------------------------------- Par cours */}
        <section aria-labelledby="all-projects">
          <h2
            id="all-projects"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            <FolderGit2 className="size-5 text-primary" aria-hidden />
            Tous les projets, par cours
          </h2>
          <Card className="mt-4">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {courses.map((course) => {
                  const Icon = courseIcons[course.id]
                  return (
                    <AccordionItem key={course.id} value={course.id}>
                      <AccordionTrigger>
                        <span className="flex items-center gap-3 text-left">
                          <span
                            className="flex size-8 shrink-0 items-center justify-center rounded-lg"
                            style={{ backgroundColor: `${course.accent}1f`, color: course.accent }}
                          >
                            <Icon className="size-4" aria-hidden />
                          </span>
                          <span>
                            <span className="block font-mono text-xs font-semibold" style={{ color: course.accent }}>
                              {course.code}
                            </span>
                            {course.title}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          {course.projects.map((project) => (
                            <div
                              key={project.name}
                              className="rounded-lg border border-border bg-card p-4"
                            >
                              <p className="text-sm font-semibold" style={{ color: course.accent }}>
                                {project.name}
                              </p>
                              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
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
                            </div>
                          ))}
                        </div>
                        <Callout accent={course.accent}>{course.advice}</Callout>
                        <Button asChild variant="ghost" size="sm">
                          <Link to={`/cours/${course.id}`}>
                            Voir la page du cours <ArrowRight aria-hidden />
                          </Link>
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* ------------------------------------------------- Bonnes pratiques */}
        <section aria-labelledby="practices">
          <h2
            id="practices"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl"
          >
            <Layers className="size-5 text-primary" aria-hidden />
            Trois types de travail à ne pas confondre
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Un exercice universitaire n&rsquo;a pas besoin de devenir un projet GitHub. Séparer le
            apprentissage universitaire, l&rsquo;approfondissement personnel et les projets
            pratiques permet de rester efficace&nbsp;:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'University Learning',
                points: [
                  'Notes de cours.',
                  'Exercices et devoirs.',
                  'Préparation aux examens.',
                  'Révisions hebdomadaires.',
                ],
              },
              {
                title: 'Deep Learning',
                points: [
                  'Livres et documentations.',
                  'Tutoriels spécialisés.',
                  'Exercices supplémentaires.',
                  'Notes techniques personnelles.',
                ],
              },
              {
                title: 'Practical Projects',
                points: [
                  'Dépôts GitHub indépendants.',
                  'Documentation README.',
                  'Tests et démonstrations.',
                  'Architecture et décisions techniques.',
                ],
              },
            ].map((type) => (
              <Card key={type.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {type.points.map((point) => (
                      <li key={point}>· {point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
