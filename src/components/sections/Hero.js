'use client'

import HeroAnimation from './HeroAnimation'

/* ============================================
   MAIN HERO EXPORT
   ============================================ */

export default function Hero() {
  return (
    <section className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 md:min-h-[600px] flex items-center justify-center">
      {/* Background - light purple gradient with decorative blob */}
      <div className="absolute inset-0">
        {/* Base: very light purple tint */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f3edf9 0%, #ede4f7 30%, #e8e0f8 50%, #ddd6f3 100%)' }}></div>

        {/* Large decorative wave/blob shape - right side */}
        <svg className="absolute right-0 top-0 h-full w-[65%] hidden lg:block" viewBox="0 0 600 800" preserveAspectRatio="none" fill="none">
          <path d="M100,0 Q200,100 180,200 Q160,300 200,400 Q240,500 180,600 Q120,700 200,800 L600,800 L600,0 Z" fill="rgba(111,45,189,0.04)" />
          <path d="M150,0 Q250,120 230,240 Q210,360 250,480 Q290,580 230,700 Q170,780 250,800 L600,800 L600,0 Z" fill="rgba(166,99,204,0.03)" />
        </svg>

        {/* Soft glow orbs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#6F2DBD]/[0.06] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-[#A663CC]/[0.05] rounded-full blur-[80px]"></div>

        {/* Decorative circles - far edges */}
        <div className="absolute top-[15%] left-[5%] w-4 h-4 rounded-full border-2 border-[#6F2DBD]/[0.12] hidden lg:block"></div>
        <div className="absolute top-[35%] left-[3%] w-2 h-2 rounded-full bg-[#A663CC]/20 hidden lg:block"></div>
        <div className="absolute bottom-[25%] left-[8%] w-3 h-3 rounded-full border border-[#A663CC]/[0.15] hidden lg:block"></div>

        {/* Dots pattern - bottom left */}
        <div className="absolute bottom-[10%] left-[2%] hidden lg:block opacity-40">
          <div className="grid grid-cols-3 gap-2">
            {[0.4, 0.7, 0.3, 0.6, 0.9, 0.5, 0.2, 0.8, 0.4].map((op, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#6F2DBD]" style={{ opacity: op }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[600px] py-20 lg:py-24">
        <HeroAnimation />
      </div>
    </section>
  )
}
