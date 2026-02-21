import Hero from '@/components/sections/Hero'
import SocialProofSection from '@/components/sections/SocialProofSection'
import HowItWorks from '@/components/sections/HowItWorks'
import FeatureGrid from '@/components/sections/FeatureGrid'
import UseCasesSection from '@/components/sections/UseCasesSection'
import BottomCTA from '@/components/sections/BottomCTA'
import ProblemSection from '@/components/sections/ProblemSection'
import IndiaRelevanceSection from '@/components/sections/IndiaRelevanceSection'

export default function HomePage() {
  return (
    <div className="min-h-screen relative z-10">
      <Hero />

      <div className="relative z-10">
        <section className="py-16 sm:py-24 bg-white" aria-label="Problem">
          <ProblemSection />
        </section>

        <section className="py-16 sm:py-24 bg-[#F8F5FC]" aria-label="How it works">
          <HowItWorks />
        </section>

        <section className="py-16 sm:py-24 bg-[#FBFBFB]" aria-label="Capabilities">
          <FeatureGrid />
        </section>

        <SocialProofSection />

        <section className="pt-16 sm:pt-20 pb-6 sm:pb-8 bg-white" aria-label="Use cases">
          <UseCasesSection />
        </section>

        <IndiaRelevanceSection />

        <BottomCTA />
      </div>
    </div>
  )
}
