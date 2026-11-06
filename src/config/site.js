/**
 * Site configuration — update these values once the client supplies them.
 * All contact URL generation flows through src/lib/contact.js so every
 * page automatically reflects changes made here.
 */

export const siteConfig = {
  /** Business identity */
  businessName: 'Astroacharya',
  practitionerName: 'Dr. Vikas Kaushik',
  practitionerTitle: 'Dr.',
  tagline: 'Ancient Wisdom. A Clearer Path Forward.',
  description:
    'Dr. Vikas Kaushik offers expert consultations in Vedic Astrology, Vastu Dosha, Medical Astrology, Kundli Reading, and Pind Dan (Pitra Pooja) in Gaya.',

  /**
   * Contact details — replace CONFIGURE_PHONE and CONFIGURE_WHATSAPP with
   * the real numbers in international format before going live.
   * Use null to disable the contact action gracefully (no broken links shown to visitors).
   */
  phone: null, // e.g. '+919876543210'
  whatsapp: '+919311263509',
  displayPhone: null, // e.g. '+91 98765 43210'

  /**
   * Base URL — replace with the real production domain.
   * Used for canonical URLs, Open Graph, and sitemaps.
   */
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NODE_ENV === 'production'
      ? 'https://astroacharya.com' // TODO: replace with real domain
      : 'http://localhost:3000'),

  /** Social media — set to null if not yet available */
  social: {
    instagram: 'https://www.instagram.com/astroacharya_01/',
    x: 'https://x.com/vikasastro',
    youtube: 'https://www.youtube.com/@astroacharya_001',
    facebook: null,
  },

  /** Navigation links */
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Panchang', href: '/panchang' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default siteConfig;
