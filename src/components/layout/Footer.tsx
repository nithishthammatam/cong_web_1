'use client'

import Link from 'next/link'
import Image from 'next/image'

/**
 * Footer Component
 * 
 * Displays the comprehensive site footer with a black background.
 * Features:
 * - Full site map navigation (Products, Solutions, Resources, Company, Legal)
 * - Brand section with logo and description
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

          {/* Column 5: Brand */}
          <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/img/Cognera_log_bg_removed.png"
                alt="Cognera Logo"
                className="h-8 w-auto object-contain"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold tracking-tight" style={{ color: '#ffffff' }}>Cognera</span>
            </Link>
            <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>
              The modern analytics platform for product and data teams.
            </p>
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
