'use client'

export default function IndiaRelevanceSection() {
    return (
        <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="bg-gradient-to-br from-[#F8F5FC] to-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E5E0EB]">
                    <div className="max-w-3xl mx-auto text-center">

                        {/* Tag/Label */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                            style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)', color: '#FF6B00' }}>
                            <span className="w-2 h-2 rounded-full bg-[#FF6B00]"></span>
                            Built for India
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-[#171123]">
                            Why Behaviour Intelligence Matters for <span style={{ color: '#FF6B00' }}>India</span>
                        </h2>

                        <p className="text-base text-[#4A4458] leading-relaxed mb-8">
                            India’s digital economy is growing rapidly across fintech, edtech, ecommerce, and healthcare.
                            Yet platforms lack privacy-first behavioural infrastructure.
                        </p>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E0EB] relative overflow-hidden">
                            {/* Decorative side accent */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#6F2DBD]"></div>

                            <p className="text-base font-medium text-[#171123]">
                                Cognera aims to build India’s first behaviour intelligence layer designed for <span className="text-[#6F2DBD]">ethical analytics</span> and <span className="text-[#6F2DBD]">scalable innovation</span>.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
