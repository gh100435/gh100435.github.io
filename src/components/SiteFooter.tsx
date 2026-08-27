import { brand } from '../data/profile'

export function SiteFooter() {
  return (
    <footer className="border-t border-oc-border bg-oc-bg text-left text-oc-muted">
      <div className="mx-auto grid w-full max-w-oc-content grid-cols-1 items-center gap-7 border-x border-oc-border px-6 py-8 font-mono text-xs leading-6 md:grid-cols-3 md:px-12">
        <p className="md:justify-self-start">{brand.footerSummary}</p>

        <p className="md:justify-self-center">© 2026</p>

        <a
          href="#home"
          className="inline-flex items-center gap-2.5 text-oc-muted no-underline transition-colors hover:text-oc-coral md:justify-self-end"
        >
          <img src="/favicon.svg" alt="" className="h-5 w-5" />
          <span>{brand.name}</span>
        </a>
      </div>
    </footer>
  )
}
