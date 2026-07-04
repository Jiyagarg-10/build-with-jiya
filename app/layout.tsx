import type { Metadata } from 'next'
import { EB_Garamond, Space_Mono } from 'next/font/google'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jiya Garg — Web Designer · AI-powered sites',
  description: 'Web designer based in London. Clean, conversion-focused websites built in 3–5 days.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${garamond.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
