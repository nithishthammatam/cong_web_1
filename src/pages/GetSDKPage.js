'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function GetSDKPage() {
  const [activePlatform, setActivePlatform] = useState('android')
  const [copied, setCopied] = useState(false)
  const [expandedChecksum, setExpandedChecksum] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const apiKey = 'ck_a1b2c3d4e5f6g7h8i9j0'
  const maskedApiKey = 'ck_a1b2c3•••••••••'

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const platforms = [
    { id: 'android', name: 'Android', icon: '📱', status: 'available', badge: { text: 'Available', color: 'green' } },
    { id: 'ios', name: 'iOS', icon: '🍎', status: 'coming-soon', badge: { text: 'Q2 2026', color: 'gray' }, disabled: true },
    { id: 'react-native', name: 'React Native', icon: '⚛️', status: 'coming-soon', badge: { text: 'Planned', color: 'gray' }, disabled: true },
    { id: 'flutter', name: 'Flutter', icon: '💙', status: 'coming-soon', badge: { text: 'Planned', color: 'gray' }, disabled: true },
  ]

  const sdkInfo = {
    version: '1.0.0',
    fileSize: '85 KB',
    fileName: 'cognera-sdk-1.0.0.aar',
    minAndroidVersion: '5.0 (API 21)',
    lastUpdated: 'Feb 14, 2026',
    sha256: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6',
  }

  const downloadOptions = [
    {
      id: 'manual',
      title: 'Manual Installation',
      subtitle: 'Recommended for beginners',
      icon: '⬇️',
      recommended: true,
      features: ['No extra dependencies', 'Full control over versioning', 'Works offline'],
      buttonText: 'Download cognera-sdk.aar',
    },
    {
      id: 'gradle',
      title: 'Gradle Dependency',
      subtitle: 'Automatic dependency management',
      icon: '📦',
      comingSoon: true,
      badge: 'Coming Soon',
      codeSnippet: "implementation 'com.cognera:sdk:1.0.0'",
    },
  ]

  const requirements = [
    { label: 'Android Version', value: '5.0 (Lollipop) or higher' },
    { label: 'Permissions', value: 'Internet access required' },
    { label: 'Size', value: '85 KB (minimal footprint)' },
    { label: 'Dependencies', value: 'None' },
  ]

  const docLinks = [
    { icon: '📖', text: 'Installation Guide', url: '/docs/installation' },
    { icon: '🔧', text: 'API Reference', url: '/docs/api' },
    { icon: '💬', text: 'Community Support', url: '/community' },
    { icon: '⚡', text: 'Quick Start Tutorial', url: '/tutorials/getting-started' },
  ]

  const faqItems = [
    {
      question: 'What permissions does the SDK need?',
      answer: 'Only INTERNET permission to send analytics data to our servers. No location, camera, or storage permissions required.',
    },
    {
      question: 'Will this slow down my app?',
      answer: 'No. The SDK is only 85KB and runs on a background thread. Performance impact is less than 1ms per event.',
    },
    {
      question: 'Can I use this in production?',
      answer: 'Yes! The SDK is production-ready and used by 800+ apps.',
    },
    {
      question: 'How do I update the SDK?',
      answer: 'Download the latest AAR and replace it in your libs folder. We\'ll notify you of updates via email.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto py-8 sm:py-12">
      {/* HEADER */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-semibold text-purple-primary mb-1">Step 01 of 04 • Get SDK</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-dark">Get SDK</h1>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-purple-primary h-2.5 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>

      {/* PREREQUISITES SECTION */}
      <div className="mb-8">
        <div className="bg-purple-primary/10 border border-purple-primary/20 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-5 h-5 rounded-full bg-purple-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-navy-dark mb-3">Before you begin</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-text-secondary">Create a free Cognera account</span>
                  <Link href="/signup" className="text-sm font-semibold text-purple-primary hover:underline ml-1">Sign Up</Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-text-secondary">Create a new app in your dashboard</span>
                  <Link href="/dashboard/apps/new" className="text-sm font-semibold text-purple-primary hover:underline ml-1">Create App</Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-text-secondary">Copy your API key from the dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* API KEY CARD */}
        <div className="bg-white border-2 border-purple-primary/30 rounded-xl p-5 shadow-sm">
          <label className="block text-sm font-semibold text-navy-dark mb-2">Your API Key</label>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              readOnly
              value={maskedApiKey}
              className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-navy-dark"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-purple-primary text-white rounded-lg font-semibold text-sm hover:bg-purple-dark transition-colors flex items-center gap-2"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-warning flex items-center gap-1">
            <span>⚠️</span>
            Keep this secret! Don't commit to version control.
          </p>
        </div>
      </div>

      {/* PLATFORM SELECTOR */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => !platform.disabled && setActivePlatform(platform.id)}
              disabled={platform.disabled}
              className={`px-4 py-2 rounded-t-lg font-semibold text-sm transition-colors relative ${
                activePlatform === platform.id
                  ? 'bg-white border-t border-l border-r border-gray-200 text-purple-primary'
                  : platform.disabled
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-text-secondary hover:text-purple-primary'
              }`}
            >
              <span className="mr-2">{platform.icon}</span>
              {platform.name}
              <span
                className={`ml-2 px-2 py-0.5 rounded text-[10px] font-bold ${
                  platform.badge.color === 'green'
                    ? 'bg-success/20 text-success'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {platform.badge.text}
              </span>
            </button>
          ))}
        </div>

        {/* SDK INFO CARD */}
        {activePlatform === 'android' && (
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">SDK Version</p>
                <p className="text-sm font-bold text-navy-dark">v{sdkInfo.version}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">File Size</p>
                <p className="text-sm font-bold text-navy-dark">{sdkInfo.fileSize}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Min Android</p>
                <p className="text-sm font-bold text-navy-dark">{sdkInfo.minAndroidVersion}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Last Updated</p>
                <p className="text-sm font-bold text-navy-dark">{sdkInfo.lastUpdated}</p>
              </div>
            </div>
            <Link href="/changelog" className="text-sm text-purple-primary hover:underline font-semibold">
              View Changelog →
            </Link>
          </div>
        )}

        {/* DOWNLOAD OPTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {downloadOptions.map((option) => (
            <div
              key={option.id}
              className={`bg-white border rounded-xl p-6 ${
                option.comingSoon ? 'border-gray-200 opacity-60' : 'border-purple-primary/30'
              }`}
            >
              {option.recommended && (
                <span className="inline-block px-2 py-1 bg-success/20 text-success text-xs font-bold rounded mb-3">
                  Recommended
                </span>
              )}
              {option.comingSoon && (
                <span className="inline-block px-2 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded mb-3">
                  {option.badge}
                </span>
              )}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{option.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-navy-dark">{option.title}</h3>
                  <p className="text-sm text-text-secondary">{option.subtitle}</p>
                </div>
              </div>
              {option.features && (
                <ul className="space-y-2 mb-4">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-purple-primary mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              {option.id === 'manual' ? (
                <>
                  <button
                    className="w-full px-4 py-3 bg-purple-primary text-white rounded-lg font-semibold hover:bg-purple-dark transition-colors mb-3"
                    onClick={() => window.open('/api/sdk/download/android/1.0.0', '_blank')}
                  >
                    {option.buttonText}
                  </button>
                  <button
                    onClick={() => setExpandedChecksum(!expandedChecksum)}
                    className="text-xs text-purple-primary hover:underline w-full text-left"
                  >
                    {expandedChecksum ? 'Hide' : 'Show'} verification checksum
                  </button>
                  {expandedChecksum && (
                    <div className="mt-2 p-3 bg-gray-50 rounded border border-gray-200">
                      <p className="text-xs font-mono text-navy-dark break-all">
                        SHA-256: {sdkInfo.sha256}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Preview:</p>
                  <code className="text-sm font-mono text-navy-dark block">{option.codeSnippet}</code>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* REQUIREMENTS SECTION */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-navy-dark mb-4">System Requirements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {requirements.map((req, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">{req.label}</p>
              <p className="text-sm font-semibold text-navy-dark">{req.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DOCUMENTATION LINKS */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-navy-dark mb-4">Documentation</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {docLinks.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-purple-primary/50 hover:shadow-sm transition-all text-center"
            >
              <span className="text-2xl block mb-2">{link.icon}</span>
              <p className="text-sm font-semibold text-navy-dark">{link.text}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pt-6 border-t border-gray-200">
        <Link
          href="/dashboard"
          className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-navy-dark hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <Link
          href="/get-sdk/integration"
          className="px-8 py-3 bg-purple-primary text-white rounded-lg font-bold hover:bg-purple-dark transition-colors flex items-center gap-2"
        >
          Next: Integration Steps
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* HELP SECTION */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-navy-dark mb-4">Need help?</h2>
        <div className="space-y-2 mb-4">
          {faqItems.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-navy-dark text-sm">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${expandedFAQ === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedFAQ === i && (
                <div className="px-4 pb-3 text-sm text-text-secondary">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <Link href="/contact" className="text-purple-primary font-semibold hover:underline text-sm">
          Contact Support →
        </Link>
      </div>
    </div>
  )
}
