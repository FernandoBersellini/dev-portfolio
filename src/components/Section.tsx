import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow?: string
  title?: string
  children: ReactNode
  className?: string
  transparent?: boolean
}

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className,
  transparent = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative px-6 py-20 sm:py-28',
        !transparent && 'bg-[#0a0a12]',
        className,
      )}
    >
      <div className="mx-auto max-w-4xl">
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && (
              <p className="mb-2 font-mono text-sm uppercase tracking-widest text-violet-400">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
