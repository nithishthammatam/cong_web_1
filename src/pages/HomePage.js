import Hero from '@/components/sections/Hero'
import SocialProofSection from '@/components/sections/SocialProofSection'
import HowItWorks from '@/components/sections/HowItWorks'
import FeatureGrid from '@/components/sections/FeatureGrid'
import UseCasesSection from '@/components/sections/UseCasesSection'
import BottomCTA from '@/components/sections/BottomCTA'

export default function HomePage() {
  return (
    <div className="min-h-screen relative" style={{ zIndex: 10 }}>
      {/* 1. Hero Section */}
      <Hero />

      <div className="relative z-10">
        {/* 2. How It Works */}
        <div className="py-14 sm:py-20" style={{ backgroundColor: '#F8F5FC' }}>
          <HowItWorks />
        </div>

        {/* 3. Capabilities — slightly more spacing for hierarchy */}
        <div className="py-16 sm:py-24">
          <FeatureGrid />
        </div>

        {/* 4. Social Proof — full-width carousel */}
        <SocialProofSection />

        {/* 5. Use Cases */}
        <div className="py-14 sm:py-20">
          <UseCasesSection />
        </div>

        {/* 6. Bottom CTA */}
        <BottomCTA />
      </div>
    </div>
  )
}
