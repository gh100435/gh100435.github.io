import devImg from '../assets/dev.png'
import { brand, socialLinks } from '../data/profile'

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(70svh-3.25rem)] flex-col items-center justify-center gap-6 border-b border-oc-border bg-oc-bg px-5 py-20 text-center text-oc-text"
    >
      <div className="relative">
        <img
          src={devImg}
          className="relative z-0 h-auto w-[170px]"
          width="170"
          height="179"
          alt=""
        />
      </div>

      <div>
        <h1 className="text-[56px] font-medium leading-tight tracking-[-0.03em] text-oc-text max-md:text-4xl">
          {brand.displayName}
        </h1>

        <p className="mt-6 text-[18px] leading-8 text-oc-muted max-md:text-base">
          {brand.heroLines.map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        {socialLinks.map((item) => {
          const Icon = item.icon

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-md text-oc-muted transition-colors hover:bg-oc-interactive hover:text-oc-coral"
            >
              <Icon className="h-5 w-5" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
