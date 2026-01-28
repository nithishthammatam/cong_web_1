/**
 * SolutionSection Component
 * 
 * Displays the Three-Layer Behaviour Intelligence Framework.
 * Features:
 * - Three-layer architecture visualization (Data, Insights, Action)
 * - Each layer has unique styling, icons, and color scheme
 * - Interactive hover effects with scale and shadow animations
 * - Responsive grid layout (stacks on mobile, 3 columns on desktop)
 */
export default function SolutionSection() {
  // Three-layer framework data structure
  // Each layer represents a stage in the Cognera intelligence pipeline
  const layers = [
    {
      number: '1',
      title: 'Data Layer',
      description: 'Privacy-safe, anonymous behavioural signals including:',
      items: ['Session windows', 'App switching events', 'Focus time intervals', 'Flow disruptions'],
      gradient: 'from-slate-700/90 to-slate-800/90',
      iconColor: 'text-blue-300',
      bgColor: 'bg-slate-700/40',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Insights Layer',
      description: 'AI models analyse behavioural signals to derive:',
      items: ['Flow state detection', 'Behavioural cohorts', 'Distraction and recovery patterns', 'Intent and engagement mapping'],
      gradient: 'from-indigo-700/90 to-indigo-800/90',
      iconColor: 'text-indigo-300',
      bgColor: 'bg-indigo-700/40',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Action Layer',
      description: 'Teams use behavioural intelligence to:',
      items: ['Reduce drop-offs', 'Improve user engagement', 'Optimise feature placement', 'Enhance digital productivity'],
      gradient: 'from-blue-700/90 to-blue-800/90',
      iconColor: 'text-blue-300',
      bgColor: 'bg-blue-700/40',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section className="solution-section max-w-6xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 pointer-events-none relative z-10">
      {/* Section heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-8 sm:mb-10 font-bold pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        The Cognera Three-Layer Behaviour Intelligence Framework
      </h2>
      
      {/* Responsive grid: 1 column on mobile/tablet, 3 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {layers.map((layer, index) => (
          // Individual layer card with gradient background and hover effects
          <div 
            key={index} 
            className={`bg-gradient-to-br ${layer.gradient} rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl pointer-events-auto group`}
          >
            {/* Layer header with icon and title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-shrink-0">
                {/* Main icon container with hover scale effect */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${layer.bgColor} flex items-center justify-center border-2 border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110`}>
                  <div className={layer.iconColor}>
                    {layer.icon}
                  </div>
                </div>
                {/* Layer number badge positioned absolutely */}
                <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full ${layer.bgColor} border-2 border-white/20 flex items-center justify-center shadow-lg`}>
                  <span className={`text-sm font-bold ${layer.iconColor}`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {layer.number}
                  </span>
                </div>
              </div>
              {/* Layer title section */}
              <div>
                <div className="text-xs sm:text-sm text-white/60 mb-1 font-semibold uppercase tracking-wider">Layer {layer.number}</div>
                <h3 className="text-2xl sm:text-3xl text-white font-bold group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {layer.title}
                </h3>
              </div>
            </div>
            
            {/* Layer description */}
            <p className="text-base sm:text-lg text-white/80 mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              {layer.description}
            </p>
            
            {/* List of layer features/items */}
            <ul className="space-y-3">
              {layer.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  {/* Colored bullet point matching layer theme */}
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full ${layer.iconColor.replace('text-', 'bg-')} mt-2`}></div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

