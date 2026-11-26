import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'

type ExternalLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

/** Opens in a new tab, safely, with a small outward arrow indicator. */
export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-0.5 font-medium text-primary underline-offset-4 hover:underline',
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-3.5" aria-hidden />
    </a>
  )
}
