import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import ScrollToTop from '../components/ScrollToTop';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-main',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Alexandru Glontaru — AI Engineer · Fractional CTO · Sapiema',
  description: 'Stop hallucinating your AI strategy. Start engineering it. Alexandru Glontaru — AI Engineer, Fractional CTO, and Founder of Sapiema.',
  openGraph: {
    title: 'Alexandru Glontaru — AI Engineer · Fractional CTO · Sapiema',
    description: 'Stop hallucinating your AI strategy. Start engineering it. Alexandru Glontaru — AI Engineer, Fractional CTO, and Founder of Sapiema.',
    url: 'https://sapiema.com',
    siteName: 'Sapiema',
    type: 'website',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>{`
          /* Global Next.js font overrides */
          :root {
            --font-main: ${spaceGrotesk.style.fontFamily}, sans-serif;
            --font-mono: ${ibmPlexMono.style.fontFamily}, monospace;
          }
          body {
            font-family: var(--font-main);
          }
          /* Page-specific hover effects */
          .hero-cta-primary:hover { background: #ff8350 !important; border-color: #ff8350 !important; }
          .hero-cta-secondary:hover { border-color: #9aa5bd; color: #fafbf7; }
          .pipeline-step-card:hover { border-color: #f66a2e; }
          .framework-card:hover { border-color: #f66a2e !important; transform: translateY(-3px); }
          .btn-outline:hover { background: #f66a2e; color: #071023; }
          .btn-primary:hover { background: #ff8350; border-color: #ff8350; color: #071023; }
          .cta-contact a:hover { border-color: #f66a2e; color: #f66a2e; }
          .footer a:hover { color: #f66a2e; }
        `}</style>
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <ScrollToTop />
        <GoogleAnalytics gaId="G-PLACEHOLDER" />
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
