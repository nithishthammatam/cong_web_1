import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: {
    default: 'Cognera Data Labs - Analytics Platform',
    template: '%s | Cognera Data Labs'
  },
  description: 'Unlock Digital Productivity with Cognera Data Labs Analytics Platform. Transform your workflow with advanced analytics and real-time insights that drive meaningful productivity gains.',
  keywords: ['analytics platform', 'digital productivity', 'data analytics', 'workflow optimization', 'productivity insights', 'Cognera'],
  authors: [{ name: 'Cognera Data Labs' }],
  creator: 'Cognera Data Labs',
  publisher: 'Cognera Data Labs',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cognera.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cognera.com',
    siteName: 'Cognera Data Labs',
    title: 'Cognera Data Labs - Analytics Platform',
    description: 'Unlock Digital Productivity with Cognera Data Labs Analytics Platform',
    images: [
      {
        url: '/img/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Cognera Data Labs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognera Data Labs - Analytics Platform',
    description: 'Unlock Digital Productivity with Cognera Data Labs Analytics Platform',
    images: ['/img/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
