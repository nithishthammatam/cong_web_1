/**
 * ValueProposition Component
 * 
 * Displays the three-layer framework value proposition.
 * Features:
 * - Accepts custom title and items as props, with fallback defaults
 * - Dynamic icon selection based on item index
 * - Gradient backgrounds and hover effects
 * - Responsive design with proper spacing
 * 
 * @param {string} title - Optional title for the section
 * @param {Array<string>} items - Optional array of item strings in format "Label: Description"
 */
export default function ValueProposition({ title, items }) {
  // Default items if none provided via props
  const defaultItems = [
    '1. Data Foundation: We capture precise time and access logs.',
    '2. Insights Engine: We calculate Flow State Duration and Distraction Scores.',
    '3. Action Framework: We enable real-time coaching and workflow optimization.'
  ]

  // Use provided items or fall back to defaults
  const displayItems = items || defaultItems

  /**
   * Returns the appropriate icon component based on the item index
   * @param {number} index - Index of the item (0, 1, or 2)
   * @returns {JSX.Element} SVG icon component
   */
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        )
      case 1:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      case 2:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      default:
        return null
    }
  }

  /**
   * Returns the gradient class based on the item index
   * Each layer has a unique color scheme
   * @param {number} index - Index of the item
   * @returns {string} Tailwind gradient class
   */
  const getGradient = (index) => {
    switch (index) {
      case 0:
        return 'from-slate-600/20 to-slate-700/20'
      case 1:
        return 'from-indigo-600/20 to-indigo-700/20'
      case 2:
        return 'from-blue-600/20 to-blue-700/20'
      default:
        return 'from-slate-600/20 to-slate-700/20'
    }
  }

  /**
   * Returns the icon color class based on the item index
   * @param {number} index - Index of the item
   * @returns {string} Tailwind text color class
   */
  /**
   * Returns the icon color class based on the item index
   * @param {number} index - Index of the item
   * @returns {string} Tailwind text color class
   */
  const getIconColor = (index) => {
    switch (index) {
      case 0:
        return 'text-white'
      case 1:
        return 'text-purple-100'
      case 2:
        return 'text-white'
      default:
        return 'text-white'
    }
  }

  return (
    <section className="value-proposition max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6 relative z-10">
      <div className="bg-gradient-to-br from-[#6F2DBD] to-[#A663CC] rounded-3xl p-8 sm:p-10 shadow-2xl">
        {/* Section title with gradient text effect */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 font-bold text-center">
          {title || 'The Three-Layered Approach'}
        </h2>
        {/* List of value proposition items */}
        <div className="space-y-4 sm:space-y-5">
          {displayItems.map((item, index) => {
            // Parse item string into label and description (format: "Label: Description")
            const parts = item.split(':')
            const label = parts[0]
            const description = parts.slice(1).join(':').trim()

            return (
              // Individual value proposition card
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-md rounded-xl p-5 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] group shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon container with hover scale effect */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center ${getIconColor(index)} group-hover:scale-110 transition-transform`}>
                    {getIcon(index)}
                  </div>
                  {/* Text content */}
                  <div className="flex-1">
                    {/* Item label/title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {label}
                    </h3>
                    {/* Item description with hover color transition */}
                    <p className="leading-relaxed text-purple-50 group-hover:text-white transition-colors">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
