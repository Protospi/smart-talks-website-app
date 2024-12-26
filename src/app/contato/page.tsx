import { SiteHeader } from "@/components/site-header"
import { ContactHeroSection } from "@/components/contact/hero-section"
import { ContactSection } from "@/components/contact/contact-section"
import { ContactForm } from "@/components/contact/contact-form"
import { SpecialFooter } from "@/components/special-footer"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactHeroSection />
        <ContactSection />
        <ContactForm />
        <SpecialFooter />
      </main>
    </>
  )
} 