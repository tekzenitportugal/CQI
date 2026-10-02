import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './SitemapLinksSection.module.scss';

export type SitemapLink = {
  label: string;
  href: string;
};

export type SitemapColumn = {
  title: string;
  links: SitemapLink[];
};

export type SitemapLinksSectionData = {
  title: string;
  titleHighlight?: string[];
  columns: SitemapColumn[];
  footnote: {
    before: string;
    linkLabel: string;
    linkHref: string;
    after: string;
  };
};

type SitemapLinksSectionProps = {
  data: SitemapLinksSectionData;
};

/** Figma "Every section, every page" (6079:31086): 8 link columns + integrations footnote. */
export function SitemapLinksSection({ data }: SitemapLinksSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>

        <div className={styles.grid}>
          {data.columns.map((column) => (
            <div key={column.title} className={styles.column}>
              <p className={styles.columnTitle}>{column.title}</p>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.footnote}>
          {data.footnote.before}
          <Link href={data.footnote.linkHref} className={styles.footnoteLink}>
            {data.footnote.linkLabel}
          </Link>
          {data.footnote.after}
        </p>
      </Container>
    </section>
  );
}
