import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://timex.live'),
  title: {
    default: 'TimeX - Modern Time & Date Tools',
    template: '%s | TimeX',
  },
  description: 'A stunning, modern alternative to timeanddate.com. World clocks, timezone converter, calendar, countdown timers, and date calculators with a beautiful dark UI.',
  keywords: ['world clock', 'timezone converter', 'time converter', 'time and date', 'countdown timer', 'date calculator', 'calendar', 'holidays', 'time zone'],
  authors: [{ name: 'TimeX' }],
  creator: 'TimeX',
  publisher: 'TimeX',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://timex.live',
    siteName: 'TimeX',
    title: 'TimeX - Beautiful Time & Date Tools',
    description: 'Modern time and date tools with a stunning dark interface. World clocks, timezone conversion, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TimeX - Modern Time & Date Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@timex',
    creator: '@timex',
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
  verification: {
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
