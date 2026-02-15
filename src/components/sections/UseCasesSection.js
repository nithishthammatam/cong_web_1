'use client'

const useCases = [
  {
    emoji: '🎮',
    category: 'Gaming Apps',
    headline: 'Identify levels where players lose interest',
    description: 'Track per-level screen time and session drop-offs. Know exactly which stages cause churn — and which keep players hooked.',
    metrics: ['Level completion rates', 'Session time by stage', 'Rage-quit detection'],
  },
  {
    emoji: '💬',
    category: 'Social Apps',
    headline: 'Compare time in feed vs. messaging',
    description: 'Understand how users split attention between core features. Optimize content algorithms based on real engagement patterns.',
    metrics: ['Feature time split', 'Scroll depth analytics', 'Chat engagement rate'],
  },
  {
    emoji: '📚',
    category: 'E-learning',
    headline: 'Ensure users watch lessons till the end',
    description: 'Measure lesson completion, identify where learners disengage, and improve course retention with behavioural data.',
    metrics: ['Lesson completion rate', 'Drop-off timestamps', 'Re-watch patterns'],
  },
]

export default function UseCasesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
          style={{ backgroundColor: 'rgba(111,45,189,0.07)', color: '#6F2DBD' }}
        >
          Use Cases
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: '#171123' }}>
          Built for every kind of app
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: '#4A4458' }}>
          See how different industries use Cognera to understand their users better.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {useCases.map((uc, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-gray-200/80 p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#6F2DBD]/[0.05] hover:border-[#6F2DBD]/20 flex flex-col"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            {/* Emoji + category */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{uc.emoji}</span>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6F2DBD' }}>{uc.category}</span>
            </div>

            {/* Headline */}
            <h3 className="text-xl font-bold mb-3 leading-tight" style={{ color: '#171123' }}>
              {uc.headline}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: '#4A4458' }}>
              {uc.description}
            </p>

            {/* Metrics tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {uc.metrics.map((m, j) => (
                <span
                  key={j}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium"
                  style={{ backgroundColor: 'rgba(111,45,189,0.05)', color: '#6F2DBD' }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
