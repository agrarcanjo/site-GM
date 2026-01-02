import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://gloriamenezesadv.com.br'),
  title: 'Glória Menezes - Advogada especialista em Crédito Rural',
  description: 'Especialista em crédito rural, direito do agronegócio e assessoria jurídica para produtores rurais. Escritório de advocacia com expertise em negociação de dívidas rurais, CPR e contratos do agronegócio.',
  keywords: 'advogada crédito rural, direito agronegócio, CPR, dívidas rurais, contratos rurais, advocacia agronegócio',
  authors: [{ name: 'Glória Menezes' }],
  openGraph: {
    title: 'Glória Menezes - Advogada especialista em Crédito Rural',
    description: 'Especialista em crédito rural e direito do agronegócio. Assessoria jurídica completa para produtores rurais.',
    url: 'http://gloriamenezesadv.com.br',
    siteName: 'Glória Menezes Advocacia',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glória Menezes - Advogada especialista em Crédito Rural',
    description: 'Especialista em crédito rural e direito do agronegócio.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
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
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
      </body>
      </html>
  )
}