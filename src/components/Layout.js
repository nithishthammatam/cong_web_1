'use client'

import Header from './layout/Header'
import Footer from './layout/Footer'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
  const pathname = usePathname()
  const showHeader = pathname !== '/contact-sales'

  return (
    <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: '#ffffff' }}>
      {/* Fixed Hero Animation - Center of Viewport (Hidden via CSS) */}
      <div id="hero-shape" style={{ display: 'none' }}>
        <div id="hero-1"></div>
        <div id="hero-2"></div>
        <div id="hero-3"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        {showHeader && (
          <div className="pointer-events-auto relative z-[100]">
            <Header />
          </div>
        )}
        <main className={`flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pointer-events-auto ${showHeader ? 'mt-16' : ''} relative z-10`}>
          {children}
        </main>
        <div className="pointer-events-auto relative z-10 flex flex-col">
          <Footer />
        </div>
      </div>
    </div>
  )
}
