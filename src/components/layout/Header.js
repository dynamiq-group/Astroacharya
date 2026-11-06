'use client';

import './header.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Raleway } from 'next/font/google';
import { siteConfig } from '@/config/site';
import { getTelUrl, getWhatsAppUrl, getDisplayPhone } from '@/lib/contact';
import LogoMark from '@/components/ui/LogoMark';
import { useLanguage } from '@/context/LanguageContext';

const headerFont = Raleway({ subsets: ['latin'], display: 'swap', variable: '--font-astro-header' });
const pageLinks = ['/panchang', '/about', '/blog', '/contact'].map((href) => siteConfig.nav.find((item) => item.href === href)).filter(Boolean);
const pageIcons = { '/panchang': 'calendar', '/about': 'user', '/blog': 'grid', '/contact': 'chat' };

// These destinations use pages already present in your supplied navigation.
// Replace them with dedicated feature URLs when those pages are available.
const article = (label) => `/blog?topic=${encodeURIComponent(label)}`;

function buildNavigation(chatHref, callHref) {
  return [
    { id: 'consultations', label: 'Consultations', icon: 'chat', section: 'Consult', items: [
      { label: 'Chat with Astrologer', href: chatHref },
      { label: 'Call with Astrologer', href: callHref },
    ] },
    { id: 'horoscope', label: 'Horoscope', icon: 'sun', section: 'Consult', items:
      ['Daily Horoscope', "Tomorrow’s Horoscope", "Yesterday’s Horoscope", 'Weekly Horoscope', 'Monthly Horoscope', 'Yearly Horoscope']
        .map((label) => ({ label, href: article(label) })),
    },
  ];
}

function Icon({ name, size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {name === 'menu' && <><path d="M3 6h18M3 12h18M3 18h18" /></>}
      {name === 'close' && <path d="m6 6 12 12M18 6 6 18" />}
      {name === 'user' && <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>}
      {name === 'sun' && <><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></>}
      {name === 'moon' && <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />}
      {name === 'chevron' && <path d="m6 9 6 6 6-6" />}
      {name === 'arrow' && <path d="M4 12h16m-5-5 5 5-5 5" />}
      {name === 'chat' && <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />}
      {name === 'spark' && <path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3Z" />}
      {name === 'grid' && <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h2M14 12h2M8 16h2M14 16h2" /></>}
      {name === 'calendar' && <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>}
    </svg>
  );
}

function NavLink({ href, children, ...props }) {
  const external = /^https?:\/\//.test(href);
  if (external || /^(tel:|mailto:)/.test(href)) {
    return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} {...props}>{children}</a>;
  }
  return <Link href={href} {...props}>{children}</Link>;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileGroup, setMobileGroup] = useState(null);
  const headerRef = useRef(null);
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  const telUrl = getTelUrl();
  const waUrl = getWhatsAppUrl();
  const displayPhone = getDisplayPhone();
  const primaryCtaUrl = waUrl || telUrl || '/contact';
  const navItems = buildNavigation(waUrl || '/contact', telUrl || '/contact');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpenMenu(null);
    };
    const onEscape = (event) => {
      if (event.key !== 'Escape') return;
      setOpenMenu(null);
      headerRef.current?.querySelector(`[data-menu-trigger="${openMenu}"]`)?.focus();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onEscape);
    };
  }, [openMenu]);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (!isOpen) {
      if (drawer?.open) drawer.close();
      return;
    }
    if (!drawer?.open) drawer?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      if (drawer?.open) drawer.close();
      menuButtonRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const onResize = () => {
      if (desktop.matches) setIsOpen(false);
      else setOpenMenu(null);
    };
    desktop.addEventListener('change', onResize);
    return () => desktop.removeEventListener('change', onResize);
  }, []);

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <header ref={headerRef} className={`${headerFont.variable} astro-header${scrolled ? ' astro-header--scrolled' : ''}`}>
        <div className="astro-header__inner">
          <div className="astro-header__left">
            <button ref={menuButtonRef} type="button" className="astro-header__hamburger" aria-label="Open navigation menu" aria-expanded={isOpen} aria-controls="astro-mobile-nav" onClick={() => setIsOpen(true)}>
              <Icon name="menu" size={22} />
            </button>
            <Link href="/" className="astro-header__brand" aria-label={`${siteConfig.businessName} — Home`} title={siteConfig.businessName}>
              <span className="astro-header__logo"><LogoMark size={36} /></span>
              <span className="astro-header__brand-name">{siteConfig.businessName}</span>
            </Link>
          </div>

          <nav className="astro-header__nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.id} className="astro-header__nav-item" onMouseEnter={() => setOpenMenu(item.id)} onMouseLeave={(event) => {
                if (!event.currentTarget.contains(document.activeElement)) setOpenMenu(null);
              }} onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null);
              }}>
                <button type="button" className="astro-header__nav-trigger" data-menu-trigger={item.id} aria-expanded={openMenu === item.id} aria-controls={`astro-drop-${item.id}`} onClick={() => setOpenMenu(item.id)} onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    setOpenMenu(item.id);
                    requestAnimationFrame(() => headerRef.current?.querySelector(`#astro-drop-${item.id} a`)?.focus());
                  }
                }}>
                  {item.label}<Icon name="chevron" size={12} className="astro-header__chevron" />
                </button>
                <div className="astro-header__dropdown" id={`astro-drop-${item.id}`} hidden={openMenu !== item.id}>
                  <div className="astro-header__dropdown-card">
                    {item.items.map((child) => (
                      <NavLink key={child.label} href={child.href} className="astro-header__dropdown-link" onClick={() => setOpenMenu(null)}>
                        <span>{child.label}</span><Icon name="arrow" size={12} />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {pageLinks.map((item) => (
              <Link key={item.href} href={item.href} className="astro-header__nav-link" aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>
            ))}
          </nav>

          <div className="astro-header__actions">
            <button type="button" className="astro-header__icon-btn astro-header__language" onClick={toggleLanguage} aria-label={language === 'en' ? 'Switch to Hindi' : 'Switch to English'} title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}>
              <span lang="hi">अ</span><span>A</span>
            </button>
            <NavLink href={primaryCtaUrl} className="astro-header__cta" aria-label={waUrl ? 'Book Consultation on WhatsApp' : telUrl ? `Book Consultation by calling ${displayPhone || 'the astrologer'}` : 'Book Consultation'}>
              <span>Book Consultation</span><Icon name="arrow" size={14} />
            </NavLink>
          </div>
        </div>
      </header>

      <dialog ref={drawerRef} id="astro-mobile-nav" className={`${headerFont.variable} astro-drawer`} aria-label="Navigation menu" onCancel={closeDrawer} onClose={closeDrawer} onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDrawer();
      }}>
        <div className="astro-drawer__header">
          <Link href="/" className="astro-header__brand" onClick={closeDrawer} aria-label={`${siteConfig.businessName} — Home`}>
            <span className="astro-header__logo"><LogoMark size={32} /></span><span className="astro-header__brand-name">{siteConfig.businessName}</span>
          </Link>
          <button type="button" className="astro-drawer__close" aria-label="Close menu" onClick={closeDrawer}><Icon name="close" /></button>
        </div>
        <div className="astro-drawer__intro">
          <NavLink href={primaryCtaUrl} className="astro-drawer__primary" onClick={closeDrawer}>
            <Icon name="chat" size={17} />Book Consultation
          </NavLink>
        </div>
        <nav className="astro-drawer__nav" aria-label="Mobile navigation">
          {['Consult'].map((section) => (
            <div className="astro-drawer__section" key={section}>
              <p className="astro-drawer__section-title">{section}</p>
              <div className="astro-drawer__card">
                {navItems.filter((item) => item.section === section).map((item) => (
                  <div className="astro-drawer__group" key={item.id}>
                    <button type="button" className="astro-drawer__row" aria-expanded={mobileGroup === item.id} aria-controls={`astro-mobile-${item.id}`} onClick={() => setMobileGroup((current) => current === item.id ? null : item.id)}>
                      <span className="astro-drawer__row-icon"><Icon name={item.icon} size={16} /></span><span>{item.label}</span><Icon name="chevron" size={13} className="astro-drawer__chevron" />
                    </button>
                    <div id={`astro-mobile-${item.id}`} hidden={mobileGroup !== item.id}>
                      {item.items.map((child) => <NavLink key={child.label} href={child.href} className="astro-drawer__child" onClick={closeDrawer}>{child.label}</NavLink>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="astro-drawer__section">
            <p className="astro-drawer__section-title">More</p>
            <div className="astro-drawer__card">
              {pageLinks.map((item) => (
                <Link key={item.href} href={item.href} className="astro-drawer__row" onClick={closeDrawer}><span className="astro-drawer__row-icon"><Icon name={pageIcons[item.href]} size={16} /></span><span>{item.label}</span><Icon name="arrow" size={13} /></Link>
              ))}
            </div>
          </div>
        </nav>
      </dialog>
    </>
  );
}
