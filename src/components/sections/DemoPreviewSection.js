'use client'

import Link from 'next/link'

export default function DemoPreviewSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
          style={{ backgroundColor: 'rgba(111,45,189,0.07)', color: '#6F2DBD' }}
        >
          Live Preview
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: '#171123' }}>
          See your data come alive
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: '#4A4458' }}>
          A real dashboard built with real data from 160+ users. No dummy metrics.
        </p>
      </div>

      {/* Dashboard Preview */}
      <div className="relative">
        <div className="absolute -inset-4 bg-[#6F2DBD]/[0.03] rounded-3xl blur-2xl"></div>

        <div className="relative rounded-2xl border border-gray-200/80 overflow-hidden shadow-xl shadow-gray-900/[0.06]" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100" style={{ backgroundColor: '#FAFAFE' }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 bg-gray-100 rounded-md px-3 py-1 text-[11px] font-mono" style={{ color: '#8B8696' }}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                dashboard.cognera.com
              </div>
            </div>
          </div>

          {/* Dashboard grid */}
          <div className="p-5 sm:p-8">
            {/* Highlight callouts */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <MetricCard label="Daily Active Users" value="162" change="+12%" color="#6F2DBD" highlight />
              <MetricCard label="Top Category" value="Social" subtitle="34% of time" color="#A663CC" />
              <MetricCard label="Sessions / User" value="4.8" change="+8%" color="#6F2DBD" />
              <MetricCard label="Onboarding Rate" value="73%" subtitle="of new users" color="#10b981" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              {/* Chart: Session stickiness */}
              <div className="lg:col-span-3 border border-gray-100 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-bold" style={{ color: '#171123' }}>Session Stickiness</div>
                    <div className="text-xs" style={{ color: '#8B8696' }}>Sessions per user, last 14 days</div>
                  </div>
                </div>
                <svg className="w-full h-28" viewBox="0 0 500 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="demoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6F2DBD" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#6F2DBD" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,70 Q35,65 70,58 T140,48 T210,40 T280,32 T350,28 T420,22 T500,18 L500,100 L0,100 Z" fill="url(#demoGrad)" />
                  <path d="M0,70 Q35,65 70,58 T140,48 T210,40 T280,32 T350,28 T420,22 T500,18" fill="none" stroke="#6F2DBD" strokeWidth="2.5" strokeLinecap="round" />
                  {[70, 58, 48, 40, 32, 28, 22, 18].map((y, i) => (
                    <circle key={i} cx={i * 71.4} cy={y} r="3" fill="#6F2DBD" opacity={i === 7 ? 1 : 0.3} />
                  ))}
                </svg>
              </div>

              {/* Top categories by time */}
              <div className="lg:col-span-2 border border-gray-100 rounded-xl p-5">
                <div className="text-sm font-bold mb-1" style={{ color: '#171123' }}>Top Categories</div>
                <div className="text-xs mb-4" style={{ color: '#8B8696' }}>By time spent</div>
                <div className="space-y-3.5">
                  {[
                    { name: 'Social', pct: 34, color: '#6F2DBD' },
                    { name: 'Productivity', pct: 26, color: '#A663CC' },
                    { name: 'Entertainment', pct: 18, color: '#8B5FBF' },
                    { name: 'Education', pct: 14, color: '#C4A0E8' },
                    { name: 'Health', pct: 8, color: '#DDD6F3' },
                  ].map((cat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span style={{ color: '#171123' }} className="font-medium">{cat.name}</span>
                        <span style={{ color: '#8B8696' }}>{cat.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ backgroundColor: '#F0EDF4' }}>
                        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${cat.pct}%`, backgroundColor: cat.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Funnel row */}
            <div className="mt-5 border border-gray-100 rounded-xl p-5">
              <div className="text-sm font-bold mb-1" style={{ color: '#171123' }}>Onboarding Funnel</div>
              <div className="text-xs mb-5" style={{ color: '#8B8696' }}>Users who completed each step</div>
              <div className="flex items-end gap-1">
                {[
                  { step: 'App Open', pct: 100, val: '162' },
                  { step: 'Sign Up', pct: 82, val: '133' },
                  { step: 'First Session', pct: 73, val: '118' },
                  { step: 'Day 1 Return', pct: 58, val: '94' },
                  { step: 'Day 7 Return', pct: 41, val: '66' },
                ].map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <span className="text-xs font-bold mb-1" style={{ color: '#171123' }}>{item.val}</span>
                    <div
                      className="w-full rounded-t-md transition-all duration-500"
                      style={{
                        height: `${item.pct * 0.8}px`,
                        backgroundColor: i === 0 ? '#6F2DBD' : `rgba(111,45,189,${0.15 + (4 - i) * 0.15})`,
                      }}
                    ></div>
                    <span className="text-[9px] sm:text-[10px] mt-2 text-center leading-tight" style={{ color: '#8B8696' }}>{item.step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA under dashboard */}
      <div className="text-center mt-8">
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
          style={{ color: '#6F2DBD' }}
        >
          Explore the full dashboard
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </section>
  )
}

function MetricCard({ label, value, change, subtitle, color, highlight }) {
  return (
    <div
      className={`rounded-xl p-4 border ${highlight ? 'border-[#6F2DBD]/20' : 'border-gray-100'}`}
      style={{ backgroundColor: highlight ? 'rgba(111,45,189,0.03)' : '#FAFAFE' }}
    >
      <div className="text-[10px] font-medium mb-1.5" style={{ color: '#8B8696' }}>{label}</div>
      <div className="text-2xl font-bold" style={{ color }}>{value}</div>
      {change && <div className="text-[10px] font-semibold mt-0.5" style={{ color: '#10b981' }}>{change}</div>}
      {subtitle && <div className="text-[10px] mt-0.5" style={{ color: '#8B8696' }}>{subtitle}</div>}
    </div>
  )
}
