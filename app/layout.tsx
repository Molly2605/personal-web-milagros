import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'
import LiquidEther from '@/components/backgrounds/LiquidEther'


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

      <body className="relative min-h-screen overflow-x-hidden">

        {/* 🌊 Background global */}
        <div className="fixed inset-0 -z-10">
          <LiquidEther
            resolution={0.5}
            mouseForce={15}
            cursorSize={200}
            autoDemo={true}
            autoSpeed={0.4}
          />
        </div>

        {/* UI */}
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />

      </body>

    </html>
  )
}