import { useState } from 'react';
import { SectionShell } from './SectionShell'
import { skillInventory } from '../data/skills'

const PREVIEW_SKILL_COUNT = 8

export function SkillInventorySection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const allSkills = skillInventory.flatMap((group) =>
    group.items.map((skill) => ({
      ...skill,
      category: group.category,
    })),
  )

  const visibleSkills = isExpanded
    ? allSkills
    : allSkills.slice(0, PREVIEW_SKILL_COUNT)
  const hiddenCount = allSkills.length - visibleSkills.length

  return (
    <SectionShell id="skills" label="스킬 인벤토리">
      <div className="mt-8 grid border-l border-t border-oc-border grid-cols-2 sm:grid-cols-4 md:grid-cols-6">
        {visibleSkills.map((skill) => {
          const Icon = skill.icon

          return (
            <article
              key={`${skill.category}-${skill.name}`}
              className="group flex min-h-32 flex-col items-center justify-center gap-4 border-b border-r border-oc-border text-center transition-colors hover:bg-oc-interactive"
            >
              <Icon className="h-7 w-7 text-oc-muted/45 transition-colors group-hover:text-oc-coral" />

              <span className="text-sm font-semibold text-oc-muted transition-colors group-hover:text-oc-text">
                {skill.name}
              </span>
            </article>
          )
        })}
      </div>


      {allSkills.length > PREVIEW_SKILL_COUNT && (
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
