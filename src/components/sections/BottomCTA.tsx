'use client'

import Link from 'next/link'

export default function BottomCTA() {
  return (
    <section className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 bg-navy-dark">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#6F2DBD]/15 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#A663CC]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5" style={{ color: '#FFFFFF', lineHeight: 1.15 }}>
            Start tracking in minutes
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Two lines of code. Real-time behavioural insights. No PII. Free to start.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171123]"
              style={{ background: 'linear-gradient(135deg, #6F2DBD, #A663CC)', color: '#FFFFFF', boxShadow: '0 8px 24px rgba(111,45,189,0.4)' }}
            >
              Start free trial
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171123]"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}
            >
              Questions? Talk to us
            </Link>
          </div>

          {/* Links row */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Read the docs', href: '/resources', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              { label: 'View pricing', href: '/pricing', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { label: 'See a demo', href: '/demo', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171123] rounded"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
