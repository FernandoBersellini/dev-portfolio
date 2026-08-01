import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-ink/25 bg-ink/10 px-3 py-1 font-mono text-xs text-ink',
        className,
      )}
    >
      {children}
    </span>
  )
}
