import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow?: string
  title?: string
  children: ReactNode
  className?: string
}

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative px-6 py-20 sm:py-28',
        className,
      )}
    >
      <div className="mx-auto max-w-4xl">
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && (
              <div className="mb-3 flex items-center gap-3">
                <span className="ink-rule h-px w-8" />
                <p className="font-mono text-sm uppercase tracking-widest text-wave">{eyebrow}</p>
              </div>
            )}
            {title && (
              <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
