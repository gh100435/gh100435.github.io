import { HeroSection } from './components/HeroSection'
import { SkillInventorySection } from './components/SkillInventorySection'
import { DemoSection } from './components/DemoSection'
import { LegacySection } from './components/LegacySection'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <div className="mx-auto w-full max-w-[1200px] border-x border-oc-border">
          <SkillInventorySection />
          <DemoSection />
          <LegacySection />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export default App