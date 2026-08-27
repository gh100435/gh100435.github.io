import { useState } from 'react'
import { projects } from '../data/projects'
import { SectionShell } from './SectionShell'

const PREVIEW_PROJECT_COUNT = 4

export function LegacySection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleProjects = isExpanded
    ? projects
    : projects.slice(0, PREVIEW_PROJECT_COUNT)
  const hiddenCount = projects.length - visibleProjects.length

  return (
    <SectionShell id="legacy" label="레거시">
      <div className="mt-8 border-t border-oc-border">
        {visibleProjects.map((project) => (
          <article
            key={`${project.year}-${project.title}`}
            className="grid gap-5 border-b border-oc-border py-7 text-left md:grid-cols-[120px_1fr]"
          >
            {/* 년도 */}
            <div className="flex items-center justify-between gap-4 md:block">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-oc-coral">
                {project.year}
              </span>
            </div>

            <div>
              {/* 프로젝트명 */}
              <h3 className="text-l tracking-[-0.02em] text-oc-text font-mono">
                {project.title}
              </h3>

              {/* 설명 */}
              <p className="mt-6 text-m text-oc-muted font-mono">
                {project.desc}
              </p>

              {/* 기술 */}
              <div className="mt-4 flex flex-wrap justify-start gap-2 font-mono">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-oc-border px-2 py-1 font-mono text-xs text-oc-muted transition-colors hover:border-oc-coral/50 hover:text-oc-coral"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {projects.length > PREVIEW_PROJECT_COUNT && (
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((value) => !value)}
          className="mt-6 w-full border border-oc-border px-4 py-3 font-mono text-xs text-oc-muted transition-colors hover:border-oc-coral/50 hover:text-oc-coral"
        >
          {isExpanded ? 'Show less ↑' : `Show more ↓ ${hiddenCount} hidden`}
        </button>
      )}
    </SectionShell>
  )
}
