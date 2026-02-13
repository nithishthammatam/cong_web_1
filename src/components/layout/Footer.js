'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

/**
 * Footer Component
 * 
 * Displays the site footer with animated brand name and footer links.
 * Features:
 * - Scroll-triggered animation for large brand name (reveals/hides based on scroll direction)
 * - Privacy Policy link navigation
 * - Copyright information
 * - Gradient background from purple to black
 * - Responsive design with proper spacing
 */
export default function Footer() {
  // State and refs for scroll-based animation
  const [scrollProgress, setScrollProgress] = useState(0) // Progress value (0-1) for animation
  const lastScrollYRef = useRef(0) // Tracks last scroll position for delta calculation
  const scrollProgressRef = useRef(0) // Stores current progress value
  const footerRef = useRef(null) // Reference to footer DOM element

  /**
   * Scroll event handler that controls the brand name animation
   * Reveals brand name when scrolling down, hides when scrolling up
   */
  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return

      const footer = footerRef.current
      const rect = footer.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollYRef.current

      // Determine scroll direction
      const scrollingUp = scrollDelta < 0
      const scrollingDown = scrollDelta > 0

      // Check if footer is in viewport
      const footerInView = rect.top < windowHeight && rect.bottom > 0

      let progress = scrollProgressRef.current // Start with current progress

      if (footerInView) {
        const scrollSpeed = Math.abs(scrollDelta)

        if (scrollingDown && scrollSpeed > 0.5) {
          // Scrolling DOWN - REVEAL the text (increase opacity)
          progress = Math.min(1, progress + scrollSpeed * 0.02)
        } else if (scrollingUp && scrollSpeed > 0.5) {
          // Scrolling UP - HIDE the text (decrease opacity)
          progress = Math.max(0, progress - scrollSpeed * 0.02)
        }
        // If no scroll or very small scroll, keep current progress
      } else {
        // Footer not in view, keep hidden
        progress = 0
      }

      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress))
      scrollProgressRef.current = progress
      lastScrollYRef.current = currentScrollY
      setScrollProgress(progress)
    }

    // Initialize last scroll position
    lastScrollYRef.current = window.scrollY

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Calculate opacity and transform based on scroll progress
  const opacity = Math.max(0, Math.min(1, scrollProgress)) // Ensure it's between 0 and 1
  const translateY = (1 - scrollProgress) * 50 // Move up as we scroll up

  return (
    <footer
      ref={footerRef}
      className="text-gray-900 py-8 sm:py-12 mt-auto relative w-full z-10"
      style={{
        marginBottom: 0,
        overflow: 'visible',
        background: '#ffffff',
        borderTop: '1px solid #e5e7eb'
      }}
    >
      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-4 sm:mb-6">
          {/* Company Section */}
          <div className="max-w-xs">
            <h3 className="text-gray-900 text-sm sm:text-base font-semibold mb-2 sm:mb-3">
              Company
            </h3>
            <nav className="flex flex-col gap-0.5 sm:gap-1">
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm px-2 py-1 rounded flex items-center justify-between group"
              >
                <span>About Us</span>
                <span className="text-gray-400 group-hover:text-gray-600 transition-colors text-xs">→</span>
              </Link>
              <Link
                href="/partner"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm px-2 py-1 rounded flex items-center justify-between group"
              >
                <span>Become a Partner</span>
                <span className="text-gray-400 group-hover:text-gray-600 transition-colors text-xs">→</span>
              </Link>
              <Link
                href="/experts"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm px-2 py-1 rounded flex items-center justify-between group"
              >
                <span>Expert Directory</span>
                <span className="text-gray-400 group-hover:text-gray-600 transition-colors text-xs">→</span>
              </Link>
              <Link
                href="/careers"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm px-2 py-1 rounded flex items-center justify-between group"
              >
                <span>Careers</span>
                <span className="text-gray-400 group-hover:text-gray-600 transition-colors text-xs">→</span>
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm px-2 py-1 rounded flex items-center justify-between group"
              >
                <span>Contact Sales</span>
                <span className="text-gray-400 group-hover:text-gray-600 transition-colors text-xs">→</span>
              </Link>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="max-w-xs">
            <h3 className="text-gray-900 text-sm sm:text-base font-semibold mb-2 sm:mb-3">
              Legal
            </h3>
            <nav className="flex flex-col gap-0.5 sm:gap-1">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm px-2 py-1 rounded flex items-center justify-between group"
              >
                <span>Privacy Policy</span>
                <span className="text-gray-400 group-hover:text-gray-600 transition-colors text-xs">→</span>
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm px-2 py-1 rounded flex items-center justify-between group"
              >
                <span>Terms and Conditions</span>
                <span className="text-gray-400 group-hover:text-gray-600 transition-colors text-xs">→</span>
              </Link>
            </nav>
          </div>
        </div>


        {/* Copyright Section */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; 2025 Cognera Data Labs, Inc. All rights reserved. Cognera is a registered trademark of Cognera Data Labs, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
