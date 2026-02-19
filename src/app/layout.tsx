import './globals.css'
import { Poppins, Libre_Baskerville } from 'next/font/google'
import ConditionalLayout from '@/components/ConditionalLayout'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['500', '700'], /* Medium + Bold only */
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata = {
  title: {
    default: 'Cognera Data Labs - Analytics Platform',
    template: '%s | Cognera Data Labs'
  },
  description: 'Understand user behavior with Cognera Data Labs Analytics Platform. Track screen time, analyze sessions, and gain deep insights into how users interact with your mobile app.',
  keywords: ['analytics platform', 'user behavior', 'screen time tracking', 'session analysis', 'mobile app analytics', 'Cognera'],
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
    description: 'Understand user behavior with Cognera Data Labs Analytics Platform',
    images: [
      {
        url: '/img/Cognera_log_bg_removed.png',
        width: 512,
        height: 512,
        alt: 'Cognera Data Labs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognera Data Labs - Analytics Platform',
    description: 'Understand user behavior with Cognera Data Labs Analytics Platform',
    images: ['/img/Cognera_log_bg_removed.png'],
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
    icon: '/img/Cognera_log_bg_removed.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${libreBaskerville.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}

