'use client'

import { useState, useEffect } from 'react'

const purple = '#6F2DBD'
const purpleLight = '#A663CC'

// Human illustrations — one per slide, content-related
const illustrations = [
  // 1. Analytics → behaviour: person at desk with chart
  () => (
    <svg viewBox="0 0 200 160" className="w-full h-full max-h-[180px] sm:max-h-[220px]" aria-hidden>
      <ellipse cx="100" cy="128" rx="38" ry="12" fill={purple} fillOpacity="0.2" />
      <path d="M72 95 v28 l12 8 l16 -6 l16 6 l12 -8 v-28 l-8 -12 h-40 z" fill={purple} fillOpacity="0.4" stroke={purple} strokeWidth="1.5" />
      <circle cx="100" cy="68" r="24" fill={purple} />
      <circle cx="100" cy="65" r="8" fill="white" fillOpacity="0.9" />
      <rect x="58" y="82" width="84" height="36" rx="4" fill="white" fillOpacity="0.6" stroke={purpleLight} strokeWidth="1" />
      <path d="M68 108 L82 98 L98 104 L112 92 L132 102" fill="none" stroke={purple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // 2. App switching / fragmenting attention: person with multiple screens
  () => (
    <svg viewBox="0 0 200 160" className="w-full h-full max-h-[180px] sm:max-h-[220px]" aria-hidden>
      <ellipse cx="100" cy="132" rx="40" ry="12" fill={purple} fillOpacity="0.2" />
      <path d="M68 98 v26 l14 8 l18 -4 l18 4 l14 -8 v-26 l-6 -14 h-52 z" fill={purple} fillOpacity="0.4" stroke={purple} strokeWidth="1.5" />
      <circle cx="100" cy="70" r="22" fill={purple} />
      <circle cx="98" cy="67" r="6" fill="white" fillOpacity="0.9" />
      <rect x="52" y="52" width="22" height="28" rx="2" fill="white" fillOpacity="0.7" stroke={purpleLight} strokeWidth="1" />
      <rect x="126" y="52" width="22" height="28" rx="2" fill="white" fillOpacity="0.7" stroke={purpleLight} strokeWidth="1" />
      <line x1="74" y1="66" x2="74" y2="76" stroke={purple} strokeWidth="1" />
      <line x1="78" y1="72" x2="78" y2="76" stroke={purple} strokeWidth="1" />
      <line x1="148" y1="66" x2="148" y2="76" stroke={purple} strokeWidth="1" />
      <line x1="152" y1="72" x2="152" y2="76" stroke={purple} strokeWidth="1" />
    </svg>
  ),
  // 3. Engagement metrics without explanations: person confused by chart
  () => (
    <svg viewBox="0 0 200 160" className="w-full h-full max-h-[180px] sm:max-h-[220px]" aria-hidden>
      <ellipse cx="100" cy="130" rx="36" ry="11" fill={purple} fillOpacity="0.2" />
      <path d="M74 92 v30 l14 8 l24 -4 l24 4 l14 -8 v-30 h-90 z" fill={purple} fillOpacity="0.4" stroke={purple} strokeWidth="1.5" />
      <circle cx="100" cy="62" r="22" fill={purple} />
      <circle cx="96" cy="58" r="4" fill="white" />
      <path d="M92 68 Q100 72 108 68" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M94 58 L98 62 M106 58 L102 62" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="70" y="98" width="60" height="24" rx="3" fill="white" fillOpacity="0.7" stroke={purpleLight} strokeWidth="1" />
      <path d="M78 114 L88 108 L98 116 L108 110 L118 114" fill="none" stroke={purple} strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round" />
    </svg>
  ),
  // 4. Teams lack visibility: small group, one with question/visibility
  () => (
    <svg viewBox="0 0 200 160" className="w-full h-full max-h-[180px] sm:max-h-[220px]" aria-hidden>
      <ellipse cx="70" cy="128" rx="22" ry="8" fill={purple} fillOpacity="0.2" />
      <ellipse cx="130" cy="128" rx="22" ry="8" fill={purple} fillOpacity="0.2" />
      <circle cx="70" cy="98" r="18" fill={purple} fillOpacity="0.5" />
      <circle cx="70" cy="95" r="5" fill="white" fillOpacity="0.8" />
      <path d="M58 98 v22 l12 8 l24 -6 v-24 z" fill={purple} fillOpacity="0.4" stroke={purple} strokeWidth="1.2" />
      <circle cx="130" cy="98" r="18" fill={purple} fillOpacity="0.5" />
      <circle cx="130" cy="95" r="5" fill="white" fillOpacity="0.8" />
      <path d="M118 98 v22 l12 8 l24 -6 v-24 z" fill={purple} fillOpacity="0.4" stroke={purple} strokeWidth="1.2" />
      <circle cx="100" cy="72" r="20" fill={purple} />
      <circle cx="100" cy="69" r="6" fill="white" fillOpacity="0.9" />
      <path d="M82 88 v32 l18 8 l18 -8 v-32 z" fill={purple} fillOpacity="0.4" stroke={purple} strokeWidth="1.5" />
      <circle cx="100" cy="105" r="6" fill="white" fillOpacity="0.5" stroke={purpleLight} strokeWidth="1" />
      <path d="M100 98 L100 92 M97 95 L103 95" stroke={purpleLight} strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  // 5. Drop-offs without context: person stepping away / leaving
  () => (
    <svg viewBox="0 0 200 160" className="w-full h-full max-h-[180px] sm:max-h-[220px]" aria-hidden>
      <ellipse cx="100" cy="132" rx="38" ry="11" fill={purple} fillOpacity="0.2" />
      <path d="M78 95 v28 l10 8 l14 -4 l6 -12 l10 4 l14 -8 v-28 l-8 -10 h-46 z" fill={purple} fillOpacity="0.4" stroke={purple} strokeWidth="1.5" />
      <circle cx="100" cy="68" r="22" fill={purple} />
      <circle cx="97" cy="65" r="5" fill="white" fillOpacity="0.9" />
      <path d="M92 78 Q100 82 108 78" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M130 95 L158 75 M134 100 L162 80" stroke={purple} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
      <circle cx="165" cy="72" r="8" fill={purple} fillOpacity="0.3" />
      <path d="M72 100 L52 88 L56 82 L72 92" fill={purple} fillOpacity="0.3" stroke={purple} strokeWidth="1" />
    </svg>
  ),
  // 6. Privacy laws: person with shield / protected
  () => (
    <svg viewBox="0 0 200 160" className="w-full h-full max-h-[180px] sm:max-h-[220px]" aria-hidden>
      <ellipse cx="100" cy="128" rx="36" ry="11" fill={purple} fillOpacity="0.2" />
      <path d="M76 94 v28 l12 8 l24 -4 l24 4 l12 -8 v-28 h-72 z" fill={purple} fillOpacity="0.4" stroke={purple} strokeWidth="1.5" />
      <circle cx="100" cy="66" r="22" fill={purple} />
      <circle cx="100" cy="63" r="6" fill="white" fillOpacity="0.9" />
      <path d="M92 74 Q100 78 108 74" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M100 82 L100 52 L78 62 L78 82 Q100 92 122 82 L122 62 Z" fill="white" fillOpacity="0.9" stroke={purple} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M92 70 L98 76 L110 64" fill="none" stroke={purple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
]

const slides = [
  {
    title: 'Analytics show what happened. Cognera shows how it happened.',
    subtitle: 'Traditional analytics stop at clicks, visits, and events. They do not explain behaviour.',
    bg: '#F5F0FA',
  },
  {
    title: 'Frequent cross-application switching fragments attention during active workflows.',
    bg: '#E8F4FD',
  },
  {
    title: 'Engagement metrics fluctuate without actionable explanations',
    bg: '#F0F9F4',
  },
  {
    title: 'Teams lack visibility into patterns of distraction vs focused usage.',
    bg: '#FEF9E8',
  },
  {
    title: 'Drop-offs occur without behavioural context',
    bg: '#FDF2F4',
  },
  {
    title: 'Privacy laws limit invasive, event-heavy tracking approaches',
    bg: '#EEF2FF',
  },
]

export default function SocialProofSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 2500)
    return () => clearInterval(id)
  }, [paused])

  const Illustration = illustrations[index]

  return (
    <section
      className="relative w-full min-h-[280px] sm:min-h-[320px] flex flex-col justify-center rounded-none overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: slides[index].bg }}
    >
      <div
        key={index}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 px-6 sm:px-10 md:px-12 py-10 sm:py-12 max-w-6xl mx-auto w-full animate-fade-in-up"
      >
        <div className="flex-shrink-0 w-40 sm:w-48 md:w-56">
          <Illustration />
        </div>
        <div className="flex-1 text-center sm:text-left min-w-0">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 leading-tight text-[#171123]">
            {slides[index].title}
          </p>
          {slides[index].subtitle && (
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl text-[#4A4458]">
              {slides[index].subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 pb-6">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="rounded-full p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-primary focus-visible:ring-offset-2"
          style={{ color: purple }}
          aria-label={paused ? 'Play carousel' : 'Pause carousel'}
          title={paused ? 'Play' : 'Pause'}
        >
          {paused ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          )}
        </button>
        <div className="flex gap-1.5 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-primary focus-visible:ring-offset-2"
              style={{
                backgroundColor: i === index ? purple : 'rgba(111, 45, 189, 0.3)',
                transform: i === index ? 'scale(1.2)' : 'scale(1)',
              }}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
