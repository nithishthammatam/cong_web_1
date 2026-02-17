'use client'

import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Get SDK',
    description: 'Everything you need in one package—ready when you are. No hunting, no guesswork.',
    href: '/get-started',
  },
  {
    number: '02',
    title: 'Integrate SDK in app',
    description: 'A few lines and your product is connected. We stay out of the way while staying in the loop.',
    href: '/get-started',
  },
  {
    number: '03',
    title: 'Deep analytics',
    description: 'See what actually happens when people use your product—attention, flow, and where it drops.',
    href: '/platform',
  },
  {
    number: '04',
    title: 'Insights and dashboard',
    description: 'One place where data becomes clarity. Spot trends, compare segments, and move with confidence.',
    href: '/platform',
  },
]

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 bg-purple-primary/10 text-purple-primary">
          Quick Setup
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-navy-dark">
          Up and running in 4 steps
        </h2>
        <p className="text-lg max-w-xl mx-auto text-text-secondary">
          From zero to full behavioural analytics in minutes.
        </p>
      </div>

      {/* Steps grid — equal-height cards, aligned headings & Explore now */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {steps.map((step, i) => (
          <Link
            key={i}
            href={step.href}
            className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-primary focus-visible:ring-offset-2 rounded-2xl min-h-[280px]"
          >
            <article
              className="flex flex-col flex-1 min-h-[280px] rounded-2xl border border-black/8 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-purple-primary/20"
            >
              {/* Step label + heading — fixed height, light bg */}
              <div className="h-[4rem] flex flex-col justify-end shrink-0 rounded-lg px-3 py-2 -mx-0.5 bg-purple-primary/[0.06]">
                <span className="text-[11px] font-semibold uppercase tracking-widest mb-1.5 text-purple-primary">
                  Step {step.number}
                </span>
                <h3 className="text-lg font-bold tracking-tight leading-snug text-navy-dark">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed flex-1 mt-3 min-h-0 rounded-lg px-3 py-2.5 text-text-secondary bg-black/[0.03]">
                {step.description}
              </p>

              <span className="inline-flex items-center gap-2 mt-4 pt-3 shrink-0 text-sm font-semibold border-t border-gray-100 transition-colors text-purple-primary group-hover:text-purple-dark">
                Explore now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
