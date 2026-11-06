import { notFound } from 'next/navigation';
import { getArticleBySlug, articles } from '@/data/articles';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ContactSection from '@/components/home/ContactSection';
import Link from 'next/link';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Very light markdown renderer for the article body.
 * Handles: ## headings, ### headings, **bold**, *italic*, - lists, --- dividers, > blockquotes, tables
 */
function renderMarkdown(content) {
  const blocks = content.split('\n\n').map((b) => b.trim()).filter(Boolean);

  return blocks.map((block, i) => {
    // H2
    if (block.startsWith('## ')) {
      return <h2 key={i}>{block.slice(3)}</h2>;
    }
    // H3
    if (block.startsWith('### ')) {
      return <h3 key={i}>{block.slice(4)}</h3>;
    }
    // HR
    if (block === '---') {
      return <hr key={i} />;
    }
    // Blockquote
    if (block.startsWith('> ')) {
      return <blockquote key={i}>{block.slice(2)}</blockquote>;
    }
    // Unordered list
    if (block.split('\n').every((l) => l.startsWith('- '))) {
      const items = block.split('\n');
      return (
        <ul key={i}>
          {items.map((item, j) => (
            <li key={j}>{renderInline(item.slice(2))}</li>
          ))}
        </ul>
      );
    }
    // Table
    if (block.includes('|') && block.split('\n').length >= 3) {
      const lines = block.split('\n');
      const header = lines[0].split('|').map((c) => c.trim()).filter(Boolean);
      const body = lines.slice(2).map((l) => l.split('|').map((c) => c.trim()).filter(Boolean));
      return (
        <table key={i}>
          <thead>
            <tr>{header.map((h, j) => <th key={j}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      );
    }
    // Paragraph
    return <p key={i}>{renderInline(block)}</p>;
  });
}

function renderInline(text) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

const categoryColours = {
  'Vedic Astrology': 'var(--saffron-dark)',
  'Vastu Shastra': 'var(--sage)',
  'Medical Astrology': 'var(--gold-dark)',
  'Kundli Reading': 'var(--text-secondary)',
};

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const catColour = categoryColours[article.category] || 'var(--text-secondary)';

  const otherArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-feature)',
          paddingBlock: '4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-labelledby="article-heading"
      >
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(200, 169, 107, 0.06) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: article.title },
            ]}
          />

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.25rem 0.75rem',
              borderRadius: '100px',
              background: 'rgba(255, 153, 51, 0.12)',
              color: 'var(--accent-text)',
            }}>
              {article.category}
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--feature-muted)' }}>
              {article.readingTime}
            </span>
          </div>

          <h1
            id="article-heading"
            style={{
              fontFamily: 'var(--font-heading), serif',
              fontSize: 'clamp(1.625rem, 3vw + 1rem, 2.5rem)',
              fontWeight: 800,
              color: 'var(--feature-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            {article.title}
          </h1>

          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--feature-muted)',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
            maxWidth: '60ch',
          }}>
            {article.excerpt}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <time
              dateTime={article.publishedAt}
              style={{ fontSize: '0.875rem', color: 'var(--feature-muted)' }}
            >
              Published {formatDate(article.publishedAt)}
            </time>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 280px)',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Content */}
            <article aria-labelledby="article-heading">
              {/* Editorial disclaimer */}
              <div style={{
                padding: '1rem 1.25rem',
                background: 'rgba(255, 153, 51, 0.05)',
                border: '1px solid rgba(255, 153, 51, 0.15)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                lineHeight: 1.65,
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>Editorial note:</strong> This article is
                educational starter content. It is intended for general information only and does not
                constitute professional astrological, medical, legal, or financial advice.
              </div>

              <div className="prose">
                {renderMarkdown(article.content)}
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: '6rem' }}>
              <div style={{
                background: 'var(--bg-page)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading), serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  About Dr. Vikas Kaushik
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1rem',
                  maxWidth: 'none',
                }}>
                  Practitioner of Vedic Astrology, Vastu Shastra, Medical Astrology, and ancestral rites
                  at Gaya.
                </p>
                <Link href="/about" className="btn btn--outline btn--sm" style={{ width: '100%', justifyContent: 'center' }}>
                  Learn More
                </Link>
              </div>

              {otherArticles.length > 0 && (
                <div style={{
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading), serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                  }}>
                    More Articles
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {otherArticles.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/blog/${a.slug}`}
                        className="sidebar-article-card"
                      >
                        <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: categoryColours[a.category] || 'var(--text-muted)' }}>
                          {a.category}
                        </span>
                        <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3, margin: '0.375rem 0 0', maxWidth: 'none' }}>
                          {a.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
