'use client'

const useCases = [
  {
    id: 'ecommerce',
    category: 'Ecommerce',
    headline: 'See where shoppers focus—and where they leave',
    description: 'Measure screen time on product pages, cart, and checkout. Spot which steps lose attention and cut cart abandonment using real behavioral data.',
    accent: '#6F2DBD',
    icon: (
      <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'edutech',
    category: 'Edutech',
    headline: 'Keep learners engaged from first lesson to last',
    description: 'Track lesson completion, time on content, and session patterns. Find drop-off points and improve course retention with engagement insights.',
    accent: '#5A2399',
    icon: (
      <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 'social',
    category: 'Social',
    headline: 'Compare feed vs. messaging for real attention',
    description: 'See how users split time between feed and DMs. Use scroll depth and return frequency to tune algorithms and keep users engaged.',
    accent: '#A663CC',
    icon: (
      <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'gaming',
    category: 'Gaming',
    headline: 'Find the levels that make players stay or quit',
    description: 'Per-level screen time and session drop-offs show where players churn. Use behavioral data to fix friction and keep players hooked.',
    accent: '#6F2DBD',
    icon: (
      <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 6h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2z" />
        <circle cx="9" cy="11" r="1.5" />
        <circle cx="15" cy="11" r="1.5" />
        <path d="M10 14h4" />
      </svg>
    ),
  },
]

export default function UseCasesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 bg-purple-primary/10 text-purple-primary">
          Use Cases
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-navy-dark">
          No matter what you build, we&apos;ve got you covered.
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-text-secondary leading-relaxed">
          <span className="block">Cognera works across ecommerce, edtech, social, gaming, and more,</span>
          <span className="block">bringing powerful behavioural analytics to every kind of app.</span>
        </p>
      </div>

      {/* 2x2 grid — each card has left accent, icon, category, headline, description */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {useCases.map((uc) => (
          <article
            key={uc.id}
            className="group relative flex rounded-2xl border border-black/8 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-primary/10 hover:border-purple-primary/25"
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
              style={{ backgroundColor: uc.accent }}
              aria-hidden
            />

            <div className="flex flex-col flex-1 pl-5 pr-5 py-5 min-w-0">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${uc.accent}15`, color: uc.accent }}
                >
                  {uc.icon}
                </div>
                <span
                  className="text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: uc.accent }}
                >
                  {uc.category}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold leading-tight text-navy-dark">
                {uc.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {uc.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
