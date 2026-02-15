'use client'

import Link from 'next/link'

/**
 * Footer Component
 * 
 * Displays the comprehensive site footer with a black background.
 * Features:
 * - Full site map navigation (Products, Solutions, Resources, Company, Legal)
 * - Newsletter subscription (optional placeholder)
 * - Social media links
 * - Copyright and legal notices
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black pt-20 pb-12 border-t border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 mb-16">

          {/* Column 1: Product */}
          <div className="col-span-1">
            <h4 className="font-bold mb-6" style={{ color: '#ffffff' }}>Product</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/products/analytics" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/products/session-replay" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Session Replay
                </Link>
              </li>
              <li>
                <Link href="/products/features" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Feature Flags
                </Link>
              </li>
              <li>
                <Link href="/products/cdp" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Customer Data Platform
                </Link>
              </li>
              <li>
                <Link href="/products/warehouse" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Warehouse Native
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="col-span-1">
            <h4 className="font-bold mb-6" style={{ color: '#ffffff' }}>Solutions</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/solutions/product" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Product Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/marketing" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/solutions/engineering" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/solutions/fintech" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  FinTech
                </Link>
              </li>
              <li>
                <Link href="/solutions/ecommerce" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/solutions/healthcare" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Healthcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1">
            <h4 className="font-bold mb-6" style={{ color: '#ffffff' }}>Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/resources/docs" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Docs & Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/community" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Community
                </Link>
              </li>
              <li>
                <Link href="/resources/events" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Events & Webinars
                </Link>
              </li>
              <li>
                <Link href="/resources/support" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-span-1">
            <h4 className="font-bold mb-6" style={{ color: '#ffffff' }}>Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact-sales" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="hover:underline transition-colors text-sm" style={{ color: '#d1d5db' }}>
                  Manifesto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Brand & Newsletter */}
          <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img
                src="/img/Cognera_log_bg_removed.png"
                alt="Cognera Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold tracking-tight" style={{ color: '#ffffff' }}>Cognera</span>
            </Link>
            <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>
              The modern analytics platform for product and data teams.
            </p>
            <div className="flex gap-4">
              {/* Social Icons (Placeholders) */}
              <Link href="https://twitter.com" target="_blank" className="hover:opacity-80 transition-opacity" style={{ color: '#9ca3af' }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:opacity-80 transition-opacity" style={{ color: '#9ca3af' }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://github.com" target="_blank" className="hover:opacity-80 transition-opacity" style={{ color: '#9ca3af' }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: '#9ca3af' }}>
            &copy; {currentYear} Cognera Data Labs, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:underline transition-colors text-sm" style={{ color: '#9ca3af' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline transition-colors text-sm" style={{ color: '#9ca3af' }}>
              Terms of Service
            </Link>
            <Link href="/security" className="hover:underline transition-colors text-sm" style={{ color: '#9ca3af' }}>
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
