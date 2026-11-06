'use client';

import Link from 'next/link';
import articles from '@/data/articles';
import { useLanguage } from '@/context/LanguageContext';

function formatDate(dateStr, lang) {
  return new Date(dateStr).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const categoryColours = {
  'Vedic Astrology': { bg: 'rgba(255, 153, 51, 0.1)', text: 'var(--saffron-dark)', hi: 'वैदिक ज्योतिष' },
  'Vastu Shastra': { bg: 'rgba(53, 102, 90, 0.1)', text: 'var(--sage)', hi: 'वास्तु शास्त्र' },
  'Medical Astrology': { bg: 'rgba(200, 169, 107, 0.12)', text: 'var(--gold-dark)', hi: 'चिकित्सा ज्योतिष' },
  'Kundli Reading': { bg: 'rgba(90, 62, 107, 0.1)', text: 'var(--text-secondary)', hi: 'कुंडली अध्ययन' },
};

export default function BlogSection({ limit, showCTA = true }) {
  const { language, t } = useLanguage();
  const displayArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <section
      className="section"
      aria-labelledby="blog-heading"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            {t('blogSection.tag', 'Insights & Education')}
          </div>
          <h2 id="blog-heading" className="section-title">
            {t('blogSection.heading', 'Vedic Knowledge Shared')}
          </h2>
          <p className="section-description" style={{ marginInline: 'auto', textAlign: 'center' }}>
            {t('blogSection.subheading', 'Educational articles exploring astrology, Vastu, Medical Astrology, and ancestral traditions.')}
          </p>
        </div>

        {/* Articles grid */}
        {displayArticles.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-subtle)',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📖</div>
            <h3 style={{ fontFamily: 'var(--font-heading), serif', marginBottom: '0.5rem' }}>
              Articles Coming Soon
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Educational content is being prepared. Check back soon.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {displayArticles.map((article) => {
              const catData = categoryColours[article.category] || { bg: 'rgba(36, 22, 44, 0.06)', text: 'var(--text-secondary)', hi: article.category };
              const categoryLabel = language === 'hi' ? catData.hi : article.category;

              return (
                <article
                  key={article.slug}
                  className="card"
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all var(--transition)',
                  }}
                >
                  {/* Card top banner */}
                  <div style={{
                    height: '6px',
                    background: `linear-gradient(to right, ${catData.text}, var(--gold))`,
                  }} />

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Meta row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '100px',
                        background: catData.bg,
                        color: catData.text,
                      }}>
                        {categoryLabel}
                      </span>
                      <time
                        dateTime={article.publishedAt}
                        style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}
                      >
                        {formatDate(article.publishedAt, language)}
                      </time>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: 'var(--font-heading), serif',
                      fontSize: '1.1875rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.625rem',
                      lineHeight: 1.3,
                    }}>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="link-saffron-hover"
                      >
                        {article.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      margin: 0,
                      flex: 1,
                    }}>
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '1.25rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                        {article.readingTime}
                      </span>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="btn btn--outline-saffron btn--sm"
                      >
                        {language === 'hi' ? 'पढ़ें' : 'Read'}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {showCTA && limit && articles.length > limit && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/blog" className="btn btn--outline btn--lg">
              {t('blogSection.viewAllArticles', 'View All Articles')} &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
