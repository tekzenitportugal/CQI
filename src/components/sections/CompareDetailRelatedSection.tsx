import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import styles from './CompareDetailRelatedSection.module.scss';

export type CompareDetailRelatedSectionData = {
  links: { label: string; href: string }[];
  all: { label: string; href: string };
};

type CompareDetailRelatedSectionProps = {
  data: CompareDetailRelatedSectionData;
};

/** Figma band linking to the other three comparisons and back to "All four categories" (6469:32203). */
export function CompareDetailRelatedSection({ data }: CompareDetailRelatedSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.band}>
        <Container className={styles.content}>
          <nav className={styles.links} aria-label="Other comparisons">
            {data.links.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.label}
                <img src="/images/shared/common/arrow-right-blue.svg" alt="" width={16} height={16} aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <Link href={data.all.href} className={styles.all}>
            <span className={styles.allLabel}>{data.all.label}</span>
            <img
              className={styles.allIcon}
              src="/images/shared/common/arrow-right-lg.svg"
              alt=""
              width={40}
              height={40}
              aria-hidden="true"
            />
          </Link>
        </Container>
      </div>
    </section>
  );
}
