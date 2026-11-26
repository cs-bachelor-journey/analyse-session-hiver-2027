import { BookOpen, Dumbbell, Eye, Flame, GraduationCap, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink } from '@/components/ExternalLink'
import { UnsplashImage } from '@/components/UnsplashImage'
import { platforms } from '@/data/resources'

const iconMap: Record<(typeof platforms)[number]['icon'], LucideIcon> = {
  graduation: GraduationCap,
  flame: Flame,
  dumbbell: Dumbbell,
  sparkles: Sparkles,
  eye: Eye,
}

export function ResourcesPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <UnsplashImage photo="photo-1507842217343-583bb7270b66" alt="Bibliothèque" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Badge variant="muted" className="mb-3">
            Bibliothèque
          </Badge>
          <h1 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ressources complémentaires
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            En plus des ressources propres à chaque cours, ces plateformes gratuites méritent une
            place dans la bibliothèque de tout étudiant en informatique.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => {
            const Icon = iconMap[platform.icon]
            return (
              <Card key={platform.name} className="flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <CardTitle className="text-base">{platform.name}</CardTitle>
                  </div>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <ExternalLink href={platform.url}>Accéder à la plateforme</ExternalLink>
                </CardContent>
              </Card>
            )
          })}

          <Card className="flex flex-col border-dashed">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <BookOpen className="size-5" aria-hidden />
                </span>
                <CardTitle className="text-base">Ressources par cours</CardTitle>
              </div>
              <CardDescription>
                Chaque cours possède sa propre sélection de ressources, classées par priorité.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto text-sm">
              <p className="text-muted-foreground">
                Voir la section «&nbsp;Ressources d&rsquo;apprentissage&nbsp;» de chaque page de
                cours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
