import type { ReactNode } from 'react'
import { SectionLabel } from './SectionLabel'

type SectionShellProps = {
  id: string
  label: string
  children: ReactNode
  className?: string
  headerClassName?: string
}

export function SectionShell({
  id,
  label,
  children,
  className = '',
  headerClassName = 'items-center',
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={[
        'border-b border-oc-border px-6 py-section md:px-12',
        className,
      ].join(' ')}
    >
      <div className={['flex justify-between gap-6', headerClassName].join(' ')}>
        <SectionLabel>{label}</SectionLabel>
      </div>

      {children}
    </section>
  )
}
