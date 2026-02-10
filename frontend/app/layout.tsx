import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mix Expert - Producent koncentratów spożywczych',
  description: 'Mix Expert - producent wafli do lodów, koncentratów spożywczych, gofrów w proszku, naleśników w proszku',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
