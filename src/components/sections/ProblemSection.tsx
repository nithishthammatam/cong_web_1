'use client'

const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Fragmented attention',
    description: 'Users switch apps constantly, breaking focus mid-task with no way to measure it.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Vanity metrics',
    description: 'Engagement numbers fluctuate without actionable behavioural explanations.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'No focus visibility',
    description: 'Teams can\'t distinguish distracted browsing from deep, focused usage.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    title: 'Blind drop-offs',
    description: 'Users leave without behavioural context — you see the what, never the why.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Privacy constraints',
    description: 'New regulations limit invasive, event-heavy tracking you once relied on.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Half the picture',
    description: 'Traditional analytics show what happened — but never how or why it happened.',
  },
]

export default function ProblemSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* LEFT: Sticky headline */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
            style={{ backgroundColor: 'rgba(239,68,68,0.06)', color: '#dc2626' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            The Invisible Problem
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-5" style={{ color: '#171123' }}>
            The Invisible Problem in <span style={{ color: '#6F2DBD' }}>Digital Analytics</span>
          </h2>

          <p className="text-base leading-relaxed mb-4" style={{ color: '#4A4458' }}>
            Today’s analytics tools measure clicks and events. They do not understand behavioural transitions — when attention drops, when users mentally disengage, or why they switch contexts.
          </p>

          <div className="text-base leading-relaxed mb-8" style={{ color: '#4A4458' }}>
            Digital platforms lack visibility into:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Attention loss moments</li>
              <li>App switching patterns</li>
              <li>Re-engagement triggers</li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-3" style={{ color: '#8B8696' }}>
            <div className="h-[1px] w-12" style={{ backgroundColor: '#E5E0EB' }}></div>
            <span className="text-xs font-medium tracking-wide uppercase">The Blind Spot</span>
          </div>
        </div>

        {/* RIGHT: Problem cards grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-200/80 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/[0.04] hover:border-gray-300/80"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:scale-105 origin-center"
                  style={{ backgroundColor: 'rgba(111,45,189,0.06)', color: '#6F2DBD' }}
                >
                  {problem.icon}
                </div>

                {/* Content */}
                <h4 className="text-[15px] font-bold mb-1.5" style={{ color: '#171123' }}>
                  {problem.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#8B8696' }}>
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-6 rounded-xl border px-6 py-5 flex items-start gap-4"
            style={{ borderColor: 'rgba(111,45,189,0.15)', backgroundColor: 'rgba(111,45,189,0.03)' }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#6F2DBD', color: '#FFFFFF' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Cognera solves this behavioural blind spot.</h4>
              <p className="text-sm text-gray-600">
                We provide the missing layer of intelligence that explains the <span className="font-semibold text-[#6F2DBD]">why</span> behind the user actions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
