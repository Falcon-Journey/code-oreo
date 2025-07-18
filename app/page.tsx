import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import LogoScroller from "@/components/logo-scroller"
import ServicesSection from "@/components/services-section"
import TechStack from "@/components/tech-stack"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LogoScroller />
      <ServicesSection />
      <TechStack />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}
