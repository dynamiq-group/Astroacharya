import HeroSection from '@/components/home/HeroSection';
import AboutIntroSection from '@/components/home/AboutIntroSection';
import ServicesSection from '@/components/home/ServicesSection';
import HoroscopeSection from '@/components/home/HoroscopeSection';
import PanchangSection from '@/components/home/PanchangSection';
import YouTubeShortsSection from '@/components/home/YouTubeShortsSection';
import BlogSection from '@/components/home/BlogSection';
import FAQSection from '@/components/home/FAQSection';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `${siteConfig.businessName} — ${siteConfig.practitionerName} | Vedic Astrology & Spiritual Consultation`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutIntroSection />
      <ServicesSection limit={5} showCTA={false} saffronBackground compact />
      <HoroscopeSection />
      <PanchangSection />
      <YouTubeShortsSection />
      <BlogSection limit={3} showCTA />
      <FAQSection />
    </>
  );
}
