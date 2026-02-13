'use client'

import Button from '@/components/ui/Button'

export default function Hero({ title, subtitle }) {
  return (
    <section className="hero text-center mb-0 px-4 relative overflow-hidden flex items-start justify-center min-h-[calc(100vh-80px)] pt-20 sm:pt-24 pb-0" style={{ position: 'relative', zIndex: 10 }}>
      <div className="w-full relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {/* Centered Content */}
        <div className="w-full flex flex-col items-center text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#171123] mb-6 leading-tight font-bold pointer-events-auto"
          >
            {title || 'Privacy-First Behaviour Intelligence for Modern Apps'}
          </h1>
          {subtitle && (
            <p className="text-xl sm:text-2xl text-[#4A4458] mb-8 max-w-2xl mx-auto leading-relaxed pointer-events-auto font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Centered Buttons Row */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 pointer-events-auto">
          <Button
            href="/get-started"
            variant="primary"
            className="w-full sm:w-auto text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10">Start free trial</span>
            <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>

          <Button
            href="/contact-sales"
            variant="secondary"
            className="w-full sm:w-auto text-xl hover:shadow-lg gap-3 group"
          >
            <svg className="w-6 h-6 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Request a demo</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
