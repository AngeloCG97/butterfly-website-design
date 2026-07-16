import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'
import ThemeRegistry from '@/components/theme-registry'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://crisalidascr.com'),
  title: {
    default: 'Crisálidas Huetares | Cría y venta de mariposas en Costa Rica',
    template: '%s | Crisálidas Huetares',
  },
  description:
    'Crisálidas Huetares es una empresa costarricense dedicada a la cría sostenible y venta de mariposas, crisálidas y pupas. Exportamos especies tropicales con calidad y compromiso ambiental.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Crisálidas Huetares | Cría y venta de mariposas en Costa Rica',
    description:
      'Crisálidas Huetares es una empresa costarricense dedicada a la cría sostenible y venta de mariposas, crisálidas y pupas. Exportamos especies tropicales con calidad y compromiso ambiental.',
    url: 'https://crisalidascr.com',
    siteName: 'Crisálidas Huetares',
    locale: 'es_CR',
    type: 'website',
    images: [
      {
        url: '/logo-crisalidas.png',
        width: 1200,
        height: 630,
        alt: 'Crisálidas Huetares',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crisálidas Huetares | Cría y venta de mariposas en Costa Rica',
    description:
      'Crisálidas Huetares es una empresa costarricense dedicada a la cría sostenible y venta de mariposas, crisálidas y pupas. Exportamos especies tropicales con calidad y compromiso ambiental.',
    images: ['/logo-crisalidas.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1E8FC8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeRegistry>{children}</ThemeRegistry>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
