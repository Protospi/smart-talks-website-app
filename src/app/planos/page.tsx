import { SiteHeader } from "@/components/site-header"
import { PlansHeroSection } from "@/components/plans/hero-section"
import { PricingSection } from "@/components/plans/pricing-section"
import { SpecialFooter } from "@/components/special-footer"

export default function PlansPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PlansHeroSection />
        <PricingSection />
        <SpecialFooter />
      </main>
    </>
  )
} 