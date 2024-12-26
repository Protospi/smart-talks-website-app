import { SiteHeader } from "@/components/site-header"
import { CasesHeroSection } from "@/components/cases/hero-section"
import { SpecialFooter } from "@/components/special-footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <CasesHeroSection />
      <SpecialFooter />
      <ScrollProgress />
    </div>
  )
} 