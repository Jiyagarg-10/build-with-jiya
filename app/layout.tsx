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
  description: 'Web designer based in London. Clean, conversion-focused websites built in 2–3 days for beauty businesses & brands.',
  openGraph: {
    title: 'Jiya Garg — Web Designer',
    description: 'I build beautiful websites that convert & grow — for beauty businesses and independent brands. Based in London.',
    url: 'https://jiyagarg-10.github.io/build-with-jiya',
    siteName: 'Jiya Garg',
    images: [{ url: 'https://jiyagarg-10.github.io/build-with-jiya/og-image.png', width: 1200, height: 630, alt: 'Jiya Garg — Web Designer' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiya Garg — Web Designer',
    description: 'I build beautiful websites that convert & grow — for beauty businesses and independent brands.',
    images: ['https://jiyagarg-10.github.io/build-with-jiya/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${garamond.variable} ${spaceMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          history.scrollRestoration='manual';
          document.documentElement.scrollTop=0;
          document.body&&(document.body.scrollTop=0);
          window.addEventListener('load',function(){window.scrollTo(0,0);});
          window.addEventListener('pageshow',function(e){if(e.persisted||performance.navigation&&performance.navigation.type===2){window.scrollTo(0,0);}});
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
