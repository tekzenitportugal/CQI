import Link from 'next/link';
import type { whoIsItForData } from '@/data/who-is-it-for';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './WhereCqiBelongsSection.module.scss';

type WhereCqiBelongsSectionProps = {
  data: typeof whoIsItForData.whereBelongs;
};

export function WhereCqiBelongsSection({ data }: WhereCqiBelongsSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.stage}>
          <div className={styles.orbitOuter} aria-hidden />
          <div className={styles.orbitInner} aria-hidden />

          <ul className={styles.dots} aria-hidden>
            {data.industries.map((item) => (
              <li
                key={item.label}
                className={styles.dot}
                style={{ top: item.dot.top, left: item.dot.left }}
              >
                <span className={styles.dotCore} />
              </li>
            ))}
          </ul>

          <div className={styles.core}>
            <SectionHeading
              title={data.title}
              titleHighlight={data.titleHighlight}
              description={data.description}
              align="center"
              className={styles.heading}
            />
            <Button label={data.cta.label} href={data.cta.href} variant={data.cta.variant} />
          </div>

          <ul className={styles.tags}>
            {data.industries.map((item) => (
              <li
                key={item.label}
                className={styles.tagItem}
                style={{ top: item.top, left: item.left }}
              >
                <Link
                  href={item.href}
                  className={`${styles.tag} ${item.emphasis ? styles.tagEmphasis : styles.tagMuted}`.trim()}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
