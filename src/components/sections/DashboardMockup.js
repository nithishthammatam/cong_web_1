'use client'

function LightStatCard({ label, value, change }) {
    return (
        <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between h-full min-h-[90px]">
            <div className="text-xs font-medium text-gray-500 whitespace-nowrap">{label}</div>
            <div>
                <div className="text-xl font-bold text-[#171123] mb-1">{value}</div>
                <div className="text-[10px] font-semibold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded-md w-fit">
                    {change}
                </div>
            </div>
        </div>
    )
}

export default function DashboardMockup() {
    return (
        <div className="relative">
            {/* Subtle shadow */}
            <div className="absolute -inset-4 bg-[#6F2DBD]/[0.04] rounded-3xl blur-2xl"></div>

            {/* Main Dashboard Frame - WHITE card */}
            <div className="relative bg-white rounded-2xl shadow-xl shadow-gray-900/[0.08] border border-gray-200/60 overflow-hidden text-left">
                {/* Sidebar + Content layout */}
                <div className="flex">
                    {/* Sidebar - Medium Width */}
                    <div className="hidden sm:flex flex-col w-40 border-r border-gray-100 bg-gray-50/50 p-3">
                        {/* Sidebar logo area */}
                        <div className="flex items-center gap-2 mb-4 px-1">
                            <div className="w-8 h-8 relative flex-shrink-0">
                                <img
                                    src="/img/Cognera_log_bg_removed.png"
                                    alt="Cognera"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-800">Cognera</span>
                        </div>

                        {/* Nav items */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-[#6F2DBD]/[0.08] text-[#6F2DBD]">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                <span className="text-[10px] font-semibold">Overview</span>
                            </div>
                            {[
                                { label: 'Screen Time', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                                { label: 'Sessions', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                                { label: 'Events', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                                { label: 'User Flows', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
                                { label: 'Attention Maps', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100/60 transition-colors">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                                    <span className="text-[10px] font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main content area - Wide & Horizontal */}
                    <div className="flex-1 p-4">
                        {/* Top bar */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-sm font-bold font-sans" style={{ color: '#171123' }}>Overview Dashboard</h3>
                                <p className="text-[10px] text-gray-400">Last 7 days &middot; All users</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex text-[10px] border border-gray-200 rounded-lg overflow-hidden">
                                    <span className="px-2.5 py-1 bg-gray-50 text-gray-400">Day</span>
                                    <span className="px-2.5 py-1 bg-[#6F2DBD] text-white font-medium">7d</span>
                                    <span className="px-2.5 py-1 bg-gray-50 text-gray-400">30d</span>
                                </div>
                            </div>
                        </div>

                        {/* Stat cards row - Grid cols 2 for wider horizontal cards */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <LightStatCard label="Active Users" value="162" change="+12.4%" />
                            <LightStatCard label="Avg. Screen Time" value="4m 32s" change="+8.2%" />
                            <LightStatCard label="Sessions" value="1,847" change="+23.1%" />
                            <LightStatCard label="Events" value="14.2K" change="+5.7%" />
                        </div>

                        {/* Content Grid: Chart + Categories - Side-by-Side Horizontal Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {/* Chart area - Takes up 2 columns - Reduced height to h-[100px] */}
                            <div className="md:col-span-2 border border-gray-100 rounded-xl p-3 flex flex-col justify-between h-[100px]">
                                <div className="flex items-center justify-between">
                                    <div className="text-[10px] font-semibold" style={{ color: '#171123' }}>User Engagement</div>
                                    <div className="flex gap-2 text-[9px]">
                                        <span className="flex items-center gap-1 text-[#6F2DBD]"><span className="w-1.5 h-1.5 rounded-full bg-[#6F2DBD]"></span>Sess.</span>
                                        <span className="flex items-center gap-1 text-[#A663CC]"><span className="w-1.5 h-1.5 rounded-full bg-[#A663CC]"></span>Time</span>
                                    </div>
                                </div>
                                <svg className="w-full h-12 mt-1" viewBox="0 0 400 80" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="lightGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#6F2DBD" stopOpacity="0.12" />
                                            <stop offset="100%" stopColor="#6F2DBD" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="lightGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#A663CC" stopOpacity="0.08" />
                                            <stop offset="100%" stopColor="#A663CC" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,65 Q60,50 120,42 T240,25 T360,18 T400,22 L400,80 L0,80 Z" fill="url(#lightGrad1)" />
                                    <path d="M0,65 Q60,50 120,42 T240,25 T360,18 T400,22" fill="none" stroke="#6F2DBD" strokeWidth="2" />
                                    <path d="M0,72 Q60,62 120,56 T240,44 T360,38 T400,42 L400,80 L0,80 Z" fill="url(#lightGrad2)" />
                                    <path d="M0,72 Q60,62 120,56 T240,44 T360,38 T400,42" fill="none" stroke="#A663CC" strokeWidth="1.5" strokeDasharray="4 2" />
                                </svg>
                            </div>

                            {/* Categories - Takes up 1 column (Vertical Stack) - Reduced height to h-[100px] */}
                            <div className="flex flex-col gap-2 justify-between h-[100px]">
                                {['Social', 'Productivity', 'Entertainment'].map((cat, i) => (
                                    <div key={i} className="border border-gray-100 rounded-lg px-3 py-1 flex items-center justify-between h-[28px]">
                                        <div className="text-[10px] text-gray-400">{cat}</div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-1.5 w-8 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full rounded-full" style={{ width: `${[78, 65, 52][i]}%`, backgroundColor: ['#6F2DBD', '#A663CC', '#8B5FBF'][i] }}></div>
                                            </div>
                                            <div className="text-[10px] font-bold" style={{ color: '#171123' }}>{[78, 65, 52][i]}%</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
