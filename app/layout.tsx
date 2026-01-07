import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Portfolio Milagros Lasschar — Frontend Developer + UX/UI + Salesforce Admin',
  description: 'Portfolio Milagros Lasschar — Frontend Developer + UX/UI + Salesforce Admin',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `}
        </Script>

        {/* SEO / AEO */}
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Portfolio de Milagros Lasschar — Frontend Developer, UX/UI Designer y Salesforce Admin. Experiencias digitales centradas en el usuario y soluciones creativas con código y diseño." />
        <link rel="canonical" href="https://milagros-lasschar-portfolio.netlify.app/" />
      </head>

      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}