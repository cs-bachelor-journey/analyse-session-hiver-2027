import { Link } from 'react-router-dom'
import { ArrowLeft, SearchX } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <span className="flex size-16 items-center justify-center rounded-2xl bg-muted">
        <SearchX className="size-8 text-muted-foreground" aria-hidden />
      </span>
      <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        La page demandée n&rsquo;existe pas ou a été déplacée. Retourner à l&rsquo;accueil pour
        poursuivre la visite.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">
          <ArrowLeft aria-hidden /> Retour à l&rsquo;accueil
        </Link>
      </Button>
    </div>
  )
}
