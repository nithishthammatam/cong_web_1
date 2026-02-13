'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      <div
        className={`w-full backdrop-blur-md transition-all duration-300 ${isScrolled
          ? 'bg-white/90 border-b border-gray-200 shadow-sm'
          : 'bg-white/0 border-b border-transparent shadow-none'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-[203] hover:opacity-80 transition-opacity">
            <img
              src="/img/Cognera_log_bg_removed.png"
              alt="Cognera Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-gray-900 tracking-tight flex items-center h-full pt-1">
              Cognera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative h-full flex items-center group"
              >
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-[#6F2DBD] font-medium text-[15px] transition-colors relative flex items-center gap-1"
                >
                  {link.name}
                  {(link.name === 'Products' || link.name === 'Solutions' || link.name === 'Resources') && (
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6F2DBD] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Mega Menu Dropdown */}
                {(link.name === 'Products' || link.name === 'Solutions' || link.name === 'Resources') && (
                  <div className="fixed top-16 left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[200]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      {link.name === 'Products' && (
                        <div className="grid grid-cols-12 gap-8">
                          <div className="col-span-3">
                            <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                              Platform
                            </h4>
                            <div className="space-y-4">
                              <Link href="/products/analytics" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Analytics</div>
                                <div className="text-sm text-gray-500 mt-1">Understand user behavior</div>
                              </Link>
                              <Link href="/products/session-replay" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Session Replay</div>
                                <div className="text-sm text-gray-500 mt-1">Watch real user sessions</div>
                              </Link>
                              <Link href="/products/features" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Feature Flags</div>
                                <div className="text-sm text-gray-500 mt-1">Control feature rollouts</div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-span-3">
                            <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                              Data
                            </h4>
                            <div className="space-y-4">
                              <Link href="/products/cdp" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Customer Data Platform</div>
                                <div className="text-sm text-gray-500 mt-1">Unify customer data</div>
                              </Link>
                              <Link href="/products/warehouse" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Warehouse Native</div>
                                <div className="text-sm text-gray-500 mt-1">Connect to your data warehouse</div>
                              </Link>
                            </div>
                          </div>
                          {/* Optional: Add an image or featured section here for "fixed layout" feel */}
                          <div className="col-span-6 bg-gray-50 rounded-xl p-6">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                              New Features
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">Explore our latest AI-powered analytics capabilities.</p>
                            <Link href="/new-features" className="text-[#6F2DBD] font-medium text-sm hover:underline">Learn more &rarr;</Link>
                          </div>
                        </div>
                      )}

                      {link.name === 'Solutions' && (
                        <div className="grid grid-cols-12 gap-8">
                          {/* Teams Column */}
                          <div className="col-span-3">
                            <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                              Teams
                            </h4>
                            <div className="space-y-4">
                              <Link href="/solutions/product" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Product</div>
                                <div className="text-sm text-gray-500 mt-1">Build better products</div>
                              </Link>
                              <Link href="/solutions/data" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Data</div>
                                <div className="text-sm text-gray-500 mt-1">Democratize data access</div>
                              </Link>
                              <Link href="/solutions/marketing" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Marketing</div>
                                <div className="text-sm text-gray-500 mt-1">Optimize campaigns</div>
                              </Link>
                              <Link href="/solutions/engineering" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Engineering</div>
                                <div className="text-sm text-gray-500 mt-1">Monitor performance</div>
                              </Link>
                            </div>
                          </div>

                          {/* Industries Column */}
                          <div className="col-span-3">
                            <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-3m-4 3v-3m12 0v-3m-4 3v-3" /></svg>
                              Industries
                            </h4>
                            <div className="space-y-4">
                              <Link href="/solutions/fintech" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">FinTech</div>
                                <div className="text-sm text-gray-500 mt-1">Secure analytics</div>
                              </Link>
                              <Link href="/solutions/media-entertainment" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Media & Entertainment</div>
                                <div className="text-sm text-gray-500 mt-1">Engagement insights</div>
                              </Link>
                              <Link href="/solutions/b2b" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">B2B</div>
                                <div className="text-sm text-gray-500 mt-1">Drive conversion</div>
                              </Link>
                              <Link href="/solutions/ecommerce" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">E-commerce</div>
                                <div className="text-sm text-gray-500 mt-1">Boost retention</div>
                              </Link>
                              <Link href="/solutions/healthcare" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Healthcare</div>
                                <div className="text-sm text-gray-500 mt-1">Patient insights</div>
                              </Link>
                              <Link href="/solutions/ai" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">AI</div>
                                <div className="text-sm text-gray-500 mt-1">Model performance</div>
                              </Link>
                            </div>
                          </div>

                          {/* Business Size Column */}
                          <div className="col-span-3">
                            <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                              Business Size
                            </h4>
                            <div className="space-y-4">
                              <Link href="/solutions/enterprise" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Enterprise</div>
                                <div className="text-sm text-gray-500 mt-1">Scale globally</div>
                              </Link>
                              <Link href="/solutions/small-midsize" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Small & Midsize</div>
                                <div className="text-sm text-gray-500 mt-1">Grow faster</div>
                              </Link>
                              <Link href="/solutions/startups" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Startups</div>
                                <div className="text-sm text-gray-500 mt-1">Launch with confidence</div>
                              </Link>
                            </div>
                          </div>

                          {/* Promo Box Column */}
                          <div className="col-span-3 bg-white border border-gray-100 rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group/promo">
                            <div className="relative z-10">
                              <div className="text-[#6F2DBD] text-xs font-bold tracking-wider uppercase mb-3">Transform Data into Business Impact</div>
                              <h3 className="font-bold text-gray-900 text-xl mb-4 leading-tight">
                                Get the framework leading executives use
                              </h3>
                              <Link href="/manifesto" className="text-gray-900 font-medium text-sm hover:text-[#6F2DBD] flex items-center gap-1 group/link">
                                Unlock the Manifesto
                                <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                              </Link>
                            </div>

                            {/* Decorative Background Element */}
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#6F2DBD]/20 to-orange-400/20 rounded-full blur-3xl group-hover/promo:scale-110 transition-transform duration-700"></div>
                            <div className="absolute bottom-8 right-8 z-0 opacity-50">
                              <div className="text-center">
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">The future will be decided in the</div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Messy Middle</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {link.name === 'Resources' && (
                        <div className="grid grid-cols-12 gap-8">
                          <div className="col-span-3">
                            <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                              Using Cognera
                            </h4>
                            <div className="space-y-4">
                              <Link href="/resources/docs" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Docs & Guides</div>
                                <div className="text-sm text-gray-500 mt-1">Documentation & tutorials</div>
                              </Link>
                              <Link href="/resources/support" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Contact Support</div>
                                <div className="text-sm text-gray-500 mt-1">Get help with Cognera</div>
                              </Link>
                              <Link href="/resources/whats-new" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">What&apos;s New</div>
                                <div className="text-sm text-gray-500 mt-1">Latest product updates</div>
                              </Link>
                            </div>
                          </div>

                          <div className="col-span-3">
                            <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                              Community
                            </h4>
                            <div className="space-y-4">
                              <Link href="/resources/blog" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Blog</div>
                                <div className="text-sm text-gray-500 mt-1">Insights & best practices</div>
                              </Link>
                              <Link href="/resources/events" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Events & Webinars</div>
                                <div className="text-sm text-gray-500 mt-1">Connect with experts</div>
                              </Link>
                              <Link href="/resources/community" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Community</div>
                                <div className="text-sm text-gray-500 mt-1">Join the discussion</div>
                              </Link>
                              <Link href="/resources/service" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Customer Service</div>
                                <div className="text-sm text-gray-500 mt-1">Dedicated support</div>
                              </Link>
                            </div>
                          </div>

                          <div className="col-span-3">
                            <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                              Partnerships
                            </h4>
                            <div className="space-y-4">
                              <Link href="/partners/become" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Become a partner</div>
                                <div className="text-sm text-gray-500 mt-1">Grow with Cognera</div>
                              </Link>
                              <Link href="/partners/directory" className="block group/item">
                                <div className="font-medium text-gray-900 group-hover/item:text-[#6F2DBD] transition-colors">Hire an expert</div>
                                <div className="text-sm text-gray-500 mt-1">Find certified partners</div>
                              </Link>
                            </div>
                          </div>

                          {/* How to build SDK Box */}
                          <div className="col-span-3 bg-[#6F2DBD] rounded-xl p-6 self-start">
                            <div className="inline-block bg-white rounded px-3 py-1 mb-3">
                              <h4 className="text-[#6F2DBD] text-[10px] font-bold tracking-wider uppercase">How to build</h4>
                            </div>
                            <h5 className="font-bold text-white text-lg mb-2 leading-tight">Simple SDK, Powerful Results</h5>
                            <p className="text-white/80 text-sm mb-4 leading-relaxed">
                              Get started in minutes with our lightweight, native SDKs.
                            </p>
                            <Link href="/docs/sdk" className="text-white font-medium text-sm hover:underline flex items-center gap-1 group/link">
                              Start building
                              <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-[#6F2DBD] font-bold text-[15px] transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Log In
            </Link>
            <Link
              href="/contact-sales"
              className="text-gray-700 hover:text-gray-900 font-medium text-[15px] border border-gray-300 hover:border-gray-400 px-6 py-2.5 rounded-full transition-all"
            >
              Contact Sales
            </Link>
            <Button
              href="/get-started"
              variant="primary"
              className="!bg-[#6F2DBD] hover:!bg-[#6F2DBD] !text-white !px-6 !py-2.5 !text-[15px] !rounded-full !font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#6F2DBD] transition-colors rounded-lg hover:bg-gray-50 z-[203]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-white z-[202] lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
              }`}
            style={{ top: '64px' }}
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-gray-900 hover:text-[#6F2DBD] py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <Link
                  href="/login"
                  className="text-center py-2 text-lg font-semibold text-gray-700 hover:text-[#6F2DBD]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/contact-sales"
                  className="text-center py-2 text-lg font-semibold text-gray-700 hover:text-[#6F2DBD]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Sales
                </Link>
                <Button
                  href="/get-started"
                  variant="primary"
                  className="w-full !bg-[#6F2DBD] !text-white !rounded-full !py-4 !text-lg justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
