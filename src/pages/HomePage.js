import Hero from '@/components/sections/Hero'
import SocialProofSection from '@/components/sections/SocialProofSection'
import HowItWorks from '@/components/sections/HowItWorks'
import FeatureGrid from '@/components/sections/FeatureGrid'
import DemoPreviewSection from '@/components/sections/DemoPreviewSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import BottomCTA from '@/components/sections/BottomCTA'

export default function HomePage() {
  return (
    <div className="min-h-screen relative" style={{ zIndex: 10 }}>
      {/* 1. Hero Section */}
      <Hero />

      <div className="relative z-10">
        {/* 2. Social Proof */}
        <div className="py-14 sm:py-20">
          <SocialProofSection />
        </div>

        {/* 3. How It Works */}
        <div className="py-14 sm:py-20" style={{ backgroundColor: '#F8F5FC' }}>
          <HowItWorks />
        </div>

        {/* 4. Key Features */}
        <div className="py-14 sm:py-20">
          <FeatureGrid />
        </div>

        {/* 5. Demo Dashboard Preview */}
        <div className="py-14 sm:py-20" style={{ backgroundColor: '#F8F5FC' }}>
          <DemoPreviewSection />
        </div>

        {/* 6. Use Cases */}
        <div className="py-14 sm:py-20">
          <UseCasesSection />
        </div>

        {/* 7. Bottom CTA */}
        <BottomCTA />
      </div>
    </div>
  )
}
