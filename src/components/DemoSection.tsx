import { SectionShell } from './SectionShell'

export function DemoSection() {
  return (
    <SectionShell id="demo" label="데모 프로젝트" headerClassName="items-end">
      <div className="mt-8 border border-oc-border bg-oc-surface/50 p-6">
        <p className="text-base leading-8 text-oc-muted">
          프로젝트 구현 데모입니다. 데모 프로젝트를 보충해나갈 예정입니다.
        </p>
      </div>
    </SectionShell>
  )
}
