import { SiteHeader } from "@/components/site-header"
import { AboutHeroSection } from "@/components/about/hero-section"
import { AboutContentSection } from "@/components/about/content-section"
import { CoreValuesSection } from "@/components/about/core-values-section"
import { TransformationSection } from "@/components/about/transformation-section"
import { SpecialFooter } from "@/components/special-footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <AboutHeroSection />
      <AboutContentSection />
      <CoreValuesSection />
      <TransformationSection />
      <SpecialFooter />
      <ScrollProgress />
    </div>
  )
} 