/* eslint-disable react/no-unescaped-entities */
'use client'

import { useEffect, useRef } from 'react'

const tableOfContents = [
  { id: 'roles-definitions', title: '1. Roles and Definitions' },
  { id: 'applicability', title: '2. Applicability & Contractual Relationship' },
  { id: 'purpose-nature', title: '3. Purpose and Nature of the Cognera SDK' },
  { id: 'data-collected', title: '4. Categories of Data Collected' },
  { id: 'data-processing', title: '5. Purpose of Data Processing' },
  { id: 'legal-basis', title: '6. Legal Basis for Processing' },
  { id: 'data-retention', title: '7. Data Retention' },
  { id: 'user-rights', title: '8. User Rights' },
  { id: 'consent-management', title: '9. Consent Management' },
  { id: 'data-sharing', title: '10. Data Sharing and Disclosure' },
  { id: 'data-security', title: '11. Data Security' },
  { id: 'international-transfers', title: '12. International Data Transfers' },
  { id: 'children-privacy', title: '13. Children\'s Privacy' },
  { id: 'security-measures', title: '14. Security Measures' },
  { id: 'cross-border', title: '15. Cross-Border Data Transfer' },
  { id: 'special-provisions', title: '16. Special Provisions for Children and Persons with Disabilities' },
  { id: 'limitation-liability', title: '17. Limitation of Liability & Company Protection' },
  { id: 'amendments', title: '18. Amendments and Version Control' },
  { id: 'governing-law', title: '19. Governing Law and Jurisdiction' },
  { id: 'acknowledgement', title: '20. Acknowledgement and Consent' },
  { id: 'contact', title: '21. Grievance Officer and Contact Information' },
]

export default function PrivacyPage() {
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const updateActiveSection = () => {
      // Don't auto-scroll sidebar if user is manually scrolling
      if (isScrollingRef.current) return
      // Get sections, preferring visible ones
      const sections = tableOfContents.map(item => {
        const elements = document.querySelectorAll(`#${item.id}`)
        for (const el of elements) {
          const rect = el.getBoundingClientRect()
          const style = window.getComputedStyle(el)
          // Only return element if it's actually visible
          if (rect.width > 0 && rect.height > 0 &&
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            style.opacity !== '0') {
            return el
          }
        }
        // Fallback to first element if none are visible (shouldn't happen)
        return elements[0] || null
      })

      const tocLinks = document.querySelectorAll('.toc-link')

      if (sections.length === 0 || tocLinks.length === 0) return

      let activeIndex = 0
      const viewportOffset = 180 // Distance from top of viewport to account for header

      // Filter out null sections and get their indices
      const validSections = sections
        .map((section, index) => ({ section, index }))
        .filter(({ section }) => section !== null)

      if (validSections.length === 0) return

      // Find the section that is currently most relevant
      // Priority: section whose top is closest to but above the viewport offset
      let bestMatch = null
      let bestDistance = Infinity

      for (const { section, index } of validSections) {
        try {
          const rect = section.getBoundingClientRect()
          const distanceFromOffset = rect.top - viewportOffset

          // If section has passed the offset (is above it) and is not too far above
          if (rect.top <= viewportOffset && rect.top > -500) {
            const distance = Math.abs(distanceFromOffset)
            // Prefer sections that are closer to the offset
            if (distance < bestDistance) {
              bestDistance = distance
              bestMatch = index
            }
          }
        } catch (e) {
          continue
        }
      }

      // If we found a section that has passed the offset, use it
      if (bestMatch !== null) {
        activeIndex = bestMatch
      } else {
        // If no section has passed yet, find the one closest to the offset
        let closestIndex = validSections[0].index
        let closestDistance = Infinity

        for (const { section, index } of validSections) {
          try {
            const rect = section.getBoundingClientRect()
            const distance = Math.abs(rect.top - viewportOffset)
            if (distance < closestDistance) {
              closestDistance = distance
              closestIndex = index
            }
          } catch (e) {
            continue
          }
        }
        activeIndex = closestIndex
      }

      // Update all links
      tocLinks.forEach((link, index) => {
        const indicator = link.querySelector('span')
        link.classList.remove('text-[#7440FA]', 'font-semibold', 'text-white/80')
        if (indicator) {
          indicator.classList.remove('opacity-100')
          indicator.classList.add('opacity-0')
        }
        if (index === activeIndex) {
          link.classList.add('text-[#7440FA]', 'font-semibold')
          if (indicator) {
            indicator.classList.remove('opacity-0')
            indicator.classList.add('opacity-100')
          }

          // Only auto-scroll sidebar if link is significantly out of view (not on manual click)
          if (!isScrollingRef.current) {
            const sidebar = link.closest('aside')
            if (sidebar) {
              const sidebarContent = sidebar.querySelector('div')
              if (sidebarContent) {
                const linkRect = link.getBoundingClientRect()
                const sidebarRect = sidebarContent.getBoundingClientRect()

                // Only scroll if link is significantly out of view (more than 50px)
                if (linkRect.top < sidebarRect.top - 50 || linkRect.bottom > sidebarRect.bottom + 50) {
                  const linkTop = linkRect.top - sidebarRect.top + sidebarContent.scrollTop
                  sidebarContent.scrollTo({
                    top: linkTop - 20, // Offset to show some space above
                    behavior: 'smooth'
                  })
                }
              }
            }
          }
        } else {
          link.classList.add('text-white/80')
        }
      })
    }

    // Initial highlight with a small delay to ensure DOM is ready
    setTimeout(() => {
      updateActiveSection()
    }, 100)

    // Update on window scroll
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const scrollToSection = (id) => {
    // Set flag to prevent sidebar auto-scroll during manual navigation
    isScrollingRef.current = true

    // Find the visible section element (handle mobile/desktop duplicates)
    const elements = document.querySelectorAll(`#${id}`)
    let element = null

    for (const el of elements) {
      const rect = el.getBoundingClientRect()
      const style = window.getComputedStyle(el)
      // Only use element if it's actually visible
      if (rect.width > 0 && rect.height > 0 &&
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        style.opacity !== '0') {
        element = el
        break
      }
    }

    // Fallback to first element if none are visible
    if (!element && elements.length > 0) {
      element = elements[0]
    }

    if (element) {
      const headerOffset = 180 // Account for fixed header
      const elementRect = element.getBoundingClientRect()
      const elementTop = elementRect.top + window.pageYOffset
      const offsetPosition = elementTop - headerOffset

      window.scrollTo({
        top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
        behavior: 'smooth'
      })

      // Reset flag after scroll completes
      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000) // Wait for smooth scroll to complete
    } else {
      isScrollingRef.current = false
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'transparent' }}>
      {/* Combined Table of Contents and Content Section */}
      <div className="w-full relative">
        <div className="flex flex-col md:flex-row">
          {/* Table of Contents Sidebar - Fixed on desktop, hidden on mobile */}
          <aside className="hidden md:block w-64 border-r-2 flex-shrink-0 fixed left-0" style={{ backgroundColor: 'transparent', borderColor: '#7440FA', borderRightWidth: '2px', top: '150px', bottom: '0', zIndex: 50 }}>
            <div className="p-6 h-full overflow-y-auto">
              <h2 className="text-lg font-semibold text-white mb-4">Table of Contents</h2>
              <nav className="space-y-1">
                {tableOfContents.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="toc-link block w-full text-left text-sm text-white/80 hover:text-[#7440FA] py-2 px-3 rounded transition-colors relative"
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#7440FA] opacity-0 transition-opacity"></span>
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content - Scrollable with header banner and footer */}
          <div className="flex-1 w-full md:ml-64" style={{ backgroundColor: 'transparent' }}>
            {/* Header Banner - Part of scrollable content */}
            <div
              className="w-full relative"
              style={{
                paddingTop: '30px',
                paddingBottom: '30px',
                backgroundColor: 'transparent',
              }}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-3 sm:mb-4 md:mb-6 leading-tight"
                >
                  Privacy Policy
                </h1>
                {/* Last Updated Date */}
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 text-center"
                >
                  Last updated on 2nd January 2026
                </p>
              </div>
            </div>
            {/* Mobile: Simple flowing document layout */}
            <div className="md:hidden px-4 py-6 pb-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-white/90" style={{ backgroundColor: 'transparent' }}>
                  <p className="mb-4 text-justify">This Privacy Policy (&quot;Policy&quot;) is published by COGNERA DATA LABS PRIVATE LIMITED, a company incorporated under the Companies Act, 2013, bearing CIN U62091TS2025PTC206136, and having its registered office at Kutbullapur,Hyderabad (&quot;Company&quot;). This Policy governs the manner in which our Company collects, receives, processes, stores, transmits, protects, uses, discloses, and retains data through its software development kits, applications, AI/ML products, cloud platforms, websites, and related technology solutions, including but not limited to our software development kit (&quot;SDK&quot; or &quot;Services&quot;).</p>

                  <p className="mb-4 text-justify">The Client App or Data Fiduciary (&quot;Client App&quot;) using the SDK is solely responsible for obtaining all necessary consents from Users or device owners (&quot;Users&quot;) in accordance with applicable laws, including the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;). By integrating, installing, or using the SDK, the Client App confirms that it has obtained valid, informed, specific, and lawful consent from Users for any personal or digital personal data processed via the Services. The Company acts strictly as a Data Processor and does not collect, verify, or manage User consent on behalf of the Client App. The Company shall not be responsible or liable for any failure or deficiency arising from the Client App&apos;s collection, management, or verification of User consent, including consent required from minors or individuals requiring parental or guardian authorization.</p>

                  <p className="mb-4 text-justify">This Policy forms an integral part of the Terms of Service governing the SDK, and by accessing or using the SDK, both the Client App and the Users expressly confirm that they have read, understood, and voluntarily agreed to the terms contained herein. This Policy describes the manner in which the company process personal data and digital personal data in accordance with the DPDP Act, together with the Information Technology Act, 2000 (&quot;IT Act&quot;) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&quot;SPDI Rules&quot;), as amended from time to time, to the extent applicable. The Client App is fully responsible for ensuring lawful processing of data, fulfilling User rights, communicating necessary notices, maintaining accuracy of data, and complying with all retention, deletion, and other obligations mandated under applicable law. The Company provides the Services strictly in accordance with the Terms of Service and this Privacy Policy.</p>

                  <p className="mb-4 text-justify">This Policy also describes the categories of information processed and the purposes for which data is used, stored, and disclosed in connection with the Services. By using the SDK or Services, the Client App confirms acceptance of this Policy and its obligations.</p>

                  <h2 id="roles-definitions" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-8" style={{ scrollMarginTop: '20px' }}>1. Roles and Definitions</h2>

                  <p className="mb-4 text-justify">For the purposes of this Policy:</p>

                  <p className="mb-2 ml-6 text-justify">1.1. "Data Principal / User" means an individual to whom personal data relates, including children or persons with disabilities acting through their lawful guardian, as defined under the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;).</p>

                  <p className="mb-2 ml-6 text-justify">1.2. "Data Fiduciary / Client App" means any person or entity who alone or jointly determines the purposes and means of processing personal data, as understood under the DPDP Act.</p>

                  <p className="mb-2 ml-6 text-justify">1.3. "Data Processor / Company" means the Company, which processes personal data on behalf of a Data Fiduciary.</p>

                  <p className="mb-2 ml-6 text-justify">1.4. "Personal Data / Digital Personal Data" means any information relating to an individual who is identifiable, directly or indirectly, by or in connection with such data.</p>

                  <p className="mb-2 ml-6 text-justify">1.5. "Processing" includes, wholly or partly, any operation or set of operations performed on personal data, including collection, recording, organization, storage, adaptation, retrieval, use, alignment, combination, indexing, sharing, transmission, restriction, erasure, or destruction.</p>

                  <p className="mb-2 ml-6 text-justify">1.6. "SDK" refers to the Company&apos;s Software Development Kit installed by the Client App to enable or support its services.</p>

                  <p className="mb-4 text-justify">Unless expressly provided otherwise under a written agreement with the Client App:</p>

                  <p className="mb-2 ml-8 text-justify">i. The Client App acts as the Data Fiduciary in relation to all end-user personal data and is solely responsible for obtaining consent, ensuring lawful processing, and fulfilling all obligations under applicable laws, including the DPDP Act.</p>

                  <p className="mb-2 ml-8 text-justify">ii. The Company acts solely as a Data Processor, performing processing activities strictly on behalf of the Data Fiduciary and in accordance with a Data Processing Agreement (DPA) or SDK license.</p>

                  <p className="mb-4 text-justify">In exceptional cases where the Company independently determines the purposes and means of processing such as providing direct dashboards or services to end users under a separate contractual arrangement the Company may act as a Data Fiduciary and shall comply with obligations applicable to a Data Fiduciary under the DPDP Act.</p>

                  <h2 id="applicability" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>2. Applicability & Contractual Relationship</h2>

                  <p className="mb-2 ml-6 text-justify">2.1. This Policy applies to all Client Apps and Users accessing or using the Services.</p>

                  <p className="mb-2 ml-6 text-justify">2.2. The Client App, acting as the Data Fiduciary, bears full and exclusive responsibility for:</p>

                  <p className="mb-2 ml-8 text-justify">a) Obtaining valid, informed, and lawful consent from Users;</p>
                  <p className="mb-2 ml-8 text-justify">b) Issuing all required notices to Users;</p>
                  <p className="mb-2 ml-8 text-justify">c) Verifying parental or guardian consent where applicable; and</p>
                  <p className="mb-2 ml-8 text-justify">d) Complying with all other obligations imposed on a Data Fiduciary under applicable laws, including the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;) and other relevant regulations as amended from time to time.</p>

                  <p className="mb-2 ml-6 text-justify">2.3. The Company acts solely as a Data Processor and processes personal or digital personal data strictly in accordance with documented, lawful, and written instructions provided by the Client App. The Client App, acting as Data Fiduciary, is solely responsible for obtaining consent, issuing required notices, managing data principals' rights, and configuring and enabling SDK permissions, feature flags, consent mechanisms, data collection scope, and usage parameters in accordance with applicable law, platform policies, and its own privacy obligations. The Company shall not be responsible or liable for any acts, omissions, misconfigurations, over-collection, excessive processing, or unlawful enablement of SDK functionality resulting from the Client App&apos;s implementation choices, settings, or technical integration.</p>

                  <p className="mb-2 ml-6 text-justify">2.4. In the event of any conflict or inconsistency between the terms of this Privacy Policy and the terms of any Data Processing Agreement or equivalent written agreement executed between the Company and a Client App, the terms of such Data Processing Agreement shall prevail to the extent of such conflict.</p>

                  <h2 id="purpose-nature" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>3. Purpose and Nature of the Cognera SDK</h2>

                  <p className="mb-2 ml-6 text-justify">3.1. The Company is engaged in the business of designing, developing, customizing, licensing, and supporting software, applications, artificial intelligence, and data analytics platforms, including SaaS, PaaS, and AI/ML-based products, in India.</p>

                  <p className="mb-2 ml-6 text-justify">3.2. The Company&apos;s SDK is a proprietary software component designed to capture device-level usage patterns solely for the legitimate purpose of providing behavioural analytics, screen time metrics, and usage insights to Client Apps and associated enterprise systems. The SDK generates category-level and behavioural insights in a pseudonymised or anonymised manner and provides such insights to Client Apps and enterprise customers strictly for lawful product, productivity, and analytics use cases.</p>

                  <p className="mb-2 ml-6 text-justify">3.3. The SDK operates in a non-invasive manner, measuring only aggregated and anonymised usage data. It expressly avoids the collection or processing of sensitive personal data. To the extent any pseudonymised data is processed for technical or analytical purposes, such data is handled in accordance with applicable law, including the Digital Personal Data Protection Act, 2023.</p>

                  <p className="mb-2 ml-6 text-justify">3.4. The SDK is developed and functions in accordance with privacy-by-design, data minimization, and purpose limitation principles, and operates strictly within the scope disclosed in this Policy.</p>

                  <h2 id="data-collected" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>4. Categories of Data Collected</h2>

                  <p className="mb-2 ml-6 text-justify">4.1. On-Device Event Data (Non-Personal Data): The SDK may collect and process device-level, non-personally identifiable usage events solely to generate aggregated insights. These events do not reveal User identity and are used exclusively to compute aggregated behavioural analytics. Such data includes but not limited to:</p>

                  <p className="mb-2 ml-8 text-justify">a) Application package names;</p>
                  <p className="mb-2 ml-8 text-justify">b) Session start and end times;</p>
                  <p className="mb-2 ml-8 text-justify">c) Screen ON and screen OFF timestamps;</p>
                  <p className="mb-2 ml-8 text-justify">d) Foreground/background application switching events;</p>
                  <p className="mb-2 ml-8 text-justify">e) Device uptime and session durations.</p>

                  <p className="mb-4 text-justify">The SDK records application switching solely as discrete, event-based timestamps reflecting transitions between applications. The SDK does not perform continuous monitoring, real-time observation, background surveillance, or ongoing tracking of User activity beyond such discrete events.</p>

                  <p className="mb-2 ml-6 text-justify">4.2. Derived / Computed Data (Non-Personal Data): Through algorithmic processing, the SDK may generate derived datasets that are pseudonymised, anonymised, and aggregated. All derived datasets uploaded to Company servers are de-identified, anonymised, and aggregated, ensuring that individual Users will not be identified. Examples include:</p>

                  <p className="mb-2 ml-8 text-justify">a) Application category labels (e.g., productivity, social, entertainment);</p>
                  <p className="mb-2 ml-8 text-justify">b) Category-wise screen time data;</p>
                  <p className="mb-2 ml-8 text-justify">c) Total daily or weekly usage sessions;</p>
                  <p className="mb-2 ml-8 text-justify">d) Behavioural patterns and anonymised insights;</p>
                  <p className="mb-2 ml-8 text-justify">e) Device usage trends for analytical purposes.</p>

                  <p className="mb-2 ml-6 text-justify">4.3. Technical and Diagnostic Information (Non-Personal): The SDK may collect technical and diagnostic data to support performance monitoring, troubleshooting, and analytical purposes. The UUID is not linked to any personal identifier and may be reset or removed at any time. This includes:</p>

                  <p className="mb-2 ml-8 text-justify">a) Device manufacturer, model, and technical specifications;</p>
                  <p className="mb-2 ml-8 text-justify">b) Operating system version and SDK version;</p>
                  <p className="mb-2 ml-8 text-justify">c) Randomized, non-identifiable device identifiers (UUID);</p>
                  <p className="mb-2 ml-8 text-justify">d) Performance metrics and error logs (anonymised);</p>
                  <p className="mb-2 ml-8 text-justify">e) Network connectivity type (e.g., Wi-Fi, cellular) for technical optimization.</p>

                  <h2 id="data-processing" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>5. Purpose of Data Processing</h2>

                  <p className="mb-4 text-justify">The Company processes data collected through the SDK exclusively for the following lawful purposes:</p>

                  <p className="mb-2 ml-6 text-justify">5.1. Providing Analytics Services: To generate aggregated, anonymised behavioural analytics, screen time metrics, and usage insights for Client Apps and enterprise customers.</p>

                  <p className="mb-2 ml-6 text-justify">5.2. Product Improvement: To improve the SDK&apos;s functionality, performance, and reliability through technical diagnostics and performance monitoring.</p>

                  <p className="mb-2 ml-6 text-justify">5.3. Compliance and Legal Obligations: To comply with applicable laws, regulations, legal processes, or governmental requests.</p>

                  <p className="mb-2 ml-6 text-justify">5.4. Security and Fraud Prevention: To detect, prevent, and address technical issues, security threats, fraud, or abuse.</p>

                  <p className="mb-2 ml-6 text-justify">5.5. Business Operations: To manage SDK operations, support services, and maintain business continuity, subject to applicable data protection requirements.</p>

                  <h2 id="legal-basis" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>6. Legal Basis for Processing</h2>

                  <p className="mb-2 ml-6 text-justify">6.1. The Company processes data under the legal basis of legitimate interests, contractual necessity, and compliance with legal obligations, as applicable under the DPDP Act and other relevant Indian laws.</p>

                  <p className="mb-2 ml-6 text-justify">6.2. The Client App, acting as Data Fiduciary, is responsible for establishing and maintaining a valid legal basis for processing User data, including obtaining necessary consent where required under applicable law.</p>

                  <h2 id="data-retention" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>7. Data Retention</h2>

                  <p className="mb-2 ml-6 text-justify">7.1. The Company retains SDK-related data only for as long as necessary to fulfill the purposes outlined in this Policy, comply with legal obligations, resolve disputes, and enforce agreements.</p>

                  <p className="mb-2 ml-6 text-justify">7.2. Aggregated and anonymised data may be retained for longer periods for analytical, research, or business purposes, provided such data cannot be used to identify individual Users.</p>

                  <p className="mb-2 ml-6 text-justify">7.3. Upon termination of the SDK integration or upon request by the Client App (subject to legal and contractual requirements), the Company will delete or return SDK-related data in accordance with applicable law and the terms of any Data Processing Agreement.</p>

                  <h2 id="user-rights" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>8. User Rights</h2>

                  <p className="mb-4 text-justify">Under the DPDP Act and applicable laws, Data Principals (Users) have the following rights, which must be exercised through the Client App acting as Data Fiduciary:</p>

                  <p className="mb-2 ml-6 text-justify">8.1. Right to Access: Users may request access to their personal data processed through the SDK.</p>

                  <p className="mb-2 ml-6 text-justify">8.2. Right to Correction: Users may request correction of inaccurate or incomplete data.</p>

                  <p className="mb-2 ml-6 text-justify">8.3. Right to Erasure: Users may request deletion of their personal data, subject to legal and contractual obligations.</p>

                  <p className="mb-2 ml-6 text-justify">8.4. Right to Grievance Redressal: Users may lodge complaints or grievances regarding data processing activities.</p>

                  <p className="mb-2 ml-6 text-justify">8.5. Right to Nominate: Users may nominate another individual to exercise their rights in the event of death or incapacity.</p>

                  <p className="mb-4 text-justify">All requests to exercise these rights must be directed to the Client App, which is responsible for processing such requests and coordinating with the Company where necessary. The Company will assist the Client App in fulfilling User rights requests to the extent required under applicable law and any Data Processing Agreement.</p>

                  <h2 id="consent-management" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>9. Consent Management</h2>

                  <p className="mb-2 ml-6 text-justify">9.1. The Client App, acting as Data Fiduciary, is solely responsible for obtaining valid, informed, specific, and unambiguous consent from Users before enabling SDK processing activities.</p>

                  <p className="mb-2 ml-6 text-justify">9.2. Consent must be obtained in accordance with the DPDP Act and other applicable laws, including special requirements for children and persons with disabilities.</p>

                  <p className="mb-2 ml-6 text-justify">9.3. The Company does not collect, verify, or manage User consent and acts strictly as a Data Processor based on the Client App&apos;s instructions and representations regarding consent.</p>

                  <p className="mb-2 ml-6 text-justify">9.4. Users may withdraw consent at any time through the Client App, and the Client App is responsible for ensuring that withdrawal of consent is respected and communicated to the Company.</p>

                  <h2 id="data-sharing" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>10. Data Sharing and Disclosure</h2>

                  <p className="mb-2 ml-6 text-justify">10.1. The Company does not sell, rent, or trade SDK-related data to third parties for marketing or commercial purposes.</p>

                  <p className="mb-2 ml-6 text-justify">10.2. Data may be shared with:</p>

                  <p className="mb-2 ml-8 text-justify">a) Client Apps and enterprise customers for whom the analytics services are provided;</p>
                  <p className="mb-2 ml-8 text-justify">b) Sub-processors and service providers who assist in SDK operations, subject to contractual safeguards;</p>
                  <p className="mb-2 ml-8 text-justify">c) Legal and regulatory authorities when required by law or to protect rights and safety;</p>
                  <p className="mb-2 ml-8 text-justify">d) Business partners or affiliates in connection with mergers, acquisitions, or business transfers, subject to applicable data protection requirements.</p>

                  <p className="mb-2 ml-6 text-justify">10.3. All data sharing is conducted in accordance with applicable law, this Policy, and any Data Processing Agreement.</p>

                  <h2 id="data-security" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>11. Data Security</h2>

                  <p className="mb-2 ml-6 text-justify">11.1. The Company implements technical and organizational measures to protect SDK-related data against unauthorized access, alteration, disclosure, or destruction.</p>

                  <p className="mb-2 ml-6 text-justify">11.2. Security measures include encryption, access controls, regular security assessments, and compliance with industry standards.</p>

                  <p className="mb-2 ml-6 text-justify">11.3. While the Company strives to maintain robust security practices, no system can guarantee absolute security, and the Company shall not be liable for security breaches arising from factors beyond its reasonable control.</p>

                  <h2 id="international-transfers" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>12. International Data Transfers</h2>

                  <p className="mb-2 ml-6 text-justify">12.1. SDK-related data may be stored or processed on servers located in India or in jurisdictions that lawfully permit data transfers from India.</p>

                  <p className="mb-2 ml-6 text-justify">12.2. Any cross-border transfer is carried out in compliance with applicable Indian laws and with appropriate safeguards to ensure data protection.</p>

                  <h2 id="children-privacy" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>13. Children's Privacy</h2>

                  <p className="mb-2 ml-6 text-justify">13.1. Where the SDK is used in relation to children, the Client App is solely responsible for obtaining verifiable parental or guardian consent as required under applicable law.</p>

                  <p className="mb-2 ml-6 text-justify">13.2. The SDK will not be used for any form of tracking, profiling, or processing prohibited for children under the DPDP Act.</p>

                  <h2 id="security-measures" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>14. Security Measures</h2>

                  <p className="mb-2 ml-6 text-justify">14.1. Encryption: The Company employs industry-standard encryption protocols for data in transit and at rest to protect SDK-related data from unauthorized access, interception, or disclosure.</p>

                  <p className="mb-2 ml-6 text-justify">14.2. Logging and Monitoring: The Company maintains continuous system logs and monitoring tools for operational, diagnostic, and security purposes. Logs are retained for a minimum period of one (1) year, or such other period as may be required under applicable law.</p>

                  <p className="mb-2 ml-6 text-justify">14.3. Backup and Business Continuity: Encrypted backups, redundancy mechanisms, and disaster recovery infrastructure are maintained to ensure availability and continuity of operations in case of system failures, outages, or emergencies.</p>

                  <p className="mb-2 ml-6 text-justify">14.4. Contractual Safeguards with Sub-Processors: All sub-processors and service providers engaged by the Company are contractually required to implement security measures equivalent to or exceeding the standards adopted by the Company and to process data only for authorised purposes.</p>

                  <p className="mb-2 ml-6 text-justify">14.5. Security Disclaimer: While the Company implements industry-standard safeguards and endeavours to maintain robust security practices, no system can guarantee absolute security. The Company, however, commits to maintaining security at or above the levels required under the DPDP Act, IT Act, and other applicable Indian regulations.</p>

                  <p className="mb-2 ml-6 text-justify">14.6. Data Breach and Security Incident Notification: In the event of a confirmed security incident or data breach affecting SDK-related data, the Company will notify the Client App in a timely manner. The Company shall not be responsible for notifying Data Principals directly except where required by applicable law. The Client App remains responsible for any legal or regulatory notifications to Users and for compliance with applicable breach notification requirements.</p>

                  <h2 id="cross-border" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>15. Cross-Border Data Transfer</h2>

                  <p className="mb-4 text-justify">SDK-related data may be stored or processed on servers located in India or in jurisdictions that lawfully permit data transfers from India and provide comparable levels of data protection. Any cross-border transfer, where applicable, is carried out in compliance with the applicable laws of India and relevant rules or governmental directions. The Company ensures that all overseas processors and sub-processors operate under contractual, technical, and organisational safeguards that meet or exceed Indian data protection requirements. Details of specific hosting regions may be disclosed in SDK documentation or provided upon request, subject to security considerations.</p>

                  <h2 id="special-provisions" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>16. Special Provisions for Children and Persons with Disabilities</h2>

                  <p className="mb-4 text-justify">Where the SDK is used in relation to children or persons with disabilities requiring lawful guardian consent, the Client App, acting as Data Fiduciary, is solely responsible for obtaining and validating verifiable parental or guardian consent as required under applicable law, and for providing all necessary notices before enabling SDK processing. The SDK will not be used for any form of tracking, profiling, or processing prohibited for children under the DPDP Act, including targeted advertising or behaviourally harmful analytics. The Company acts strictly as a Data Processor in such scenarios and shall not be liable for any failure by the Client App to obtain valid consent, conduct appropriate verification, or comply with statutory obligations related to such Data Principals.</p>

                  <h2 id="limitation-liability" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>17. Limitation of Liability & Company Protection</h2>

                  <p className="mb-2 ml-6 text-justify">17.1. No Liability for Failures of the Client App (Data Fiduciary): The Company operates solely as a Data Processor and shall not, under any circumstances, be liable for any act, omission, or failure attributable to the Client App in its capacity as Data Fiduciary. This includes the Client App&apos;s failure to obtain valid, verified or lawful consent; failure to provide an adequate notice; any wrongful, excessive or unauthorised processing of data; any mishandling, misconfiguration, misuse or unauthorised disclosure of SDK-related data; and any regulatory, civil or criminal consequences arising from its own non-compliance. All compliance obligations regarding lawful processing, consent, notices, and user rights rest solely with the Client App.</p>

                  <p className="mb-2 ml-6 text-justify">17.2. No Liability for Third-Party Systems or External Failures: The Company shall not be responsible for failures or breaches arising from third-party cloud providers, hosting partners, or external service providers; nor shall it be liable for security incidents caused by zero-day vulnerabilities, cyberattacks, force majeure events or any compromise occurring on user devices or within the Client App&apos;s infrastructure. Any loss, damage or breach caused by incorrect implementation, insecure integration, or configuration errors attributable to the Client App also falls outside the Company&apos;s responsibility.</p>

                  <p className="mb-2 ml-6 text-justify">17.3. Limitation of Liability of the Company: To the extent permitted under applicable law, and only where a breach is directly and solely caused by the Company&apos;s wilful misconduct or gross negligence, the Company&apos;s total aggregate liability shall be limited to the fees actually paid by the Client App for the Services during the twelve (12) months preceding the event giving rise to the claim, or the actual proven direct loss, whichever is lower. Under no circumstances shall the Company be liable for any indirect, incidental, consequential, punitive, exemplary or special damages, including loss of profits, loss of data, loss of business, or reputational harm, whether or not such damages were foreseeable.</p>

                  <p className="mb-2 ml-6 text-justify">17.4. Indemnification by the Client App: The Client App agrees to indemnify, defend and hold harmless the Company, its officers and affiliates from any claims, penalties, damages, losses, liabilities or legal expenses arising from the Client App&apos;s breach of applicable data protection laws; failure to obtain valid consent (including parental or guardian consent); failure to comply with notice and transparency obligations; misuse or wrongful processing of SDK-related data; or any negligent or unlawful act committed by the Client App or its personnel. This indemnity survives termination of the SDK integration and any associated agreements.</p>

                  <p className="mb-2 ml-6 text-justify">17.5. Disclaimer: The Company provides the SDK and associated services on an "as-is" and "as-available" basis and makes no representations or warranties, express or implied, regarding the completeness, accuracy, reliability, or fitness for a particular purpose of the SDK or the data processed through it. While the Company implements reasonable technical and organisational safeguards in accordance with applicable law, it does not guarantee that the SDK will operate uninterrupted, error-free, or free from security vulnerabilities. The Company shall not be liable for any indirect, incidental, consequential, punitive, or special damages, including but not limited to loss of profits, loss of business, loss of data, or reputational harm arising from the use of the SDK, integration with the Client App, or reliance on any insights, reports, or analytics provided. Users and Client Apps acknowledge and agree that all risks associated with the use of the SDK, including reliance on any data generated, remain solely with the Client App and its Users.</p>

                  <h2 id="amendments" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>18. Amendments and Version Control</h2>

                  <p className="mb-4 text-justify">The Company reserves the right to amend, modify, or update this Privacy Policy at any time to reflect changes in applicable law, technology, business practices, or processing operations. The effective date of the current version will be clearly indicated by the "Last Updated on 2nd January 2026" line on the Company&apos;s official website. All updates to this Privacy Policy will be published on the Company&apos;s website, and it is the responsibility of the Client App and Users to review the Policy periodically. Continued use, integration, or enabling of the SDK following the publication of an updated Privacy Policy constitutes deemed acceptance of the changes, and the amended version shall take effect immediately from the date of publication. Users and Client Apps remain bound by the updated Policy from the effective date. Where required under applicable law, fresh consent from Users must be obtained by the Client App in accordance with Sections 8 and 9 of this Policy. The Company shall not be liable for any failure by the Client App or Users to review updated versions of this Privacy Policy.</p>

                  <h2 id="governing-law" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>19. Governing Law and Jurisdiction</h2>

                  <p className="mb-4 text-justify">This Privacy Policy shall be governed by and construed exclusively in accordance with the laws of India. The courts and tribunals at Hyderabad, Telangana, India shall have sole and exclusive jurisdiction in respect of any dispute, claim, action, or proceeding arising out of or relating to this Policy, the SDK, or any processing of data carried out by the Company.</p>

                  <h2 id="acknowledgement" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>20. Acknowledgement and Consent</h2>

                  <p className="mb-4 text-justify">By integrating, installing, enabling, or using the SDK, the Client App and Users expressly acknowledge that they have read, understood, and agreed to the terms of this Privacy Policy. They confirm that they provide free, informed, specific, and unambiguous consent to the processing activities described herein and acknowledge their rights and obligations under the DPDP Act and applicable laws. The Client App further acknowledges that it acts as the Data Fiduciary and that the Company shall not be liable for any misuse, breach, or non-compliance arising from acts or omissions of the Client App.</p>

                  <h2 id="contact" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>21. Grievance Officer and Contact Information</h2>

                  <p className="mb-4 text-justify">For any queries, concerns, complaints, or to exercise rights in relation to SDK-related data, Data Principals and Client Apps may contact the Company&apos;s designated Grievance Officer ________________</p>

                  <p className="mb-4 text-justify">Complaints will be acknowledged and addressed within the timelines prescribed under applicable law or, where no specific period is mandated, within 30 working days of receipt and verification of the request.</p>

                  <p className="mb-4 text-justify">For any other support or assistance, you may contact:</p>

                  <p className="mb-4 text-justify">Cognera Data Labs Private Limited</p>
                  <p className="mb-4 text-justify">Registered office at Kutbullapur,Hyderabad</p>
                  <p className="mb-4 text-justify">Hyderabad, Telangna.</p>
                  <p className="mb-4 text-justify">Email: privacy@ cognera.ai</p>
                </div>
              </div>
            </div>

            {/* Desktop: Scrollable content */}
            <div className="hidden md:block px-0 py-4">
              <div className="rounded-lg px-2 py-8 max-w-6xl mx-auto" style={{ backgroundColor: 'transparent', border: '2px solid #7440FA' }}>
                <div className="prose prose-lg max-w-none text-white/90">
                  <p className="mb-4 text-justify">This Privacy Policy (&quot;Policy&quot;) is published by COGNERA DATA LABS PRIVATE LIMITED, a company incorporated under the Companies Act, 2013, bearing CIN U62091TS2025PTC206136, and having its registered office at Kutbullapur,Hyderabad (&quot;Company&quot;). This Policy governs the manner in which our Company collects, receives, processes, stores, transmits, protects, uses, discloses, and retains data through its software development kits, applications, AI/ML products, cloud platforms, websites, and related technology solutions, including but not limited to our software development kit (&quot;SDK&quot; or &quot;Services&quot;).</p>

                  <p className="mb-4 text-justify">The Client App or Data Fiduciary (&quot;Client App&quot;) using the SDK is solely responsible for obtaining all necessary consents from Users or device owners (&quot;Users&quot;) in accordance with applicable laws, including the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;). By integrating, installing, or using the SDK, the Client App confirms that it has obtained valid, informed, specific, and lawful consent from Users for any personal or digital personal data processed via the Services. The Company acts strictly as a Data Processor and does not collect, verify, or manage User consent on behalf of the Client App. The Company shall not be responsible or liable for any failure or deficiency arising from the Client App&apos;s collection, management, or verification of User consent, including consent required from minors or individuals requiring parental or guardian authorization.</p>

                  <p className="mb-4 text-justify">This Policy forms an integral part of the Terms of Service governing the SDK, and by accessing or using the SDK, both the Client App and the Users expressly confirm that they have read, understood, and voluntarily agreed to the terms contained herein. This Policy describes the manner in which the company process personal data and digital personal data in accordance with the DPDP Act, together with the Information Technology Act, 2000 (&quot;IT Act&quot;) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&quot;SPDI Rules&quot;), as amended from time to time, to the extent applicable. The Client App is fully responsible for ensuring lawful processing of data, fulfilling User rights, communicating necessary notices, maintaining accuracy of data, and complying with all retention, deletion, and other obligations mandated under applicable law. The Company provides the Services strictly in accordance with the Terms of Service and this Privacy Policy.</p>

                  <p className="mb-4 text-justify">This Policy also describes the categories of information processed and the purposes for which data is used, stored, and disclosed in connection with the Services. By using the SDK or Services, the Client App confirms acceptance of this Policy and its obligations.</p>

                  <h2 id="roles-definitions" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-8" style={{ scrollMarginTop: '20px' }}>1. Roles and Definitions</h2>

                  <p className="mb-4 text-justify">For the purposes of this Policy:</p>

                  <p className="mb-2 ml-6 text-justify">1.1. "Data Principal / User" means an individual to whom personal data relates, including children or persons with disabilities acting through their lawful guardian, as defined under the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;).</p>

                  <p className="mb-2 ml-6 text-justify">1.2. "Data Fiduciary / Client App" means any person or entity who alone or jointly determines the purposes and means of processing personal data, as understood under the DPDP Act.</p>

                  <p className="mb-2 ml-6 text-justify">1.3. "Data Processor / Company" means the Company, which processes personal data on behalf of a Data Fiduciary.</p>

                  <p className="mb-2 ml-6 text-justify">1.4. "Personal Data / Digital Personal Data" means any information relating to an individual who is identifiable, directly or indirectly, by or in connection with such data.</p>

                  <p className="mb-2 ml-6 text-justify">1.5. "Processing" includes, wholly or partly, any operation or set of operations performed on personal data, including collection, recording, organization, storage, adaptation, retrieval, use, alignment, combination, indexing, sharing, transmission, restriction, erasure, or destruction.</p>

                  <p className="mb-2 ml-6 text-justify">1.6. "SDK" refers to the Company&apos;s Software Development Kit installed by the Client App to enable or support its services.</p>

                  <p className="mb-4 text-justify">Unless expressly provided otherwise under a written agreement with the Client App:</p>

                  <p className="mb-2 ml-8 text-justify">i. The Client App acts as the Data Fiduciary in relation to all end-user personal data and is solely responsible for obtaining consent, ensuring lawful processing, and fulfilling all obligations under applicable laws, including the DPDP Act.</p>

                  <p className="mb-2 ml-8 text-justify">ii. The Company acts solely as a Data Processor, performing processing activities strictly on behalf of the Data Fiduciary and in accordance with a Data Processing Agreement (DPA) or SDK license.</p>

                  <p className="mb-4 text-justify">In exceptional cases where the Company independently determines the purposes and means of processing such as providing direct dashboards or services to end users under a separate contractual arrangement the Company may act as a Data Fiduciary and shall comply with obligations applicable to a Data Fiduciary under the DPDP Act.</p>

                  <h2 id="applicability" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>2. Applicability & Contractual Relationship</h2>

                  <p className="mb-2 ml-6 text-justify">2.1. This Policy applies to all Client Apps and Users accessing or using the Services.</p>

                  <p className="mb-2 ml-6 text-justify">2.2. The Client App, acting as the Data Fiduciary, bears full and exclusive responsibility for:</p>

                  <p className="mb-2 ml-8 text-justify">a) Obtaining valid, informed, and lawful consent from Users;</p>
                  <p className="mb-2 ml-8 text-justify">b) Issuing all required notices to Users;</p>
                  <p className="mb-2 ml-8 text-justify">c) Verifying parental or guardian consent where applicable; and</p>
                  <p className="mb-2 ml-8 text-justify">d) Complying with all other obligations imposed on a Data Fiduciary under applicable laws, including the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;) and other relevant regulations as amended from time to time.</p>

                  <p className="mb-2 ml-6 text-justify">2.3. The Company acts solely as a Data Processor and processes personal or digital personal data strictly in accordance with documented, lawful, and written instructions provided by the Client App. The Client App, acting as Data Fiduciary, is solely responsible for obtaining consent, issuing required notices, managing data principals' rights, and configuring and enabling SDK permissions, feature flags, consent mechanisms, data collection scope, and usage parameters in accordance with applicable law, platform policies, and its own privacy obligations. The Company shall not be responsible or liable for any acts, omissions, misconfigurations, over-collection, excessive processing, or unlawful enablement of SDK functionality resulting from the Client App&apos;s implementation choices, settings, or technical integration.</p>

                  <p className="mb-2 ml-6 text-justify">2.4. In the event of any conflict or inconsistency between the terms of this Privacy Policy and the terms of any Data Processing Agreement or equivalent written agreement executed between the Company and a Client App, the terms of such Data Processing Agreement shall prevail to the extent of such conflict.</p>

                  <h2 id="purpose-nature" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>3. Purpose and Nature of the Cognera SDK</h2>

                  <p className="mb-2 ml-6 text-justify">3.1. The Company is engaged in the business of designing, developing, customizing, licensing, and supporting software, applications, artificial intelligence, and data analytics platforms, including SaaS, PaaS, and AI/ML-based products, in India.</p>

                  <p className="mb-2 ml-6 text-justify">3.2. The Company&apos;s SDK is a proprietary software component designed to capture device-level usage patterns solely for the legitimate purpose of providing behavioural analytics, screen time metrics, and usage insights to Client Apps and associated enterprise systems. The SDK generates category-level and behavioural insights in a pseudonymised or anonymised manner and provides such insights to Client Apps and enterprise customers strictly for lawful product, productivity, and analytics use cases.</p>

                  <p className="mb-2 ml-6 text-justify">3.3. The SDK operates in a non-invasive manner, measuring only aggregated and anonymised usage data. It expressly avoids the collection or processing of sensitive personal data. To the extent any pseudonymised data is processed for technical or analytical purposes, such data is handled in accordance with applicable law, including the Digital Personal Data Protection Act, 2023.</p>

                  <p className="mb-2 ml-6 text-justify">3.4. The SDK is developed and functions in accordance with privacy-by-design, data minimization, and purpose limitation principles, and operates strictly within the scope disclosed in this Policy.</p>

                  <h2 id="data-collected" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>4. Categories of Data Collected</h2>

                  <p className="mb-2 ml-6 text-justify">4.1. On-Device Event Data (Non-Personal Data): The SDK may collect and process device-level, non-personally identifiable usage events solely to generate aggregated insights. These events do not reveal User identity and are used exclusively to compute aggregated behavioural analytics. Such data includes but not limited to:</p>

                  <p className="mb-2 ml-8 text-justify">a) Application package names;</p>
                  <p className="mb-2 ml-8 text-justify">b) Session start and end times;</p>
                  <p className="mb-2 ml-8 text-justify">c) Screen ON and screen OFF timestamps;</p>
                  <p className="mb-2 ml-8 text-justify">d) Foreground/background application switching events;</p>
                  <p className="mb-2 ml-8 text-justify">e) Device uptime and session durations.</p>

                  <p className="mb-4 text-justify">The SDK records application switching solely as discrete, event-based timestamps reflecting transitions between applications. The SDK does not perform continuous monitoring, real-time observation, background surveillance, or ongoing tracking of User activity beyond such discrete events.</p>

                  <p className="mb-2 ml-6 text-justify">4.2. Derived / Computed Data (Non-Personal Data): Through algorithmic processing, the SDK may generate derived datasets that are pseudonymised, anonymised, and aggregated. All derived datasets uploaded to Company servers are de-identified, anonymised, and aggregated, ensuring that individual Users will not be identified. Examples include:</p>

                  <p className="mb-2 ml-8 text-justify">a) Application category labels (e.g., productivity, social, entertainment);</p>
                  <p className="mb-2 ml-8 text-justify">b) Category-wise screen time data;</p>
                  <p className="mb-2 ml-8 text-justify">c) Total daily or weekly usage sessions;</p>
                  <p className="mb-2 ml-8 text-justify">d) Behavioural patterns and anonymised insights;</p>
                  <p className="mb-2 ml-8 text-justify">e) Device usage trends for analytical purposes.</p>

                  <p className="mb-2 ml-6 text-justify">4.3. Technical and Diagnostic Information (Non-Personal): The SDK may collect technical and diagnostic data to support performance monitoring, troubleshooting, and analytical purposes. The UUID is not linked to any personal identifier and may be reset or removed at any time. This includes:</p>

                  <p className="mb-2 ml-8 text-justify">a) Device manufacturer, model, and technical specifications;</p>
                  <p className="mb-2 ml-8 text-justify">b) Operating system version and SDK version;</p>
                  <p className="mb-2 ml-8 text-justify">c) Randomized, non-identifiable device identifiers (UUID);</p>
                  <p className="mb-2 ml-8 text-justify">d) Performance metrics and error logs (anonymised);</p>
                  <p className="mb-2 ml-8 text-justify">e) Network connectivity type (e.g., Wi-Fi, cellular) for technical optimization.</p>

                  <h2 id="data-processing" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>5. Purpose of Data Processing</h2>

                  <p className="mb-4 text-justify">The Company processes data collected through the SDK exclusively for the following lawful purposes:</p>

                  <p className="mb-2 ml-6 text-justify">5.1. Providing Analytics Services: To generate aggregated, anonymised behavioural analytics, screen time metrics, and usage insights for Client Apps and enterprise customers.</p>

                  <p className="mb-2 ml-6 text-justify">5.2. Product Improvement: To improve the SDK&apos;s functionality, performance, and reliability through technical diagnostics and performance monitoring.</p>

                  <p className="mb-2 ml-6 text-justify">5.3. Compliance and Legal Obligations: To comply with applicable laws, regulations, legal processes, or governmental requests.</p>

                  <p className="mb-2 ml-6 text-justify">5.4. Security and Fraud Prevention: To detect, prevent, and address technical issues, security threats, fraud, or abuse.</p>

                  <p className="mb-2 ml-6 text-justify">5.5. Business Operations: To manage SDK operations, support services, and maintain business continuity, subject to applicable data protection requirements.</p>

                  <h2 id="legal-basis" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>6. Legal Basis for Processing</h2>

                  <p className="mb-2 ml-6 text-justify">6.1. The Company processes data under the legal basis of legitimate interests, contractual necessity, and compliance with legal obligations, as applicable under the DPDP Act and other relevant Indian laws.</p>

                  <p className="mb-2 ml-6 text-justify">6.2. The Client App, acting as Data Fiduciary, is responsible for establishing and maintaining a valid legal basis for processing User data, including obtaining necessary consent where required under applicable law.</p>

                  <h2 id="data-retention" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>7. Data Retention</h2>

                  <p className="mb-2 ml-6 text-justify">7.1. The Company retains SDK-related data only for as long as necessary to fulfill the purposes outlined in this Policy, comply with legal obligations, resolve disputes, and enforce agreements.</p>

                  <p className="mb-2 ml-6 text-justify">7.2. Aggregated and anonymised data may be retained for longer periods for analytical, research, or business purposes, provided such data cannot be used to identify individual Users.</p>

                  <p className="mb-2 ml-6 text-justify">7.3. Upon termination of the SDK integration or upon request by the Client App (subject to legal and contractual requirements), the Company will delete or return SDK-related data in accordance with applicable law and the terms of any Data Processing Agreement.</p>

                  <h2 id="user-rights" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>8. User Rights</h2>

                  <p className="mb-4 text-justify">Under the DPDP Act and applicable laws, Data Principals (Users) have the following rights, which must be exercised through the Client App acting as Data Fiduciary:</p>

                  <p className="mb-2 ml-6 text-justify">8.1. Right to Access: Users may request access to their personal data processed through the SDK.</p>

                  <p className="mb-2 ml-6 text-justify">8.2. Right to Correction: Users may request correction of inaccurate or incomplete data.</p>

                  <p className="mb-2 ml-6 text-justify">8.3. Right to Erasure: Users may request deletion of their personal data, subject to legal and contractual obligations.</p>

                  <p className="mb-2 ml-6 text-justify">8.4. Right to Grievance Redressal: Users may lodge complaints or grievances regarding data processing activities.</p>

                  <p className="mb-2 ml-6 text-justify">8.5. Right to Nominate: Users may nominate another individual to exercise their rights in the event of death or incapacity.</p>

                  <p className="mb-4 text-justify">All requests to exercise these rights must be directed to the Client App, which is responsible for processing such requests and coordinating with the Company where necessary. The Company will assist the Client App in fulfilling User rights requests to the extent required under applicable law and any Data Processing Agreement.</p>

                  <h2 id="consent-management" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>9. Consent Management</h2>

                  <p className="mb-2 ml-6 text-justify">9.1. The Client App, acting as Data Fiduciary, is solely responsible for obtaining valid, informed, specific, and unambiguous consent from Users before enabling SDK processing activities.</p>

                  <p className="mb-2 ml-6 text-justify">9.2. Consent must be obtained in accordance with the DPDP Act and other applicable laws, including special requirements for children and persons with disabilities.</p>

                  <p className="mb-2 ml-6 text-justify">9.3. The Company does not collect, verify, or manage User consent and acts strictly as a Data Processor based on the Client App&apos;s instructions and representations regarding consent.</p>

                  <p className="mb-2 ml-6 text-justify">9.4. Users may withdraw consent at any time through the Client App, and the Client App is responsible for ensuring that withdrawal of consent is respected and communicated to the Company.</p>

                  <h2 id="data-sharing" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>10. Data Sharing and Disclosure</h2>

                  <p className="mb-2 ml-6 text-justify">10.1. The Company does not sell, rent, or trade SDK-related data to third parties for marketing or commercial purposes.</p>

                  <p className="mb-2 ml-6 text-justify">10.2. Data may be shared with:</p>

                  <p className="mb-2 ml-8 text-justify">a) Client Apps and enterprise customers for whom the analytics services are provided;</p>
                  <p className="mb-2 ml-8 text-justify">b) Sub-processors and service providers who assist in SDK operations, subject to contractual safeguards;</p>
                  <p className="mb-2 ml-8 text-justify">c) Legal and regulatory authorities when required by law or to protect rights and safety;</p>
                  <p className="mb-2 ml-8 text-justify">d) Business partners or affiliates in connection with mergers, acquisitions, or business transfers, subject to applicable data protection requirements.</p>

                  <p className="mb-2 ml-6 text-justify">10.3. All data sharing is conducted in accordance with applicable law, this Policy, and any Data Processing Agreement.</p>

                  <h2 id="data-security" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>11. Data Security</h2>

                  <p className="mb-2 ml-6 text-justify">11.1. The Company implements technical and organizational measures to protect SDK-related data against unauthorized access, alteration, disclosure, or destruction.</p>

                  <p className="mb-2 ml-6 text-justify">11.2. Security measures include encryption, access controls, regular security assessments, and compliance with industry standards.</p>

                  <p className="mb-2 ml-6 text-justify">11.3. While the Company strives to maintain robust security practices, no system can guarantee absolute security, and the Company shall not be liable for security breaches arising from factors beyond its reasonable control.</p>

                  <h2 id="international-transfers" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>12. International Data Transfers</h2>

                  <p className="mb-2 ml-6 text-justify">12.1. SDK-related data may be stored or processed on servers located in India or in jurisdictions that lawfully permit data transfers from India.</p>

                  <p className="mb-2 ml-6 text-justify">12.2. Any cross-border transfer is carried out in compliance with applicable Indian laws and with appropriate safeguards to ensure data protection.</p>

                  <h2 id="children-privacy" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>13. Children's Privacy</h2>

                  <p className="mb-2 ml-6 text-justify">13.1. Where the SDK is used in relation to children, the Client App is solely responsible for obtaining verifiable parental or guardian consent as required under applicable law.</p>

                  <p className="mb-2 ml-6 text-justify">13.2. The SDK will not be used for any form of tracking, profiling, or processing prohibited for children under the DPDP Act.</p>

                  <h2 id="security-measures" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>14. Security Measures</h2>

                  <p className="mb-2 ml-6 text-justify">14.1. Encryption: The Company employs industry-standard encryption protocols for data in transit and at rest to protect SDK-related data from unauthorized access, interception, or disclosure.</p>

                  <p className="mb-2 ml-6 text-justify">14.2. Logging and Monitoring: The Company maintains continuous system logs and monitoring tools for operational, diagnostic, and security purposes. Logs are retained for a minimum period of one (1) year, or such other period as may be required under applicable law.</p>

                  <p className="mb-2 ml-6 text-justify">14.3. Backup and Business Continuity: Encrypted backups, redundancy mechanisms, and disaster recovery infrastructure are maintained to ensure availability and continuity of operations in case of system failures, outages, or emergencies.</p>

                  <p className="mb-2 ml-6 text-justify">14.4. Contractual Safeguards with Sub-Processors: All sub-processors and service providers engaged by the Company are contractually required to implement security measures equivalent to or exceeding the standards adopted by the Company and to process data only for authorised purposes.</p>

                  <p className="mb-2 ml-6 text-justify">14.5. Security Disclaimer: While the Company implements industry-standard safeguards and endeavours to maintain robust security practices, no system can guarantee absolute security. The Company, however, commits to maintaining security at or above the levels required under the DPDP Act, IT Act, and other applicable Indian regulations.</p>

                  <p className="mb-2 ml-6 text-justify">14.6. Data Breach and Security Incident Notification: In the event of a confirmed security incident or data breach affecting SDK-related data, the Company will notify the Client App in a timely manner. The Company shall not be responsible for notifying Data Principals directly except where required by applicable law. The Client App remains responsible for any legal or regulatory notifications to Users and for compliance with applicable breach notification requirements.</p>

                  <h2 id="cross-border" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>15. Cross-Border Data Transfer</h2>

                  <p className="mb-4 text-justify">SDK-related data may be stored or processed on servers located in India or in jurisdictions that lawfully permit data transfers from India and provide comparable levels of data protection. Any cross-border transfer, where applicable, is carried out in compliance with the applicable laws of India and relevant rules or governmental directions. The Company ensures that all overseas processors and sub-processors operate under contractual, technical, and organisational safeguards that meet or exceed Indian data protection requirements. Details of specific hosting regions may be disclosed in SDK documentation or provided upon request, subject to security considerations.</p>

                  <h2 id="special-provisions" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>16. Special Provisions for Children and Persons with Disabilities</h2>

                  <p className="mb-4 text-justify">Where the SDK is used in relation to children or persons with disabilities requiring lawful guardian consent, the Client App, acting as Data Fiduciary, is solely responsible for obtaining and validating verifiable parental or guardian consent as required under applicable law, and for providing all necessary notices before enabling SDK processing. The SDK will not be used for any form of tracking, profiling, or processing prohibited for children under the DPDP Act, including targeted advertising or behaviourally harmful analytics. The Company acts strictly as a Data Processor in such scenarios and shall not be liable for any failure by the Client App to obtain valid consent, conduct appropriate verification, or comply with statutory obligations related to such Data Principals.</p>

                  <h2 id="limitation-liability" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>17. Limitation of Liability & Company Protection</h2>

                  <p className="mb-2 ml-6 text-justify">17.1. No Liability for Failures of the Client App (Data Fiduciary): The Company operates solely as a Data Processor and shall not, under any circumstances, be liable for any act, omission, or failure attributable to the Client App in its capacity as Data Fiduciary. This includes the Client App&apos;s failure to obtain valid, verified or lawful consent; failure to provide an adequate notice; any wrongful, excessive or unauthorised processing of data; any mishandling, misconfiguration, misuse or unauthorised disclosure of SDK-related data; and any regulatory, civil or criminal consequences arising from its own non-compliance. All compliance obligations regarding lawful processing, consent, notices, and user rights rest solely with the Client App.</p>

                  <p className="mb-2 ml-6 text-justify">17.2. No Liability for Third-Party Systems or External Failures: The Company shall not be responsible for failures or breaches arising from third-party cloud providers, hosting partners, or external service providers; nor shall it be liable for security incidents caused by zero-day vulnerabilities, cyberattacks, force majeure events or any compromise occurring on user devices or within the Client App&apos;s infrastructure. Any loss, damage or breach caused by incorrect implementation, insecure integration, or configuration errors attributable to the Client App also falls outside the Company&apos;s responsibility.</p>

                  <p className="mb-2 ml-6 text-justify">17.3. Limitation of Liability of the Company: To the extent permitted under applicable law, and only where a breach is directly and solely caused by the Company&apos;s wilful misconduct or gross negligence, the Company&apos;s total aggregate liability shall be limited to the fees actually paid by the Client App for the Services during the twelve (12) months preceding the event giving rise to the claim, or the actual proven direct loss, whichever is lower. Under no circumstances shall the Company be liable for any indirect, incidental, consequential, punitive, exemplary or special damages, including loss of profits, loss of data, loss of business, or reputational harm, whether or not such damages were foreseeable.</p>

                  <p className="mb-2 ml-6 text-justify">17.4. Indemnification by the Client App: The Client App agrees to indemnify, defend and hold harmless the Company, its officers and affiliates from any claims, penalties, damages, losses, liabilities or legal expenses arising from the Client App&apos;s breach of applicable data protection laws; failure to obtain valid consent (including parental or guardian consent); failure to comply with notice and transparency obligations; misuse or wrongful processing of SDK-related data; or any negligent or unlawful act committed by the Client App or its personnel. This indemnity survives termination of the SDK integration and any associated agreements.</p>

                  <p className="mb-2 ml-6 text-justify">17.5. Disclaimer: The Company provides the SDK and associated services on an "as-is" and "as-available" basis and makes no representations or warranties, express or implied, regarding the completeness, accuracy, reliability, or fitness for a particular purpose of the SDK or the data processed through it. While the Company implements reasonable technical and organisational safeguards in accordance with applicable law, it does not guarantee that the SDK will operate uninterrupted, error-free, or free from security vulnerabilities. The Company shall not be liable for any indirect, incidental, consequential, punitive, or special damages, including but not limited to loss of profits, loss of business, loss of data, or reputational harm arising from the use of the SDK, integration with the Client App, or reliance on any insights, reports, or analytics provided. Users and Client Apps acknowledge and agree that all risks associated with the use of the SDK, including reliance on any data generated, remain solely with the Client App and its Users.</p>

                  <h2 id="amendments" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>18. Amendments and Version Control</h2>

                  <p className="mb-4 text-justify">The Company reserves the right to amend, modify, or update this Privacy Policy at any time to reflect changes in applicable law, technology, business practices, or processing operations. The effective date of the current version will be clearly indicated by the "Last Updated on 2nd January 2026" line on the Company&apos;s official website. All updates to this Privacy Policy will be published on the Company&apos;s website, and it is the responsibility of the Client App and Users to review the Policy periodically. Continued use, integration, or enabling of the SDK following the publication of an updated Privacy Policy constitutes deemed acceptance of the changes, and the amended version shall take effect immediately from the date of publication. Users and Client Apps remain bound by the updated Policy from the effective date. Where required under applicable law, fresh consent from Users must be obtained by the Client App in accordance with Sections 8 and 9 of this Policy. The Company shall not be liable for any failure by the Client App or Users to review updated versions of this Privacy Policy.</p>

                  <h2 id="governing-law" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>19. Governing Law and Jurisdiction</h2>

                  <p className="mb-4 text-justify">This Privacy Policy shall be governed by and construed exclusively in accordance with the laws of India. The courts and tribunals at Hyderabad, Telangana, India shall have sole and exclusive jurisdiction in respect of any dispute, claim, action, or proceeding arising out of or relating to this Policy, the SDK, or any processing of data carried out by the Company.</p>

                  <h2 id="acknowledgement" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>20. Acknowledgement and Consent</h2>

                  <p className="mb-4 text-justify">By integrating, installing, enabling, or using the SDK, the Client App and Users expressly acknowledge that they have read, understood, and agreed to the terms of this Privacy Policy. They confirm that they provide free, informed, specific, and unambiguous consent to the processing activities described herein and acknowledge their rights and obligations under the DPDP Act and applicable laws. The Client App further acknowledges that it acts as the Data Fiduciary and that the Company shall not be liable for any misuse, breach, or non-compliance arising from acts or omissions of the Client App.</p>

                  <h2 id="contact" className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-32" style={{ scrollMarginTop: '20px' }}>21. Grievance Officer and Contact Information</h2>

                  <p className="mb-4 text-justify">For any queries, concerns, complaints, or to exercise rights in relation to SDK-related data, Data Principals and Client Apps may contact the Company&apos;s designated Grievance Officer ________________</p>

                  <p className="mb-4 text-justify">Complaints will be acknowledged and addressed within the timelines prescribed under applicable law or, where no specific period is mandated, within 30 working days of receipt and verification of the request.</p>

                  <p className="mb-4 text-justify">For any other support or assistance, you may contact:</p>

                  <p className="mb-4 text-justify">Cognera Data Labs Private Limited</p>
                  <p className="mb-4 text-justify">Registered office at Kutbullapur,Hyderabad</p>
                  <p className="mb-4 text-justify">Hyderabad, Telangna.</p>
                  <p className="mb-4 text-justify">Email: privacy@ cognera.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
