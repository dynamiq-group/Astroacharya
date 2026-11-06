import Link from 'next/link';

/**
 * Breadcrumb — renders an accessible breadcrumb trail.
 * items: Array of { label: string, href?: string }
 * The last item is treated as the current page.
 */
export default function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
      <ol className="breadcrumb" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {i > 0 && (
                <span className="breadcrumb-sep" aria-hidden="true">
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  style={{
                    color: isLast ? 'var(--text-primary)' : 'var(--text-muted)',
                    fontWeight: isLast ? 600 : 400,
                    fontSize: '0.875rem',
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} style={{ fontSize: '0.875rem' }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
