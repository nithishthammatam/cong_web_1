import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import { IBM_Plex_Sans, Roboto, Poppins, Newsreader, Inter } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-plex-sans',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-poppins',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
  weight: 'variable',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-inter',
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
    description: 'Understand user behavior with Cognera Data Labs Analytics Platform',
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
    <html lang="en" className={`${ibmPlexSans.variable} ${roboto.variable} ${poppins.variable} ${newsreader.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
