import { Link } from 'react-router-dom'

import { courses } from '@/data/courses'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-base font-bold">Session d&rsquo;hiver 2027</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Baccalauréat en informatique — guide de session.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Cours de la session</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {courses.map((course) => (
              <li key={course.id}>
                <Link
                  to={`/cours/${course.id}`}
                  className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  {course.code} — {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Pages</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link to="/projets" className="text-muted-foreground transition-colors hover:text-foreground hover:underline">
                Idées de projets
              </Link>
            </li>
            <li>
              <Link to="/planning" className="text-muted-foreground transition-colors hover:text-foreground hover:underline">
                Planning hebdomadaire
              </Link>
            </li>
            <li>
              <Link to="/ressources" className="text-muted-foreground transition-colors hover:text-foreground hover:underline">
                Ressources complémentaires
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5">
        <p className="mx-auto max-w-6xl px-4 text-xs text-muted-foreground sm:px-6">
          Les ressources externes citées sont gratuites, sauf mention contraire. Images :
          Unsplash.
        </p>
      </div>
    </footer>
  )
}
