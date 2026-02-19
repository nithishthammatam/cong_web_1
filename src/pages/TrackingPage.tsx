'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TrackingPage() {
  const [expandedCustomEvents, setExpandedCustomEvents] = useState(false)
  const [dashboardSlide, setDashboardSlide] = useState(0)
  const [copiedItems, setCopiedItems] = useState({})

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text)
    setCopiedItems({ ...copiedItems, [key]: true })
    setTimeout(() => {
      setCopiedItems({ ...copiedItems, [key]: false })
    }, 2000)
  }

  const trackingCategories = [
    {
      id: 'session-analytics',
      icon: '📊',
      title: 'Session Analytics',
      description: 'Comprehensive session-level metrics',
      metrics: [
        'Session duration',
        'Session frequency',
        'App open/close events',
        'Time spent in app',
        'Session intervals',
      ],
      visualization: 'timeline',
    },
    {
      id: 'attention-flow',
      icon: '🎯',
      title: 'Attention & Flow State',
      description: 'AI-powered engagement quality detection',
      badge: 'AI Powered',
      metrics: [
        'Flow state detection',
        'Deep focus duration',
        'Attention quality score',
        'Focus windows',
        'Engagement intensity',
      ],
      visualization: 'flow-meter',
    },
    {
      id: 'behavior-patterns',
      icon: '🔄',
      title: 'Behavioral Patterns',
      description: 'Understanding context switching and distraction',
      metrics: [
        'App switching events',
        'Context switch rate',
        'Distraction triggers',
        'Return patterns',
        'Usage rhythms',
      ],
      visualization: 'flow-diagram',
      insight: 'Users switch to Instagram 3x per session on average',
    },
    {
      id: 'user-segmentation',
      icon: '👥',
      title: 'Automatic User Segments',
      description: 'AI-powered cohort generation',
      badge: 'Auto-Generated',
      segments: [
        { name: 'Deep Focus Users', percentage: 35, color: '#10b981' },
        { name: 'Moderate Users', percentage: 42, color: '#3b82f6' },
        { name: 'Distracted Users', percentage: 23, color: '#ef4444' },
      ],
      insight: '35% of users are deep focusers',
    },
  ]

  const dashboardSlides = [
    {
      title: 'Flow State Timeline',
      description: 'Visualize user engagement over time',
    },
    {
      title: 'Behavior Cohorts',
      description: 'Understand your user segments',
    },
    {
      title: 'Insights Panel',
      description: 'Get actionable recommendations',
    },
  ]

  const customEventExamples = [
    {
      title: 'Simple Event',
      java: `// Track a button click
Cognera.track("button_clicked");

// Track a feature usage
Cognera.track("premium_feature_used");`,
      kotlin: `// Track a button click
Cognera.track("button_clicked")

// Track a feature usage
Cognera.track("premium_feature_used")`,
    },
    {
      title: 'Event with Properties',
      java: `Map<String, Object> properties = new HashMap<>();
properties.put("button_name", "checkout");
properties.put("screen", "cart");
properties.put("items_count", 3);

Cognera.track("button_clicked", properties);`,
      kotlin: `Cognera.track("button_clicked", mapOf(
    "button_name" to "checkout",
    "screen" to "cart",
    "items_count" to 3
))`,
    },
    {
      title: 'User Properties',
      java: `// Set user properties
Cognera.setUserProperty("subscription", "premium");
Cognera.setUserProperty("account_age_days", 30);
Cognera.setUserProperty("favorite_category", "fitness");`,
      kotlin: `// Set user properties
Cognera.setUserProperty("subscription", "premium")
Cognera.setUserProperty("account_age_days", 30)
Cognera.setUserProperty("favorite_category", "fitness")`,
    },
  ]

  const faqItems = [
    {
      question: 'How much data does the SDK collect?',
      answer:
        'The SDK collects only behavioral signals like session duration, app switches, and flow states. We don\'t collect any personal information, screen contents, or user input. Typical data usage is less than 10 KB per session.',
    },
    {
      question: 'Can I disable certain tracking features?',
      answer:
        'Yes! You can configure which features to track when initializing the SDK. For example, you can disable app switching detection or custom event tracking while keeping session analytics. Check our configuration docs for details.',
    },
    {
      question: 'How long is data retained?',
      answer:
        'Free tier: 30 days. Growth plan: Unlimited retention. Enterprise: Custom retention policies. You can export your data anytime and request deletion at any time.',
    },
    {
      question: 'Is tracking GDPR and CCPA compliant?',
      answer:
        'Yes! We\'re fully GDPR and CCPA compliant. We don\'t collect PII, use anonymous identifiers, support data deletion requests, and provide full transparency. We\'re also SOC 2 Type II certified.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-12">
      {/* HEADER */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-semibold text-purple-primary mb-1">Step 03 of 04 • Analytics Tracking</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-dark">Deep Analytics</h1>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-purple-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-purple-primary/10 to-purple-light/10 rounded-xl p-8 mb-8 text-center">
        <div className="text-4xl mb-3">✨</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-dark mb-2">Automatic Behavior Tracking</h2>
        <p className="text-lg text-text-secondary mb-4">
          No manual event tracking required. We capture user behavior automatically.
        </p>
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-success/20 text-success rounded-full text-sm font-semibold">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
          SDK Active
        </span>
      </div>

      {/* WHAT WE TRACK AUTOMATICALLY */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy-dark mb-6">What We Track Automatically</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trackingCategories.map((category) => (
            <div key={category.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-navy-dark">{category.title}</h3>
                    {category.badge && (
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-bold ${
                          category.badge === 'AI Powered'
                            ? 'bg-purple-primary/20 text-purple-primary'
                            : 'bg-success/20 text-success'
                        }`}
                      >
                        {category.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary">{category.description}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {category.metrics?.map((metric, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="text-success">✓</span>
                    {metric}
                  </li>
                ))}
              </ul>
              {category.segments && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {category.segments.map((seg, i) => (
                      <div key={i} className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600">{seg.name}</span>
                          <span className="text-xs font-bold text-navy-dark">{seg.percentage}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${seg.percentage}%`, backgroundColor: seg.color }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {category.insight && (
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-navy-dark">{category.insight}</p>
                </div>
              )}
              <Link href={`/docs/${category.id}`} className="text-sm text-purple-primary hover:underline font-semibold">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE DEMO SECTION */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy-dark mb-2">See It In Action</h2>
        <p className="text-text-secondary mb-6">Real-time preview of what your dashboard will show</p>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Current Sessions</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Avg Focus Time</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Flow State</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="h-32 flex items-end gap-1">
              {[40, 65, 45, 80, 55, 90, 75, 60, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-purple-primary rounded-t"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="bg-purple-primary/10 rounded-lg p-4 border border-purple-primary/20">
            <p className="text-sm text-navy-dark">
              💡 <strong>Insight:</strong> Users entering from Instagram show 45% higher distraction
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-primary text-white rounded-lg font-semibold hover:bg-purple-dark transition-colors"
            >
              Explore Full Dashboard
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* PRIVACY TRANSPARENCY */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy-dark mb-6">Privacy-First Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-success/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-navy-dark mb-4 flex items-center gap-2">
              <span className="text-success">✓</span> What We Track
            </h3>
            <ul className="space-y-2 mb-4">
              {[
                'Anonymous session IDs',
                'Time-based metrics',
                'App usage patterns',
                'Flow state indicators',
                'Behavioral signals',
                'Aggregate statistics',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="text-success">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-600">All data is anonymized</p>
          </div>
          <div className="bg-white border-2 border-error/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-navy-dark mb-4 flex items-center gap-2">
              <span className="text-error">✗</span> What We DON'T Track
            </h3>
            <ul className="space-y-2 mb-4">
              {[
                'Personal information (PII)',
                'Screen contents or screenshots',
                'User input or text',
                'Location data',
                'Contacts or files',
                'Device identifiers (IMEI, etc.)',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="text-error">✗</span>
                  {item}
                </li>
              ))}
            </ul>
            <span className="inline-block px-3 py-1 bg-success/20 text-success text-xs font-bold rounded">
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>

      {/* CUSTOM EVENT TRACKING */}
      <div className="mb-12">
        <button
          onClick={() => setExpandedCustomEvents(!expandedCustomEvents)}
          className="w-full bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-shadow flex items-center justify-between"
        >
          <div>
            <h3 className="text-lg font-bold text-navy-dark mb-1">Want to track custom events too?</h3>
            <p className="text-sm text-text-secondary">Add custom events for specific actions in your app</p>
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${expandedCustomEvents ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {expandedCustomEvents && (
          <div className="mt-4 bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-navy-dark mb-4">Track Custom Events (Optional)</h3>
            <div className="space-y-6">
              {customEventExamples.map((example, i) => (
                <div key={i}>
                  <h4 className="text-sm font-semibold text-navy-dark mb-3">{example.title}</h4>
                  <div className="flex gap-2 mb-2">
                    <button className="px-3 py-1 bg-gray-100 text-navy-dark rounded text-xs font-semibold">
                      Java
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-navy-dark rounded text-xs font-semibold">
                      Kotlin
                    </button>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">Java</span>
                      <button
                        onClick={() => handleCopy(`custom-${i}`, example.java)}
                        className="text-xs text-gray-400 hover:text-white"
                      >
                        {copiedItems[`custom-${i}`] ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <pre className="text-sm font-mono text-gray-100 overflow-x-auto">
                      <code>{example.java}</code>
                    </pre>
                  </div>
                </div>
              ))}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-navy-dark mb-2">Use cases:</p>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• Track feature usage</li>
                  <li>• Monitor user actions</li>
                  <li>• Segment by behavior</li>
                  <li>• A/B testing</li>
                </ul>
              </div>
              <Link href="/docs/custom-events" className="text-sm text-purple-primary hover:underline font-semibold">
                View API Docs →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* DATA LATENCY INFO */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
        <div className="flex items-start gap-4">
          <span className="text-3xl">⚡</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-navy-dark mb-2">Real-Time Analytics</h3>
            <p className="text-sm text-text-secondary mb-4">
              Data appears in your dashboard within <strong>2-3 seconds</strong>
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
              <span>User Action</span>
              <span>→</span>
              <span>SDK</span>
              <span>→</span>
              <span>Cloud</span>
              <span>→</span>
              <span className="font-semibold text-purple-primary">Live!</span>
            </div>
            <p className="text-xs text-gray-600">No delays, no batch processing</p>
          </div>
        </div>
      </div>

      {/* DASHBOARD PREVIEW CAROUSEL */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy-dark mb-2">Ready to see your data?</h2>
        <p className="text-text-secondary mb-6">Here's what your analytics dashboard will look like</p>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            {dashboardSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setDashboardSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  dashboardSlide === i ? 'bg-purple-primary scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="bg-gray-100 rounded-lg p-8 mb-4 min-h-[200px] flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-bold text-navy-dark mb-2">{dashboardSlides[dashboardSlide].title}</h3>
              <p className="text-sm text-text-secondary">{dashboardSlides[dashboardSlide].description}</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/get-sdk/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-primary text-white rounded-lg font-semibold hover:bg-purple-dark transition-colors"
            >
              Next: View Dashboard
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-navy-dark mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqItems.map((faq, i) => (
            <details key={i} className="bg-white rounded-lg p-4">
              <summary className="font-semibold text-navy-dark cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-sm text-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
        <Link
          href="/get-sdk/integration"
          className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-navy-dark hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous: Integration
        </Link>
        <Link
          href="/get-sdk/dashboard"
          className="px-8 py-3 bg-purple-primary text-white rounded-lg font-bold hover:bg-purple-dark transition-colors flex items-center gap-2"
        >
          Next: View Dashboard
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
