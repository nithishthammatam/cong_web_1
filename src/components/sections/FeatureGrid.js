'use client'

const purple = '#6F2DBD'
const purpleLight = '#A663CC'
const purpleFade = 'rgba(111, 45, 189, 0.35)'
const purpleFadeLight = 'rgba(111, 45, 189, 0.15)'
const gridColor = 'rgba(23, 17, 35, 0.06)'

const features = [
  {
    id: '01',
    title: 'Screen Time Intelligence',
    description: 'Analyse usage distribution, focus duration, and active engagement time. See where attention goes and how it shifts across screens and sessions.',
    chart: (
      <svg viewBox="0 0 160 80" className="w-full h-full min-h-[56px]">
        <defs>
          <linearGradient id="cap1-shimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E5E0EB" />
            <stop offset="50%" stopColor={purpleFadeLight} />
            <stop offset="100%" stopColor="#E5E0EB" />
          </linearGradient>
        </defs>
        {/* Skeleton loader — real-time “loading analytics” feel */}
        <rect x="20" y="24" width="120" height="10" rx="4" fill="url(#cap1-shimmer)" opacity="0.9" />
        <rect x="20" y="40" width="90" height="10" rx="4" fill="url(#cap1-shimmer)" opacity="0.7" />
        <rect x="20" y="56" width="105" height="10" rx="4" fill="url(#cap1-shimmer)" opacity="0.8" />
        <circle cx="140" cy="40" r="8" fill={purple} fillOpacity="0.2" />
        <circle cx="140" cy="40" r="4" fill={purple} />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'App Switching Flows',
    description: 'Identify distractions and attention shifts across sessions. Map how users move between apps and where focus breaks.',
    chart: (
      <svg viewBox="0 0 160 80" className="w-full h-full min-h-[56px]">
        {/* Flow: app nodes connected by arrows (switches) */}
        {[28, 56, 84, 112, 140].map((x, i) => (
          <g key={i}>
            <rect x={x - 10} y="28" width="20" height="24" rx="4" fill={purpleFadeLight} stroke={purple} strokeWidth="1" />
            {i < 4 && (
              <path d={`M${x + 10} 40 H${x + 18}`} stroke={purpleLight} strokeWidth="1.5" strokeLinecap="round" />
            )}
          </g>
        ))}
        <circle cx="28" cy="40" r="3" fill={purple} />
        <circle cx="140" cy="40" r="3" fill={purple} />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Flow State Detection',
    description: 'Recognize deep-focus sessions and high-engagement periods. Surface when users are in the zone so you can learn what drives sustained attention.',
    chart: (
      <svg viewBox="0 0 160 80" className="w-full h-full min-h-[56px]">
        <defs>
          <linearGradient id="cap3-arc" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor={purpleLight} />
            <stop offset="100%" stopColor={purple} />
          </linearGradient>
        </defs>
        {/* Focus / flow meter — arc at high level (in the zone) */}
        <path d="M30 62 A 38 38 0 0 1 130 62" fill="none" stroke="#E5E0EB" strokeWidth="8" strokeLinecap="round" />
        <path d="M30 62 A 38 38 0 0 1 130 62" fill="none" stroke="url(#cap3-arc)" strokeWidth="8" strokeLinecap="round" strokeDasharray="78 82" strokeDashoffset="20" />
        <circle cx="80" cy="50" r="6" fill={purple} />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Behaviour Cohorts',
    description: 'Group users based on behavioural patterns, not personal data. Segment by engagement, retention, and usage style—all without PII.',
    chart: (
      <svg viewBox="0 0 160 80" className="w-full h-full min-h-[56px]">
        <defs>
          <filter id="cap3-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15" />
          </filter>
        </defs>
        <circle cx="80" cy="40" r="32" fill="none" stroke={purpleFadeLight} strokeWidth="10" strokeLinecap="round" />
        <circle cx="80" cy="40" r="32" fill="none" stroke={purple} strokeWidth="10" strokeDasharray="76 168" strokeLinecap="round" transform="rotate(-90 80 40)" filter="url(#cap3-shadow)" />
        <circle cx="80" cy="40" r="32" fill="none" stroke={purpleLight} strokeWidth="10" strokeDasharray="70 76" strokeDashoffset="-76" strokeLinecap="round" transform="rotate(-90 80 40)" />
        <circle cx="80" cy="40" r="32" fill="none" stroke="#E5E0EB" strokeWidth="10" strokeDasharray="54 147" strokeDashoffset="-146" strokeLinecap="round" transform="rotate(-90 80 40)" />
        <text x="80" y="43" textAnchor="middle" fill="#4A4458" fontSize="10" fontWeight="600">%</text>
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Distraction Mapping',
    description: 'Understand how often users break focus and their recovery time. Spot interruption patterns and time-to-refocus so you can improve product flow.',
    chart: (
      <svg viewBox="0 0 160 80" className="w-full h-full min-h-[56px]">
        {/* Timeline: focus blocks (full height) vs break markers (dips) */}
        <line x1="24" y1="40" x2="136" y2="40" stroke={purpleFadeLight} strokeWidth="4" strokeLinecap="round" />
        <rect x="24" y="28" width="22" height="24" rx="3" fill={purple} fillOpacity="0.5" />
        <rect x="50" y="28" width="18" height="24" rx="3" fill={purpleFadeLight} />
        <rect x="72" y="32" width="8" height="16" rx="2" fill="#E5E0EB" />
        <rect x="84" y="28" width="28" height="24" rx="3" fill={purple} fillOpacity="0.5" />
        <rect x="116" y="32" width="8" height="16" rx="2" fill="#E5E0EB" />
        <rect x="128" y="28" width="20" height="24" rx="3" fill={purpleFadeLight} />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Privacy-Safe Analytics',
    description: 'Zero PII. Anonymous identifiers. DPDP-compliant by design. Get rich behavioural insights without collecting or storing personal data.',
    chart: (
      <svg viewBox="0 0 160 80" className="w-full h-full min-h-[56px]">
        <defs>
          <linearGradient id="cap6-shield" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor={purple} stopOpacity="0.2" />
            <stop offset="100%" stopColor={purple} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Shield — privacy / protection */}
        <path d="M80 22 L56 32 L56 48 C56 58 68 68 80 72 C92 68 104 58 104 48 L104 32 Z" fill="url(#cap6-shield)" stroke={purple} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M72 48 L78 54 L88 42" fill="none" stroke={purple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function FeatureGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header — same style as Quick Setup, extra spacing for hierarchy */}
      <div className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 bg-purple-primary/10 text-purple-primary"
        >
          Capabilities
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-navy-dark">
          Everything you need to understand users
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-text-secondary">
          Six capabilities for behavioural insight—privacy-safe, cohort-ready, and built for attention analytics.
        </p>
      </div>

      {/* Rectangle cards — like Quick Setup: no title/description bg, no Explore now */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {features.map((feature) => (
          <div key={feature.id}>
            <article
              className="h-full flex flex-col rounded-2xl border border-black/8 bg-white p-5 transition-all duration-300 hover:shadow-lg hover:border-purple-primary/20 shadow-sm"
            >
              {/* Number — no bg */}
              <span className="text-[11px] font-semibold uppercase tracking-widest mb-2 block text-purple-primary">
                {feature.id}
              </span>

              {/* Chart */}
              <div className="rounded-lg border border-gray-100 overflow-hidden mb-4 h-16 bg-gray-50/50">
                {feature.chart}
              </div>

              {/* Title — no bg */}
              <h3 className="text-lg font-bold tracking-tight mb-2 text-navy-dark">
                {feature.title}
              </h3>

              {/* Description — no bg */}
              <p className="text-sm leading-relaxed flex-1 text-text-secondary">
                {feature.description}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
