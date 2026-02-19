'use client'

import Header from './layout/Header'
import Footer from './layout/Footer'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
  const pathname = usePathname()
  const showHeader = pathname !== '/contact-sales'
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen flex flex-col relative bg-[#FBFBFB]">
      <div className="relative z-10 flex flex-col min-h-screen">
        {showHeader && (
          <div className="pointer-events-auto relative z-[100]">
            <Header />
          </div>
        )}
        <main className={`flex-1 ${isHome ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'} ${showHeader && !isHome ? 'mt-16' : ''} relative z-10`}>
          {isHome ? (
            <div className="px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          ) : (
            children
          )}
        </main>
        <div className="pointer-events-auto relative z-10 flex flex-col">
          <Footer />
        </div>
      </div>
    </div>
  )
}
