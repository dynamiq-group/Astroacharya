import { Playfair_Display, Inter, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import BackgroundMusic from '@/components/ui/BackgroundMusic';
import { LanguageProvider } from '@/context/LanguageContext';

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const deva = Noto_Sans_Devanagari({
  variable: '--font-deva',
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: {
    default: `${siteConfig.businessName} — ${siteConfig.practitionerName} | Vedic Astrology, Vastu & Spiritual Consultation`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.baseUrl,
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} — ${siteConfig.practitionerName}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${deva.variable}`}
    >
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BackgroundMusic />
        </LanguageProvider>
      </body>
    </html>
  );
}

