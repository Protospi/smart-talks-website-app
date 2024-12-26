import { SiteHeader } from "@/components/site-header"
import { ProductsHeroSection } from "@/components/products/hero-section"
import { SpecialFooter } from "@/components/special-footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <ProductsHeroSection />
      <SpecialFooter />
      <ScrollProgress />
    </div>
  )
} 