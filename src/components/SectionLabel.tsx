import type { ReactNode } from 'react'

type SectionLabelProps = {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={[
        'font-mono text-xs font-bold uppercase tracking-[0.12em] text-oc-coral',
        className,
      ].join(' ')}
    >
      {children}
    </p>
  )
}