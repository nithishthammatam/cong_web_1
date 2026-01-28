/**
 * ProblemSection Component
 * 
 * Displays the main value proposition and challenges that Cognera addresses.
 * Features:
 * - Hero message highlighting the difference between traditional analytics and Cognera
 * - Grid of challenge cards with relevant icons
 * - Hover effects and smooth transitions
 * - Responsive design for mobile and desktop
 */
export default function ProblemSection() {
  // Array of challenges with associated icons
  // Each challenge represents a problem that Cognera solves
  const challenges = [
    {
      text: 'Users frequently switch apps, fragmenting attention mid-task',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      text: 'Engagement metrics fluctuate without actionable explanations',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      text: 'Teams lack visibility into distraction vs focused usage patterns',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      text: 'Drop-offs occur without behavioural context',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      )
    },
    {
      text: 'Privacy laws limit invasive, event-heavy tracking approaches',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ]

  return (
    <section className="problem-section max-w-5xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 pointer-events-none relative z-10">
      {/* Main container with dark gradient background and border */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl pointer-events-auto">
        {/* Header section with icon and main value proposition */}
        <div className="flex items-start gap-4 mb-6">
          {/* Analytics icon with gradient background */}
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          {/* Main heading with gradient text effect */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 font-bold leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Analytics show what happened. Cognera shows how it happened.
            </h2>
            {/* Supporting description text */}
            <p className="text-lg sm:text-xl text-white/70 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Traditional analytics stop at clicks, visits, and events. They do not explain behaviour.
            </p>
          </div>
        </div>
        
        {/* Challenges grid section */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl text-white mb-4 font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            {`Today's challenges:`}
          </h3>
          {/* Responsive grid: 1 column on mobile, 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              // Individual challenge card with hover effects
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-300 border border-white/5 hover:border-white/10 group">
                {/* Icon container with hover scale animation */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-slate-600/40 to-slate-700/40 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform text-slate-300 group-hover:text-indigo-400">
                  {challenge.icon}
                </div>
                {/* Challenge text with hover color transition */}
                <p className="text-base sm:text-lg text-white/90 leading-relaxed group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {challenge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom call-to-action message */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-xl sm:text-2xl text-white font-bold text-center" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Companies make decisions with half information.
          </p>
        </div>
      </div>
    </section>
  )
}

