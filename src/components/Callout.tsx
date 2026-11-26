import { Lightbulb } from 'lucide-react'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type CalloutProps = {
  title?: string
  accent?: string
  className?: string
  children: ReactNode
}

/** Advice / recommendation banner, tinted with a course accent color. */
export function Callout({ title = 'Conseil', accent, className, children }: CalloutProps) {
  return (
    <div
      className={cn(
        'flex gap-3 rounded-r-lg border border-border border-l-4 bg-muted/60 p-4',
        className,
      )}
      style={accent ? { borderLeftColor: accent } : undefined}
    >
      <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
      <div className="text-sm leading-relaxed">
        <span className="font-semibold">{title}&nbsp;: </span>
        {children}
      </div>
    </div>
  )
}
