'use client'

export default function SocialProofSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Main trust bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

        {/* Stat 1: Users */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-4xl sm:text-5xl font-bold" style={{ color: '#6F2DBD' }}>160+</span>
            <span className="text-sm font-medium" style={{ color: '#A663CC' }}>active users</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#8B8696' }}>
            Trusted by real users in our own app — tracking engagement daily.
          </p>
        </div>

        {/* Stat 2: Mini graph */}
        <div className="text-center flex flex-col items-center">
          <p className="text-sm font-semibold mb-3" style={{ color: '#171123' }}>Real data. Real insights.</p>
          {/* Mini session trend chart */}
          <div className="w-full max-w-[240px] rounded-xl border border-gray-200/80 p-4" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium" style={{ color: '#8B8696' }}>Sessions / week</span>
              <span className="text-[10px] font-bold" style={{ color: '#10b981' }}>+23%</span>
            </div>
            <svg className="w-full h-10" viewBox="0 0 200 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="proofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6F2DBD" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#6F2DBD" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,35 Q25,30 50,26 T100,18 T150,12 T200,8 L200,40 L0,40 Z" fill="url(#proofGrad)" />
              <path d="M0,35 Q25,30 50,26 T100,18 T150,12 T200,8" fill="none" stroke="#6F2DBD" strokeWidth="2" strokeLinecap="round" />
              <circle cx="200" cy="8" r="3" fill="#6F2DBD" />
            </svg>
          </div>
        </div>

        {/* Stat 3: Built by */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#6F2DBD' }}>
              <span className="text-white text-[10px] font-bold">C</span>
            </div>
            <span className="text-sm font-bold" style={{ color: '#171123' }}>Cognera Data Labs</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#8B8696' }}>
            Built by Cognera, used daily in production. We eat our own cooking.
          </p>
        </div>

      </div>
    </section>
  )
}
