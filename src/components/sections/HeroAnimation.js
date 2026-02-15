import { useState, useEffect } from 'react'
import Link from 'next/link'
import DashboardMockup from './DashboardMockup'

export default function HeroAnimation() {
    const [step, setStep] = useState(0)

    // Timings for each step in ms
    useEffect(() => {
        // SUPER FAST LOOP Timings
        const timings = [
            1000, // Step 0: "With the aim..." (Very Fast)
            1000, // Step 1: "We build Intelligence..." (Very Fast)
            1500, // Step 2: "A Unified Behaviour..." (Quick reading)
            1000, // Step 3: "Unveiling Cognera" (Flash)
            1800, // Step 4: "Show Logo..."
            2200, // Step 5: "STAY SWITCH RETURN..."
            1500, // Step 6: "Turn Behaviour..."
            1500, // Step 7: "Privacy-First..."
            4000  // Step 8: "Final CTA" - Pause before restart
        ]

        let timer
        if (step < timings.length - 1) {
            // Normal progression
            timer = setTimeout(() => {
                setStep((s) => s + 1)
            }, timings[step])
        } else {
            // Loop back to start after the final pause
            timer = setTimeout(() => {
                setStep(0)
            }, timings[step])
        }
        return () => clearTimeout(timer)
    }, [step])

    // Flexible container with FIXED HEIGHT to prevent jumping
    const AnimContainer = ({ children, animation = "animate-fade-in-up", className = "" }) => (
        <div className={`${animation} w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-4 min-h-[350px] relative ${className}`}>

            {/* Added: Decorative Dot Grid - Left */}
            <div className="absolute -left-12 lg:left-0 top-1/2 -translate-y-1/2 opacity-30 select-none pointer-events-none hidden md:block">
                <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#6F2DBD]/40 block" />
                    ))}
                </div>
            </div>

            {/* Added: Decorative Circle - Right */}
            <div className="absolute -right-8 lg:right-4 top-10 w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-[#6F2DBD]/20 opacity-40 select-none pointer-events-none hidden md:block"></div>

            {children}
        </div>
    )

    // Logo Component Pattern
    const Logo = ({ size = "normal" }) => {
        const dim = size === "large" ? "w-16 h-16 rounded-xl" : "w-10 h-10 rounded-lg"
        return (
            <div className={`${dim} flex items-center justify-center hover:scale-105 transition-transform`}>
                <img src="/img/Cognera_log_bg_removed.png" alt="Cognera" className="w-full h-full object-contain" />
            </div>
        )
    }

    /* =========================================
       RENDER STEPS
       ========================================= */

    /* Frame 1 - Rotate In Counter-Clockwise */
    if (step === 0) {
        return (
            <AnimContainer animation="animate-rotate-in-ccw">
                <div className="flex flex-col gap-6 max-w-4xl relative z-10">
                    <p className="text-xl sm:text-2xl text-[#4A4458] font-semibold tracking-tight uppercase tracking-widest text-[#6F2DBD]">
                        With the aim to decode
                    </p>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#171123] leading-tight tracking-tight">
                        Human Digital Behaviour
                    </h2>

                    {/* Visual Divider */}
                    <div className="w-24 h-1 bg-gradient-to-r from-[#6F2DBD] to-transparent mx-auto rounded-full my-2"></div>

                    {/* New Meaningful Subline */}
                    <p className="text-lg sm:text-xl text-[#4A4458] max-w-2xl mx-auto leading-relaxed">
                        From clicks to cognitive patterns — <br className="hidden sm:block" />
                        we convert behavioural signals into strategic advantage.
                    </p>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 2 - Slide In from Right (Variation with Side Layout) */
    if (step === 1) {
        return (
            <AnimContainer animation="animate-slide-in-right">
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                        {/* LEFT TEXT */}
                        <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-3">
                            <p className="text-xl sm:text-2xl text-[#6F2DBD] font-semibold tracking-tight">
                                We build Intelligence
                            </p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171123] leading-tight tracking-tight">
                                Beyond Clicks and Screens
                            </h2>
                            <p className="mt-4 text-lg text-[#4A4458] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Behaviour signals that reveal attention, drop-offs, and re-engagement—without identity tracking.
                            </p>
                        </div>

                        {/* RIGHT VISUAL ANCHOR */}
                        <div className="w-full flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
                            <div className="w-full max-w-md rounded-2xl bg-white p-6 border border-gray-100 shadow-xl">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Behaviour Snapshot</p>
                                <div className="mt-5 space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <span className="text-[#171123] font-semibold text-sm">Stay Rate</span>
                                        <span className="text-[#10b981] font-black text-sm bg-[#10b981]/10 px-2 py-1 rounded">+18%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <span className="text-[#171123] font-semibold text-sm">Switch Triggers</span>
                                        <span className="text-[#F59E0B] font-black text-sm bg-[#F59E0B]/10 px-2 py-1 rounded">3</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <span className="text-[#171123] font-semibold text-sm">Return Likelihood</span>
                                        <span className="text-[#6F2DBD] font-black text-sm bg-[#6F2DBD]/10 px-2 py-1 rounded">High</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 3 - Zoom In */
    if (step === 2) {
        return (
            <AnimContainer animation="animate-zoom-in">
                <div className="flex flex-col gap-6 max-w-5xl items-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171123] leading-tight tracking-tight">
                        A Unified Behaviour Intelligence Layer
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-bold tracking-tight">
                        For Modern Digital Platforms
                    </p>

                    {/* Visual Divider */}
                    <div className="w-16 h-1 bg-[#E5E0EB] rounded-full"></div>

                    {/* Supporting Description */}
                    <p className="text-lg text-[#6F2DBD] max-w-2xl font-medium leading-relaxed">
                        The infrastructure that transforms behavioural signals <br className="hidden sm:block" />
                        into measurable digital performance outcomes.
                    </p>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 4 - Pulse/Impact (Standard) */
    if (step === 3) {
        return (
            <AnimContainer animation="animate-zoom-in"> {/* Zoom in for impact */}
                <div className="flex flex-col items-center justify-center h-full gap-6">
                    <p className="text-xl sm:text-2xl text-[#6F2DBD] font-bold tracking-widest uppercase">
                        Unveiling Cognera
                    </p>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#171123] drop-shadow-[0_0_30px_rgba(111,45,189,0.15)] leading-tight tracking-tight max-w-4xl">
                        The Behaviour Intelligence Layer <br />
                        <span className="text-[#4A4458] text-3xl sm:text-4xl md:text-5xl font-bold block mt-2">for Modern Digital Platforms</span>
                    </h2>

                    {/* Visual Divider */}
                    <div className="w-16 h-1 bg-[#6F2DBD] rounded-full my-2"></div>

                    <p className="text-xl sm:text-2xl text-[#8B8696] font-medium tracking-wide">
                        Measure. Decode. Predict.
                    </p>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 5 - TYPEWRITER EFFECT + BLUR IN */
    if (step === 4) {
        return (
            <AnimContainer animation="animate-blur-in">
                <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">

                    {/* LEFT: Text & CTAs */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
                        <div className="flex items-center gap-4">
                            <Logo size="large" />
                            <span className="text-5xl sm:text-6xl font-black tracking-tight text-[#171123]">COGNERA</span>
                        </div>

                        <div className="h-1 w-32 bg-gray-200 rounded-full md:mx-0"></div>

                        {/* Typewriter Text Container */}
                        <div className="overflow-hidden whitespace-nowrap border-r-4 border-[#6F2DBD] animate-typewriter w-0">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#6F2DBD] tracking-tight pr-2">
                                Stay • Switch • Return
                            </p>
                        </div>

                        <p className="text-md sm:text-lg text-gray-500 font-bold tracking-widest uppercase max-w-lg">
                            Understanding the true journey of engagement
                        </p>

                        {/* CTAs */}
                        <div className="flex gap-4">
                            <Link href="/contact-sales" className="px-6 py-3 bg-[#171123] text-white font-bold rounded-lg hover:bg-[#6F2DBD] transition-colors shadow-lg">
                                Request Demo
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: Floating Analytics Card (Visual Counterweight) */}
                    <div className="hidden md:block" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 w-64">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#6F2DBD]/10 flex items-center justify-center text-[#6F2DBD] font-bold">AI</div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase">Pattern Detected</p>
                                    <p className="text-sm font-bold text-[#171123]">High Re-engagement</p>
                                </div>
                            </div>
                            <div className="h-24 bg-gradient-to-br from-[#6F2DBD]/5 to-[#6F2DBD]/20 rounded-lg flex items-end p-2 gap-1">
                                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                    <div key={i} className="flex-1 bg-[#6F2DBD]" style={{ height: `${h}%`, opacity: 0.5 + (i * 0.05), borderRadius: '2px' }}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </AnimContainer>
        )
    }

    /* Frame 6 - Staggered Focus (Same as before, good animation) */
    if (step === 5) {
        return (
            <AnimContainer animation="animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4 items-center justify-items-center">
                    {/* STAY - Emerald Accent */}
                    <div className="flex flex-col gap-2 animate-fade-in-up items-center">
                        <h3 className="text-4xl sm:text-5xl font-black text-[#171123] tracking-tight">STAY</h3>
                        <span className="text-lg sm:text-xl font-bold text-[#10b981]">Measure Attention</span>
                    </div>

                    {/* SWITCH - Warning Accent */}
                    <div className="flex flex-col gap-2 animate-fade-in-up opacity-0 items-center" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                        <h3 className="text-4xl sm:text-5xl font-black text-[#171123] tracking-tight">SWITCH</h3>
                        <span className="text-lg sm:text-xl font-bold text-[#F59E0B]">Detect Distraction</span>
                    </div>

                    {/* RETURN - Purple Accent */}
                    <div className="flex flex-col gap-2 animate-fade-in-up opacity-0 items-center" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <h3 className="text-4xl sm:text-5xl font-black text-[#171123] tracking-tight">RETURN</h3>
                        <span className="text-lg sm:text-xl font-bold text-[#6F2DBD]">Predict Re-Engagement</span>
                    </div>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 7 - Growth Signals (Two-Column Layout) */
    if (step === 6) {
        return (
            <AnimContainer animation="animate-slide-in-left">
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                        {/* LEFT: Headline */}
                        <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171123] leading-tight tracking-tight">
                                Turn Behaviour Patterns Into{" "}
                                <span className="text-[#6F2DBD] underline decoration-4 decoration-[#10B981]/30 underline-offset-4 animate-color-cycle">
                                    Growth Signals
                                </span>
                            </h2>
                            <p className="text-lg text-[#4A4458] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Measure attention, detect distraction, and predict re-engagement — without identity tracking.
                            </p>
                        </div>

                        {/* RIGHT: Visual Anchor (Quick Snapshot Card) */}
                        <div className="w-full flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
                            <div className="w-full max-w-sm rounded-2xl bg-white p-6 border border-gray-100 shadow-xl">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">LIVE SNAPSHOT</p>
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                </div>
                                <div className="space-y-4">
                                    {/* Item 1 */}
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <span className="text-[#171123] font-semibold text-sm">Attention Score</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#6F2DBD] w-[82%]"></div>
                                            </div>
                                            <span className="text-[#6F2DBD] font-black text-sm">82</span>
                                        </div>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <span className="text-[#171123] font-semibold text-sm">Distraction Risk</span>
                                        <span className="text-[#F59E0B] font-black text-sm bg-[#F59E0B]/10 px-2 py-1 rounded">Medium</span>
                                    </div>
                                    {/* Item 3 */}
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <span className="text-[#171123] font-semibold text-sm">Return Probability</span>
                                        <span className="text-[#10b981] font-black text-sm bg-[#10b981]/10 px-2 py-1 rounded">High</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 8 - Three Core Principles (New Card Layout) */
    if (step === 7) {
        return (
            <AnimContainer animation="animate-fade-in-up">
                <div className="flex flex-col items-center gap-10 w-full max-w-5xl px-4">

                    {/* Headings */}
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#171123]">
                            Built on Three Core Principles
                        </h2>
                        <p className="text-lg text-[#4A4458] max-w-2xl mx-auto">
                            Privacy-first behaviour intelligence designed for modern digital platforms.
                        </p>
                    </div>

                    {/* 3-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

                        {/* Card 1: Privacy-First */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#171123]">Privacy-First</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Compliance-ready design with minimal data exposure.
                            </p>
                        </div>

                        {/* Card 2: Identity-Free */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#6F2DBD]/10 flex items-center justify-center text-[#6F2DBD]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#171123]">Identity-Free</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                No personal identity tracking, only behavioural patterns.
                            </p>
                        </div>

                        {/* Card 3: Insight-Driven */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#A663CC]/10 flex items-center justify-center text-[#A663CC]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#171123]">Insight-Driven</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Convert attention signals into real growth decisions.
                            </p>
                        </div>

                    </div>

                    {/* Optional CTA */}
                    <div>
                        <Link href="/contact-sales" className="text-[#6F2DBD] font-semibold hover:text-[#5A2399] flex items-center gap-2 group">
                            Request Demo
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>

                </div>
            </AnimContainer>
        )
    }

    /* Frame 9 - FINAL CTA + DASHBOARD MOCKUP */
    if (step === 8) {
        return (
            <AnimContainer animation="animate-zoom-in" className="min-h-[500px]"> {/* Zoom in final frame */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-6xl px-4">

                    {/* Left: Text & CTA */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 animate-slide-in-left" style={{ animationDuration: '0.8s' }}>
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-1">
                            <Logo size="normal" />
                            <span className="text-2xl font-bold tracking-tight text-[#171123]">COGNERA</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#171123] leading-tight tracking-tight">
                            The Behaviour Intelligence Platform
                        </h1>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-3">
                            <Link
                                href="/get-started"
                                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
                                style={{ background: 'linear-gradient(135deg, #6F2DBD 0%, #8B3FD4 100%)', color: '#FFFFFF', boxShadow: '0 8px 20px rgba(111,45,189,0.25)' }}
                            >
                                REGISTER
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Footer Note */}
                        <div className="flex items-center gap-2 text-base text-gray-500 font-medium">
                            <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            No Identity. Only Patterns.
                        </div>
                    </div>

                    {/* Right: Dashboard Mockup */}
                    <div className="flex-1 w-full max-w-5xl animate-slide-in-right relative" style={{ animationDuration: '0.8s' }}>
                        <div className="transform scale-[1.02] hover:scale-105 transition-transform duration-500">
                            <DashboardMockup />
                        </div>
                    </div>

                </div>
            </AnimContainer>
        )
    }

    return null
}
