'use client'

import { useState } from 'react'
import CertificateCard from '@/components/ui/CertificateCard'

const certificates = [
  {
    id: 1,
    title: 'Startup India Recognition',
    certificateNo: 'DIPP242921',
    issuedDate: 'February 6, 2026',
    issuer: 'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of India',
    description: 'Officially recognized as a startup by the Department for Promotion of Industry and Internal Trade. Valid for ten years from the date of incorporation (until November 6, 2035).',
    logoUrl: '/img/Startup-India_Preview.png',
    pdfUrl: '/certificates/dpiit-startup-certificate.pdf',
    verifyUrl: 'https://www.startupindia.gov.in/'
  },
  {
    id: 2,
    title: 'Udyam Registration',
    certificateNo: 'UDYAM-TS-02-0296622',
    issuedDate: 'December 12, 2025',
    issuer: 'Ministry of Micro, Small & Medium Enterprises, Government of India',
    description: 'Registered as a Micro Enterprise. Major activities include computer programming, consultancy, software publishing, software support and maintenance, and retail sale of computers, peripheral units, and software.',
    logoUrl: '/img/msme-logo.jpeg',
    pdfUrl: '/certificates/udyam-certificate.pdf',
    verifyUrl: 'https://udyamregistration.gov.in/'
  }
]

const founders = [
  {
    id: 1,
    name: 'Dr. S. Ravi Kumar',
    title: 'Founder & Managing Director',
    company: 'Cognera Data Labs Pvt Ltd',
    initials: 'SR',
    bio: [
      'Dr. S. Ravi Kumar is the Founder and Managing Director of Cognera Data Labs Pvt Ltd, a DeepTech company building privacy-first behavioral analytics infrastructure for regulated digital environments.',
      'With a Ph.D. in Finance and over 15 years of academic and applied research experience, Dr. Ravi Kumar specializes in quantitative modeling, time series analysis, and uncertainty measurement. His work in dynamic systems and behavioral modeling forms the analytical backbone of Cognera\'s core architecture.',
      'He founded Cognera to solve a structural gap in modern analytics: enabling organizations to understand user engagement and behavioral flow without relying on invasive tracking or personally identifiable data. Under his leadership, the company is developing SDK-based behavioral intelligence systems that measure attention patterns, usage transitions, and engagement dynamics in a compliance-aligned framework.',
      'Dr. Ravi Kumar leads product strategy, modeling architecture, and long-term infrastructure design. His focus is on building scalable, privacy-by-design analytics systems that meet the operational requirements of enterprise, healthcare, and compliance-sensitive digital platforms.',
      'His vision is to establish a trusted behavioral intelligence layer that enables responsible measurement while maintaining strict regulatory and ethical boundaries.'
    ]
  },
  {
    id: 2,
    name: 'Dr. Radhakrishna Bhimavarapu',
    title: 'Executive Director',
    company: 'Cognera Data Labs Private Limited',
    initials: 'RB',
    bio: [
      'Dr. Radhakrishna Bhimavarapu is a research-driven professional with a strong orientation toward analytics, data governance, and strategic decision-making. With a background that blends academic rigor and applied business insight, he brings a structured, evidence-based approach to problem solving—an essential capability for guiding early-stage ventures through complex data and regulatory environments.',
      'As Executive Director of Cognera Data Labs Private Limited, he focuses on building scalable analytical frameworks that translate raw data into actionable intelligence. His vision for the company is the design of robust dashboards that not only support real-time performance monitoring but also align with evolving regulatory expectations and ethical standards in data management. By integrating research methodologies with practical analytics, he promotes transparency, accuracy, and responsible data usage across organizational processes.',
      'Radhakrishna\'s strengths lie in analytical modeling, research synthesis, and strategic oversight, enabling him to bridge the gap between technical teams and leadership stakeholders. His commitment to governance, compliance, and ethical data practices positions Cognera Data Labs to develop trustworthy, insight-driven solutions while maintaining long-term credibility in a rapidly evolving digital ecosystem.'
    ]
  }
]

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    label: 'DeepTech',
    sublabel: 'Infrastructure',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: 'Privacy',
    sublabel: 'By Design',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    label: 'Behavioral',
    sublabel: 'Intelligence',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    label: 'Compliance',
    sublabel: 'Aligned',
  },
]

function FounderCard({ founder }) {
  const [expanded, setExpanded] = useState(false)
  const previewParagraphs = founder.bio.slice(0, 2)
  const remainingParagraphs = founder.bio.slice(2)

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="h-1 w-full bg-gradient-to-r from-[#6F2DBD] via-[#A663CC] to-[#6F2DBD]" />
      <div className="p-6 sm:p-8 flex-grow">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#6F2DBD] to-[#A663CC] flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
            {founder.initials}
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-[#171123] mb-1 leading-tight">{founder.name}</h3>
            <p className="text-[#6F2DBD] font-semibold text-sm tracking-wide mb-0.5">{founder.title}</p>
            <p className="text-[#4A4458] text-sm">{founder.company}</p>
          </div>
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#6F2DBD]/40 to-transparent mb-5" />
        <div className="space-y-4 text-[#4A4458] leading-relaxed text-body">
          {previewParagraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? 'text-[#171123] font-medium' : ''}>{paragraph}</p>
          ))}
          {remainingParagraphs.length > 0 && (
            <>
              <div
                className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {remainingParagraphs.map((paragraph, index) => (
                  <p key={index + 2}>{paragraph}</p>
                ))}
              </div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 text-[#6F2DBD] font-semibold text-sm hover:text-[#5A2399] transition-colors mt-2"
              >
                {expanded ? 'Show less' : 'Read full bio'}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero – reduced top space, 2-line headline */}
      <section className="pt-8 sm:pt-10 pb-16 sm:pb-24 bg-[#FBFBFB]" aria-label="About hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#6F2DBD]/10 text-[#6F2DBD] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#6F2DBD] animate-pulse" />
              About Cognera Data Labs
            </div>
            <h1 className="text-[#171123] mb-5 leading-tight max-w-4xl mx-auto">
              Building the future of
              <br />
              <span className="bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] bg-clip-text text-transparent">
                privacy-first
              </span>{' '}
              behavioural intelligence
            </h1>
            <p className="text-lg text-[#4A4458] leading-relaxed max-w-2xl mx-auto">
              Enabling organizations to understand engagement without compromising user privacy. Analytics built on trust.
            </p>
          </div>
        </div>
      </section>

      {/* Key highlights – same section padding and container */}
      <section className="py-16 sm:py-24 bg-white" aria-label="Key highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#FBFBFB] border border-gray-100 rounded-xl px-5 py-4 hover:border-[#6F2DBD]/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#6F2DBD]/10 flex items-center justify-center text-[#6F2DBD] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#171123]">{item.label}</div>
                    <div className="text-xs text-[#4A4458]">{item.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Cognera Initiative */}
      <section className="py-16 sm:py-24 bg-[#F8F5FC]" aria-label="The Cognera Initiative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-3 bg-[#6F2DBD]/5 rounded-2xl blur-2xl opacity-60" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] bg-white">
                <img
                  src="/img/about_us_abstract_illustration.png"
                  alt="Data Intelligence Illustration"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#10B981]/10 rounded-lg flex items-center justify-center text-[#10B981]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#4A4458]">Privacy First</div>
                  <div className="text-sm font-bold text-[#171123]">100% Compliant</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#6F2DBD]/10 text-[#6F2DBD] mb-5">
                The Cognera Initiative
              </div>
              <h2 className="text-[#171123] mb-5">
                Solving the structural gap in modern analytics
              </h2>
              <div className="space-y-5 text-[#4A4458] text-body leading-relaxed">
                <p>
                  Cognera Data Labs is a DeepTech initiative dedicated to solving a structural gap in modern analytics: enabling organizations to understand user engagement and behavioural flow without relying on invasive tracking or personally identifiable data.
                </p>
                <p>
                  Our mission is to build a trusted behavioural intelligence layer that enables responsible measurement while maintaining strict regulatory and ethical boundaries. We believe that deep insights and user privacy should not be mutually exclusive.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-[#171123] mb-0.5">SDK</div>
                  <p className="text-sm text-[#4A4458]">Based Architecture</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-[#171123] mb-0.5">Zero</div>
                  <p className="text-sm text-[#4A4458]">PII Collection</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-[#171123] mb-0.5">Real-time</div>
                  <p className="text-sm text-[#4A4458]">Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation & Recognition */}
      <section className="py-16 sm:py-24 bg-[#FBFBFB]" aria-label="Accreditation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-white px-6 sm:px-10 lg:px-14 py-12 sm:py-16 shadow-sm">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#10B981]/10 text-[#10B981] mb-5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Verified & Recognized
              </div>
              <h2 className="text-[#171123] mb-4">
                Accreditation & Recognition
              </h2>
              <p className="text-lg text-[#4A4458] max-w-2xl mx-auto">
                Recognized by leading government bodies for compliance, innovation, and enterprise readiness.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders & Leadership */}
      <section className="py-16 sm:py-24 bg-white" aria-label="Leadership">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#6F2DBD]/10 text-[#6F2DBD] mb-5">
              Leadership
            </div>
            <h2 className="text-[#171123] mb-4">
              Founders & Leadership
            </h2>
            <p className="text-lg text-[#4A4458] max-w-xl mx-auto">
              The visionaries building Cognera Data Labs from the ground up.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-16 sm:py-24 bg-[#F8F5FC]" aria-label="Company information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-100 rounded-2xl bg-white px-6 sm:px-8 py-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#4A4458]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#8B8696]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  <span className="font-medium text-[#171123]">Cognera Data Labs Pvt Ltd</span>
                </div>
                <span className="hidden sm:inline text-gray-200">|</span>
                <span>Inc. Nov 7, 2025</span>
                <span className="hidden sm:inline text-gray-200">|</span>
                <span className="font-mono text-xs">CIN: U62099TS2025PTC196024</span>
                <span className="hidden sm:inline text-gray-200">|</span>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#8B8696]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
