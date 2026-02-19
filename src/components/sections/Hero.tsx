'use client'

import HeroAnimation from './HeroAnimation'

/* ============================================
   HERO SECTION – Optimised layout, bg, spacing
   Design system: #FBFBFB, #6F2DBD, #A663CC, #171123
   ============================================ */

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[min(100vh,900px)] flex items-center justify-center"
      aria-label="Hero"
    >
      {/* Background – design system palette, subtle gradient */}
      <div className="absolute inset-0 bg-[#FBFBFB]" />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: 'linear-gradient(165deg, #FBFBFB 0%, #F8F5FC 35%, #F3EEFA 70%, #EDE6F6 100%)',
        }}
      />
      {/* Single soft blob – right side only, no clutter */}
      <div
        className="absolute top-0 right-0 w-[min(80%,520px)] h-[min(85%,680px)] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-90"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 70% 30%, rgba(111,45,189,0.06) 0%, transparent 55%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[min(60%,400px)] h-[50%] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-90"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 30% 80%, rgba(166,99,204,0.05) 0%, transparent 55%)' }}
      />

      {/* Content – centred, consistent padding */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center min-h-[min(100vh,900px)]">
        <HeroAnimation />
      </div>
    </section>
  )
}
