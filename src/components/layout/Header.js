'use client'

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{ overflow: 'visible' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ overflow: 'visible' }}>
        {/* Dark gradient rounded navigation bar */}
        <div
          className="mt-2 shadow-lg relative z-[201]"
          style={{
            background: 'linear-gradient(to bottom, #000000, #7440FA)',
            overflow: 'visible',
            borderRadius: '9999px',
            transition: 'border-radius 0.2s ease, background 0.2s ease'
          }}
        >
          <div className="flex justify-center items-center py-6 px-4 sm:px-6 relative" style={{ overflow: 'visible' }}>
            {/* Centered Logo */}
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/img/android-chrome-512x512.png"
                alt="Cognera Logo"
                className="w-12 h-12 mr-3"
              />
              <h1 className="text-2xl sm:text-3xl text-white font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Cognera™
              </h1>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
