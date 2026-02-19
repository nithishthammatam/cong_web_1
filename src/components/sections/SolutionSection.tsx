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



  return (
    <section className="solution-section max-w-7xl mx-auto mb-16 px-4 sm:px-6 relative z-10">
      <div className="rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        {/* Background Gradient for the Section */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1e2e] to-[#2d2d44] opacity-90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4f46e5] opacity-20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#a855f7] opacity-20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>

        {/* Section Heading */}
        <div className="relative z-10 text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-header tracking-tight text-white">
            The Behaviour Intelligence Framework
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed font-light">
            Three layers of intelligence to transform raw signals into product growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">

          {/* Layer 1: Data */}
          <div className="group relative bg-[#1A1A2E] rounded-3xl p-1 border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20">
            <div className="relative h-full bg-[#151525] rounded-[1.3rem] p-6 flex flex-col overflow-hidden">
              {/* Visual Area */}
              <div className="h-48 mb-6 w-full bg-[#11111c] rounded-xl border border-white/5 relative overflow-hidden group-hover:border-blue-500/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                {/* Abstract UI: Data Flow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-4 border border-blue-400/20 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg backdrop-blur-sm border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                    </div>
                    {/* Floating Particles */}
                    <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)] animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-60"></div>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest text-blue-300 font-bold bg-blue-900/30 px-2 py-1 rounded border border-blue-500/20">Data Layer</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                Data Foundation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                Privacy-safe capture of session windows, focus intervals, and app-switching events.
              </p>

              <a href="/products/analytics" className="inline-flex items-center text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors group/link mt-auto">
                Learn more
                <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Layer 2: Insights */}
          <div className="group relative bg-[#1A1A2E] rounded-3xl p-1 border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-900/20">
            <div className="relative h-full bg-[#151525] rounded-[1.3rem] p-6 flex flex-col overflow-hidden">
              {/* Visual Area */}
              <div className="h-48 mb-6 w-full bg-[#11111c] rounded-xl border border-white/5 relative overflow-hidden group-hover:border-purple-500/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                {/* Abstract UI: Code/Analysis */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 space-y-3">
                  {/* Fake Chart/Lines */}
                  <div className="w-full h-8 bg-purple-900/20 rounded-lg flex items-center px-3 border border-purple-500/10">
                    <div className="w-2 h-2 rounded-full bg-purple-500/50 mr-2"></div>
                    <div className="h-1.5 w-1/2 bg-purple-500/20 rounded-full"></div>
                  </div>
                  <div className="w-full h-8 bg-purple-900/20 rounded-lg flex items-center px-3 border border-purple-500/10 ml-4">
                    <div className="w-2 h-2 rounded-full bg-pink-500/50 mr-2"></div>
                    <div className="h-1.5 w-2/3 bg-pink-500/20 rounded-full"></div>
                  </div>
                  <div className="w-full h-16 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-lg mt-2 relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full text-purple-500/30" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0 80 Q 25 20 50 50 T 100 20" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest text-purple-300 font-bold bg-purple-900/30 px-2 py-1 rounded border border-purple-500/20">Insights Layer</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Insights Engine
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                AI models analyze flow state, distraction patterns, and intent mapping.
              </p>

              <a href="/solutions" className="inline-flex items-center text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors group/link mt-auto">
                Learn more
                <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Layer 3: Action */}
          <div className="group relative bg-[#1A1A2E] rounded-3xl p-1 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-900/20">
            <div className="relative h-full bg-[#151525] rounded-[1.3rem] p-6 flex flex-col overflow-hidden">
              {/* Visual Area */}
              <div className="h-48 mb-6 w-full bg-[#11111c] rounded-xl border border-white/5 relative overflow-hidden group-hover:border-emerald-500/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
                {/* Abstract UI: Controls/Success */}
                <div className="absolute inset-0 flex flex-col justify-center px-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-12 bg-slate-700 rounded-full"></div>
                    <div className="relative w-10 h-5 bg-emerald-500/20 rounded-full border border-emerald-500/30 transition-colors">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-emerald-400 rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-20 bg-slate-700 rounded-full"></div>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-4 bg-emerald-500/40 rounded-sm"></div>
                      <div className="w-1.5 h-6 bg-emerald-500/60 rounded-sm"></div>
                      <div className="w-1.5 h-3 bg-emerald-500/30 rounded-sm"></div>
                      <div className="w-1.5 h-8 bg-emerald-400 rounded-sm shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-lg p-2 border border-white/5 flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full border border-emerald-400/50 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="h-1.5 w-24 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold bg-emerald-900/30 px-2 py-1 rounded border border-emerald-500/20">Action Layer</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                Action Framework
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                Optimize feature placement, reduce drop-offs, and enhance digital productivity.
              </p>

              <a href="/products/features" className="inline-flex items-center text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors group/link mt-auto">
                Learn more
                <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
