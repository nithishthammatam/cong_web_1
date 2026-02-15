'use client'

const features = [
  {
    title: 'Screen Time Analytics',
    description: 'Know exactly how long users spend on each screen. Measure active vs. passive time with precision.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Session Intelligence',
    description: 'Measure session frequency, duration, and drop-off points. Understand when and why users leave.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Category Insights',
    description: 'See which app categories — games, social, productivity — capture user attention and for how long.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: 'Custom Events',
    description: 'Track any in-app action without backend code. Define events from the dashboard, ship instantly.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Cross-Platform Identity',
    description: 'Unify user journeys across Android and iOS. One user, one profile, complete picture.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function FeatureGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
          style={{ backgroundColor: 'rgba(111,45,189,0.07)', color: '#6F2DBD' }}
        >
          Capabilities
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: '#171123' }}>
          Everything you need to understand users
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A4458' }}>
          Five powerful features that give you complete visibility into user engagement.
        </p>
      </div>

      {/* Top row: 3 features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {features.slice(0, 3).map((feature, i) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </div>

      {/* Bottom row: 2 features centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {features.slice(3).map((feature, i) => (
          <FeatureCard key={i + 3} feature={feature} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ feature }) {
  return (
    <div
      className="group rounded-2xl border border-gray-200/80 p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#6F2DBD]/[0.05] hover:border-[#6F2DBD]/20"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: 'rgba(111,45,189,0.07)', color: '#6F2DBD' }}
      >
        {feature.icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold mb-2" style={{ color: '#171123' }}>{feature.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#4A4458' }}>{feature.description}</p>
    </div>
  )
}
