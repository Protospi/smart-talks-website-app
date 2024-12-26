import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BigNumbers } from "@/components/big-numbers"
import { FeaturesSection } from "@/components/features-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { ModulesSection } from "@/components/modules-section"
import { MultichannelSection } from "@/components/multichannel-section"
import { SdmSection } from "@/components/sdm-section"
import { CampaignsSection } from "@/components/campaigns-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { PlansSection } from "@/components/plans-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />
      <HeroSection />
      <BigNumbers />
      <FeaturesSection />
      <ServicesSection />
      <ClientsSection />
      <ModulesSection />
      <MultichannelSection />
      <SdmSection />
      <CampaignsSection />
      <IntegrationsSection />
      <PlansSection />
      <FooterSection />
    </div>
  )
}

