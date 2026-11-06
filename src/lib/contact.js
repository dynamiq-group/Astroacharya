import { siteConfig } from '@/config/site';

/**
 * Returns a valid tel: href string, or null if the phone number is not configured.
 */
export function getTelUrl(phone = siteConfig.phone) {
  if (!phone) return null;
  // Normalise: strip spaces/dashes, ensure starts with +
  const normalised = phone.replace(/[\s\-().]/g, '');
  return `tel:${normalised}`;
}

/**
 * Returns a valid https://wa.me/ URL, or null if the WhatsApp number is not configured.
 * @param {string|null} message  Optional pre-filled message (UTF-8).
 */
export function getWhatsAppUrl(
  number = siteConfig.whatsapp,
  message = 'Namaste, I would like to enquire about your astrology consultation services.'
) {
  if (!number) return null;
  const normalised = number.replace(/\D/g, '');
  if (!normalised) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${normalised}${text}`;
}

/**
 * Returns the display-friendly phone number string.
 */
export function getDisplayPhone(display = siteConfig.displayPhone) {
  return display ?? null;
}

/**
 * In development mode only, logs a notice that a contact number is missing.
 * Does nothing in production.
 */
export function contactConfigNotice(type) {
  if (process.env.NODE_ENV !== 'development') return;
  if (typeof console !== 'undefined') {
    console.info(
      `[Astroacharya] ${type} contact number is not configured in src/config/site.js. ` +
        'The related UI action is hidden from visitors until a real number is added.'
    );
  }
}
