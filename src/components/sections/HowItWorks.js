/**
 * HowItWorks Component
 * 
 * Displays the 4-step process of how Cognera works.
 * Features:
 * - 4-step workflow visualization with numbered badges
 * - Each step has unique color scheme and icon
 * - Interactive hover effects with gradient overlays
 * - Responsive 2-column grid layout
 * - Decorative corner accents for visual interest
 */
export default function HowItWorks() {
  // Array of 4 steps in the Cognera workflow
  // Each step has number, title, description, icon, gradient, and color scheme
  const steps = [
    {
      number: '1',
      title: 'Install SDK',
      description: 'A lightweight Android and iOS SDK collects anonymous behavioural signals.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100'
    },
    {
      number: '2',
      title: 'Capture Behavioural Signals',
      description: 'Flow patterns, app switches, focus windows, and session time are captured.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-100'
    },
    {
      number: '3',
      title: 'AI Processing',
      description: 'AI models convert raw signals into meaningful behavioural insights.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-indigo-500/20 to-blue-500/20',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-100'
    },
    {
      number: '4',
      title: 'View Insights Dashboard',
      description: 'Teams access behavioural insights through a unified dashboard to guide product and experience decisions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-600',
      borderColor: 'border-green-100'
    }
  ]

  return (
    <section className="how-it-works max-w-6xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 pointer-events-none relative z-10">
      {/* Main section heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center mb-8 sm:mb-10 font-bold pointer-events-auto">
        How Cognera Works
      </h2>
      {/* Subtitle */}
      <p className="text-gray-600 text-center mb-8 sm:mb-10 pointer-events-auto">
        A Simple 4-Step Process
      </p>
      {/* Responsive grid: 1 column on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative">
        {steps.map((step, index) => (
          // Step card with dark background and colored border
          <div
            key={index}
            className={`bg-white rounded-2xl p-5 sm:p-6 border ${step.borderColor} hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl pointer-events-auto group relative overflow-hidden shadow-sm`}
          >
            {/* Background gradient overlay that appears on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

            {/* Step content */}
            <div className="flex items-start gap-3 sm:gap-4 relative z-10">
              <div className="flex-shrink-0 relative">
                {/* Icon container with gradient background and hover scale */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border ${step.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <div className={step.iconColor}>
                    {step.icon}
                  </div>
                </div>
                {/* Step number badge */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-md`}>
                  <span className="text-gray-900 text-sm font-bold">
                    {step.number}
                  </span>
                </div>
              </div>
              {/* Step text content */}
              <div className="flex-1 pt-2">
                <h3 className="text-gray-900 mb-2 sm:mb-3 font-bold group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Decorative corner accent for visual interest */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.gradient} opacity-10 rounded-bl-full`}></div>
          </div>
        ))}
      </div>
    </section>
  )
}

