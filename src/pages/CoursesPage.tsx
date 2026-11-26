import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { UnsplashImage } from '@/components/UnsplashImage'
import { courseIcons } from '@/components/courseIcons'
import { courses } from '@/data/courses'

export function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <Badge variant="muted" className="mb-3">
          Cours de la session
        </Badge>
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Comprendre les cinq cours
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Chaque cours est détaillé sur sa propre page&nbsp;: thèmes abordés, compétences visées,
          ressources d&rsquo;apprentissage gratuites et idées de projets personnels.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => {
          const Icon = courseIcons[course.id]
          return (
            <Card
              key={course.id}
              className="group flex flex-col overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="relative h-40 overflow-hidden">
                <UnsplashImage
                  photo={course.image}
                  alt={`Illustration du cours ${course.code}`}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-bold text-white shadow"
                  style={{ backgroundColor: course.accent }}
                >
                  <Icon className="size-3.5" aria-hidden />
                  {course.code}
                </span>
              </div>

              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-1">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="outline" style={{ color: course.accent, borderColor: course.accent }}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground">{course.intro}</p>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" aria-hidden />
                  {course.workload.total} / semaine
                </span>
                <Button asChild variant="ghost" size="sm">
                  <Link to={`/cours/${course.id}`}>
                    Découvrir <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
