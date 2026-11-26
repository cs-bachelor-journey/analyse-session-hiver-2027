import { useState, type ReactNode } from 'react'
import { ImageIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type UnsplashImageProps = {
  /** Unsplash photo id, e.g. "photo-1461749280684-dccba630e2f6" */
  photo: string
  alt: string
  className?: string
  /** Content shown if the image fails to load (icon, illustration, etc.) */
  fallback?: ReactNode
}

/**
 * Free cover image from Unsplash with a graceful gradient fallback
 * when the network is unavailable or the photo no longer exists.
 */
export function UnsplashImage({ photo, alt, className, fallback }: UnsplashImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/25 via-primary/10 to-transparent',
          className,
        )}
      >
        {fallback ?? <ImageIcon className="size-10 text-primary/60" aria-hidden />}
      </div>
    )
  }

  return (
    <img
      src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1600&q=70`}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn('h-full w-full object-cover', className)}
    />
  )
}
