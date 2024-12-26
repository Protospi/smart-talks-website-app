import { SiteHeader } from "@/components/site-header"
import { SolutionsHeroSection } from "@/components/solutions/hero-section"
import { SolutionsContent } from "@/components/solutions/solutions-content"
import { ScrollProgress } from "@/components/scroll-progress"
import { SpecialFooter } from "@/components/special-footer"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <SolutionsHeroSection />
      <SolutionsContent />
      <SpecialFooter />
      <ScrollProgress />
    </div>
  )
} 