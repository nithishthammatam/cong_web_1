'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import DashboardMockup from './DashboardMockup'

/* Design system: navy #171123, purple #6F2DBD, light #A663CC, bg #FBFBFB, secondary text #4A4458 */

const FRAME_DURATION_MS = [4200, 3800, 3800, 4000, 3800, 4500] // 6 steps, readable pace

export default function HeroAnimation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => setStep((s) => (s < FRAME_DURATION_MS.length - 1 ? s + 1 : 0)),
      FRAME_DURATION_MS[step]
    )
    return () => clearTimeout(timer)
  }, [step])

  const containerClass =
    'w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-4 min-h-[420px] sm:min-h-[480px] relative'

  const headlineClass =
    'font-header font-bold text-[#171123] leading-[1.12] tracking-tight'
  const headlineSize = 'text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(2.5rem,5vw,3.75rem)]'
  const sublineClass = 'text-[#4A4458] font-medium leading-relaxed max-w-2xl mx-auto'
  const sublineSize = 'text-base sm:text-lg md:text-xl'
  const accentClass = 'text-[#6F2DBD] font-semibold'
  const dividerClass = 'w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-[#6F2DBD] to-[#A663CC]'

  const Logo = ({ size = 'normal' }) => (
    <div
      className={`flex items-center justify-center overflow-hidden ${
        size === 'large' ? 'w-14 h-14 sm:w-16 sm:h-16 rounded-2xl' : 'w-10 h-10 rounded-xl'
      }`}
    >
      <img
        src="/img/Cognera_log_bg_removed.png"
        alt="Cognera"
        className="w-full h-full object-contain"
      />
    </div>
  )

  const Card = ({ children, className = '' }) => (
    <div
      className={`bg-white rounded-2xl border border-gray-100/90 shadow-lg shadow-gray-900/[0.04] p-5 sm:p-6 ${className}`}
    >
      {children}
    </div>
  )

  // Step 0: Primary CTA + Dashboard (first impression)
  if (step === 0) {
    return (
      <div className={`${containerClass} animate-fade-in-up`}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 w-full">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-xl">
            <div className="flex items-center gap-3">
              <Logo size="normal" />
              <span className="font-header text-2xl sm:text-3xl font-bold text-[#171123] tracking-tight">
                Cognera
              </span>
            </div>
            <h1 className={`${headlineClass} ${headlineSize}`}>
              Understand behaviour. Respect privacy.
            </h1>
            <p className={`${sublineClass} ${sublineSize}`}>
              Measure attention, detect distraction, predict re-engagement — without identity tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #6F2DBD 0%, #8B3FD4 100%)',
                  boxShadow: '0 8px 24px rgba(111,45,189,0.28)',
                }}
              >
                Get started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact-sales"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#171123] border-2 border-[#171123]/20 hover:border-[#6F2DBD]/40 hover:text-[#6F2DBD] transition-all"
              >
                Request demo
              </Link>
            </div>
            <p className="text-sm text-[#4A4458] flex items-center gap-2 mt-1">
              <span className="inline-block w-4 h-4 rounded-full bg-[#10B981]/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              </span>
              No identity. Only patterns.
            </p>
          </div>
          <div className="flex-1 w-full max-w-xl lg:max-w-2xl animate-slide-in-right">
            <DashboardMockup />
          </div>
        </div>
      </div>
    )
  }

  // Step 1: Decode human behaviour
  if (step === 1) {
    return (
      <div className={`${containerClass} animate-zoom-in`}>
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className={`${accentClass} text-sm sm:text-base uppercase tracking-widest`}>
            Our mission
          </p>
          <h2 className={`${headlineClass} ${headlineSize}`}>
            Decode human digital behaviour
          </h2>
          <div className={dividerClass} />
          <p className={`${sublineClass} ${sublineSize}`}>
            From clicks to cognitive patterns — we turn behavioural signals into strategic advantage.
          </p>
        </div>
      </div>
    )
  }

  // Step 2: Intelligence beyond clicks (with small visual)
  if (step === 2) {
    return (
      <div className={`${containerClass} animate-slide-in-right`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 w-full max-w-5xl">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
            <p className={`${accentClass} text-base sm:text-lg`}>We build intelligence</p>
            <h2 className={`${headlineClass} text-3xl sm:text-4xl md:text-5xl`}>
              Beyond clicks and screens
            </h2>
            <p className={`${sublineClass} ${sublineSize} lg:mx-0`}>
              Behaviour signals that reveal attention, drop-offs, and re-engagement — without identity tracking.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-sm">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Behaviour snapshot
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Stay rate', value: '+18%', color: 'text-[#10B981] bg-[#10B981]/10' },
                  { label: 'Switch triggers', value: '3', color: 'text-[#F59E0B] bg-[#F59E0B]/10' },
                  { label: 'Return likelihood', value: 'High', color: 'text-[#6F2DBD] bg-[#6F2DBD]/10' },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 border border-gray-100"
                  >
                    <span className="text-sm font-medium text-[#171123]">{label}</span>
                    <span className={`text-sm font-bold px-2.5 py-1 rounded-lg ${color}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Step 3: Stay • Switch • Return
  if (step === 3) {
    return (
      <div className={`${containerClass} animate-fade-in-up`}>
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          <div>
            <h2 className={`${headlineClass} text-3xl sm:text-4xl md:text-5xl mb-3`}>
              One framework. Three signals.
            </h2>
            <p className={`${sublineClass} ${sublineSize}`}>
              Understanding the true journey of engagement
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Stay', subtitle: 'Measure attention', accent: 'text-[#10B981]' },
              { title: 'Switch', subtitle: 'Detect distraction', accent: 'text-[#F59E0B]' },
              { title: 'Return', subtitle: 'Predict re-engagement', accent: 'text-[#6F2DBD]' },
            ].map(({ title, subtitle, accent }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-gray-100 bg-white/80 shadow-sm"
              >
                <h3 className="font-header text-2xl sm:text-3xl font-bold text-[#171123]">
                  {title}
                </h3>
                <span className={`text-base font-semibold ${accent}`}>{subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Step 4: Three principles (cards)
  if (step === 4) {
    return (
      <div className={`${containerClass} animate-slide-in-left`}>
        <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
          <div className="text-center space-y-3">
            <h2 className={`${headlineClass} text-2xl sm:text-3xl md:text-4xl`}>
              Built on three core principles
            </h2>
            <p className={`${sublineClass} ${sublineSize}`}>
              Privacy-first behaviour intelligence for modern digital platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {[
              { title: 'Privacy-first', desc: 'Compliance-ready design with minimal data exposure.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', bg: 'bg-[#10B981]/10', color: 'text-[#10B981]' },
              { title: 'Identity-free', desc: 'No personal identity tracking, only behavioural patterns.', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636', bg: 'bg-[#6F2DBD]/10', color: 'text-[#6F2DBD]' },
              { title: 'Insight-driven', desc: 'Convert attention signals into real growth decisions.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', bg: 'bg-[#A663CC]/10', color: 'text-[#A663CC]' },
            ].map(({ title, desc, icon, bg, color }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} ${color}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                </div>
                <h3 className="font-header text-lg font-bold text-[#171123]">{title}</h3>
                <p className="text-sm text-[#4A4458] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Step 5: Final CTA (repeat primary message + buttons)
  if (step === 5) {
    return (
      <div className={`${containerClass} animate-zoom-in`}>
        <div className="flex flex-col items-center gap-6 max-w-2xl">
          <Logo size="large" />
          <h2 className={`${headlineClass} ${headlineSize}`}>
            The Behaviour Intelligence Platform
          </h2>
          <div className={dividerClass} />
          <p className={`${sublineClass} ${sublineSize}`}>
            Measure. Decode. Predict. — Without identity tracking.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:opacity-95 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #6F2DBD 0%, #8B3FD4 100%)',
                boxShadow: '0 8px 24px rgba(111,45,189,0.28)',
              }}
            >
              Get started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact-sales"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#6F2DBD] border-2 border-[#6F2DBD]/30 hover:bg-[#6F2DBD]/5 transition-all"
            >
              Request demo
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return null
}
