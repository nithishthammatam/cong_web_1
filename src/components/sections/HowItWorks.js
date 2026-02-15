'use client'

const steps = [
  {
    number: '01',
    title: 'Integrate SDK',
    description: 'Add two lines of code. Our lightweight SDK supports both Android & iOS natively.',
    icons: (
      <div className="flex items-center gap-3 mt-4">
        {/* Android */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium" style={{ backgroundColor: 'rgba(111,45,189,0.06)', color: '#6F2DBD' }}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.342a.998.998 0 0 0-.998.999v1.529a.997.997 0 1 0 1.996 0v-1.53a.998.998 0 0 0-.998-.998zm-11.046 0a.998.998 0 0 0-.998.999v1.529a.997.997 0 1 0 1.996 0v-1.53a.998.998 0 0 0-.998-.998zM6.477 13.21v4.966a.988.988 0 0 0 .986.988h.986v1.857a.998.998 0 1 0 1.997 0v-1.857h3.108v1.857a.998.998 0 0 0 1.997 0v-1.857h.986a.988.988 0 0 0 .986-.988V13.21H6.477zm9.042-5.618l.914-1.655a.192.192 0 0 0-.076-.26.19.19 0 0 0-.26.076l-.925 1.675A6.673 6.673 0 0 0 12 6.786c-1.14 0-2.206.286-3.173.642L7.903 5.753a.192.192 0 0 0-.26-.076.192.192 0 0 0-.076.26l.914 1.655C6.814 8.593 5.68 10.292 5.68 12.232h12.64c0-1.94-1.134-3.639-2.8-4.64zM9.593 10.77a.583.583 0 1 1 0-1.166.583.583 0 0 1 0 1.166zm4.814 0a.583.583 0 1 1 0-1.166.583.583 0 0 1 0 1.166z"/></svg>
          Android
        </div>
        {/* iOS */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium" style={{ backgroundColor: 'rgba(111,45,189,0.06)', color: '#6F2DBD' }}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          iOS
        </div>
      </div>
    ),
    visual: (
      <div className="mt-5 rounded-lg border border-gray-200/60 p-3 font-mono text-xs" style={{ backgroundColor: '#FAFAFE' }}>
        <div style={{ color: '#8B8696' }}>// Just two lines</div>
        <div><span style={{ color: '#6F2DBD' }}>import</span> <span style={{ color: '#171123' }}>Cognera</span> <span style={{ color: '#6F2DBD' }}>from</span> <span style={{ color: '#A663CC' }}>&apos;@cognera/sdk&apos;</span></div>
        <div><span style={{ color: '#171123' }}>Cognera</span>.<span style={{ color: '#6F2DBD' }}>init</span>(<span style={{ color: '#A663CC' }}>&apos;YOUR_KEY&apos;</span>)</div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Automatic Tracking',
    description: 'We capture screen time, session length, app categories, and custom events — automatically.',
    visual: (
      <div className="mt-5 space-y-2">
        {[
          { label: 'Screen Time', icon: '⏱️' },
          { label: 'Session Length', icon: '📊' },
          { label: 'App Categories', icon: '📂' },
          { label: 'Custom Events', icon: '⚡' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-gray-100" style={{ backgroundColor: '#FAFAFE' }}>
            <span className="text-sm">{item.icon}</span>
            <span className="text-xs font-medium" style={{ color: '#171123' }}>{item.label}</span>
            <div className="ml-auto w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
              <svg className="w-2.5 h-2.5" fill="none" stroke="#10b981" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '03',
    title: 'Real-time Dashboard',
    description: 'Visualize user behaviour and make data-driven decisions — instantly.',
    visual: (
      <div className="mt-5 rounded-lg border border-gray-200/60 p-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold" style={{ color: '#171123' }}>Live Overview</span>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#10b981' }}></span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-md p-2" style={{ backgroundColor: '#FAFAFE' }}>
            <div className="text-[9px]" style={{ color: '#8B8696' }}>Active Now</div>
            <div className="text-sm font-bold" style={{ color: '#171123' }}>47</div>
          </div>
          <div className="rounded-md p-2" style={{ backgroundColor: '#FAFAFE' }}>
            <div className="text-[9px]" style={{ color: '#8B8696' }}>Avg. Session</div>
            <div className="text-sm font-bold" style={{ color: '#171123' }}>6m 12s</div>
          </div>
        </div>
        <svg className="w-full h-8" viewBox="0 0 200 30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hiw-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6F2DBD" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#6F2DBD" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,25 Q30,20 60,16 T120,10 T180,6 T200,8 L200,30 L0,30 Z" fill="url(#hiw-grad)" />
          <path d="M0,25 Q30,20 60,16 T120,10 T180,6 T200,8" fill="none" stroke="#6F2DBD" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
          style={{ backgroundColor: 'rgba(111,45,189,0.07)', color: '#6F2DBD' }}
        >
          Quick Setup
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: '#171123' }}>
          Up and running in 3 steps
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: '#4A4458' }}>
          From zero to full behavioural analytics in under five minutes.
        </p>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="relative group">
            {/* Connector line between cards */}
            {i < 2 && (
              <div className="hidden md:block absolute top-14 -right-3 w-6 z-10">
                <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, #E5E0EB, #6F2DBD, #E5E0EB)' }}></div>
              </div>
            )}

            <div
              className="h-full rounded-2xl border border-gray-200/80 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#6F2DBD]/[0.05] hover:border-[#6F2DBD]/20"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Step number */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold mb-5"
                style={{ backgroundColor: 'rgba(111,45,189,0.07)', color: '#6F2DBD' }}
              >
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2" style={{ color: '#171123' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4A4458' }}>{step.description}</p>

              {/* Platform icons for step 1 */}
              {step.icons}

              {/* Visual */}
              {step.visual}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
