import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  TriangleAlert,
  CalendarDays,
  Layers,
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
import { UnsplashImage } from '@/components/UnsplashImage'
import { courseIcons } from '@/components/courseIcons'
import { courses } from '@/data/courses'
import { preSessionChecklist } from '@/data/planning'

const domainImportance = [
  { domain: 'C++', benefit: 'Maîtrise de la programmation et de la gestion mémoire' },
  { domain: 'SQL', benefit: 'Conception et gestion des données' },
  { domain: 'Logique', benefit: 'Raisonnement rigoureux' },
  { domain: 'Informatique théorique', benefit: 'Compréhension des fondements du calcul' },
  { domain: 'Architecture', benefit: 'Compréhension du fonctionnement matériel' },
]

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6 max-w-2xl">
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 text-muted-foreground">{description}</p>}
    </div>
  )
}

export function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <UnsplashImage
            photo="photo-1531297484001-80022131f5a1"
            alt="Espace de travail sombre avec un ordinateur portable"
            className="scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Badge variant="muted" className="mb-4">
            Baccalauréat en informatique · Hiver 2027
          </Badge>
          <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Session d&rsquo;hiver 2027 : le guide complet
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Une session de 15 crédits analysée sous tous les angles : charge de travail,
            compétences à acquérir, ressources pour apprendre en profondeur et projets
            personnels pour consolider chaque matière.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 font-medium">
              <Layers className="size-4 text-primary" aria-hidden /> 5 cours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 font-medium">
              <Clock className="size-4 text-primary" aria-hidden /> 45 h / semaine
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 font-medium">
              <CalendarDays className="size-4 text-primary" aria-hidden /> Début des cours&nbsp;: 11 janvier 2027
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/cours">
                Explorer les cours <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/planning">Voir le planning</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 sm:py-20">
        {/* ------------------------------------------------- Cinq domaines */}
        <section aria-labelledby="domains">
          <SectionHeading
            title="Cinq domaines complémentaires"
            description="Cette combinaison de cours permet de développer un profil informatique solide : elle couvre la programmation orientée objet et le génie logiciel, les bases de données, la logique mathématique, les fondements théoriques du calcul et l'architecture des ordinateurs. Au-delà de la programmation, elle donne les clés pour comprendre comment les logiciels et les machines fonctionnent réellement."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = courseIcons[course.id]
              return (
                <Card
                  key={course.id}
                  className="group transition-shadow hover:shadow-md"
                  style={{ borderTop: `4px solid ${course.accent}` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${course.accent}1f`, color: course.accent }}
                      >
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-mono text-xs font-semibold" style={{ color: course.accent }}>
                          {course.code}
                        </p>
                        <CardTitle className="text-base">{course.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription>{course.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" size="sm" className="px-0">
                      <Link to={`/cours/${course.id}`}>
                        Découvrir le cours
                        <ArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* ----------------------------------------------- Charge de travail */}
        <section aria-labelledby="workload">
          <SectionHeading
            title="Charge de travail hebdomadaire"
            description="Cinq cours de 3 crédits, soit 15 crédits au total — une charge de temps plein classique, mais dense. Voici la répartition officielle des heures."
          />
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
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
                      <TableCell className="font-semibold">
                        <Link to={`/cours/${course.id}`} className="hover:underline">
                          {course.code}
                        </Link>
                      </TableCell>
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

            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-3xl font-extrabold">45 h / semaine</CardTitle>
                  <CardDescription>
                    Charge hebdomadaire théorique pour les cinq cours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div
                    className="flex h-12 overflow-hidden rounded-lg text-xs font-semibold text-white"
                    role="img"
                    aria-label="Répartition : cours 15 heures, laboratoires 5 heures, travail personnel 25 heures"
                  >
                    <div className="flex min-w-14 items-center px-2" style={{ flex: 15, background: '#2563c9' }}>
                      Cours : 15 h
                    </div>
                    <div className="flex min-w-12 items-center px-2" style={{ flex: 5, background: '#c8601c' }}>
                      Labos : 5 h
                    </div>
                    <div className="flex min-w-14 items-center px-2" style={{ flex: 25, background: '#16895c' }}>
                      Personnel : 25 h
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    C&rsquo;est une charge importante, mais conforme à une session normale de
                    15 crédits à temps plein. Les 25 heures de travail personnel ne sont toutefois
                    pas toujours suffisantes&nbsp;: les preuves mathématiques, les automates et la
                    programmation C++ demandent souvent un investissement supplémentaire.
                  </p>
                  <ul className="space-y-2 text-sm">
                    {[
                      '25 heures pour le travail personnel prévu par les cours.',
                      '3 à 5 heures supplémentaires pour les révisions et les exercices difficiles.',
                      "Du temps réservé aux projets personnels, sans empiéter sur les travaux universitaires.",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------- Rentrée 2027 */}
        <section aria-labelledby="preparation">
          <SectionHeading
            title="Préparer la rentrée du 11 janvier 2027"
            description="Quelques révisions ciblées avant le début des cours suffisent : l'objectif est d'arriver avec de bonnes bases, puis de construire la maîtrise pendant les 15 semaines de session."
          />
          <Card>
            <CardContent className="grid gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3">
              {preSessionChecklist.map((item, index) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
              <div className="flex items-center gap-2 rounded-lg bg-muted/60 p-4 sm:col-span-2 lg:col-span-1">
                <BookOpen className="size-5 shrink-0 text-primary" aria-hidden />
                <p className="text-sm text-muted-foreground">
                  Les projets personnels accompagnent ensuite les notions enseignées, au fil de la
                  session plutôt qu&rsquo;en parallèle de tout.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ------------------------------------------------------- Bilan */}
        <section aria-labelledby="bilan">
          <SectionHeading
            title="Pourquoi cette combinaison fonctionne"
            description="Chaque cours développe une compétence distincte et complémentaire des autres."
          />
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domaine</TableHead>
                    <TableHead>Apport pour le profil informatique</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {domainImportance.map((row) => (
                    <TableRow key={row.domain}>
                      <TableCell className="font-semibold">{row.domain}</TableCell>
                      <TableCell className="text-muted-foreground">{row.benefit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="lg:col-span-2">
              <Card
                className="h-full border-l-4"
                style={{ borderLeftColor: '#c8601c' }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <TriangleAlert className="size-5" style={{ color: '#c8601c' }} aria-hidden />
                    Le vrai risque&nbsp;: la dispersion
                  </CardTitle>
                  <CardDescription>
                    Le principal danger n&rsquo;est pas le nombre de cours, mais l&rsquo;éparpillement
                    entre cinq domaines très différents. La clé est de ne pas vouloir absorber
                    toutes les ressources ni réaliser tous les projets en même temps&nbsp;: un
                    projet principal par cours suffit à construire un portfolio cohérent.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline">
                    <Link to="/projets">
                      Voir les projets prioritaires <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
