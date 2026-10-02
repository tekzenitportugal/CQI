import type { fixBeforeFailureData } from '@/data/fix-before-failure';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './BrokenPromiseSection.module.scss';

type BrokenPromiseSectionProps = {
  data: typeof fixBeforeFailureData.brokenPromise;
};

export function BrokenPromiseSection({ data }: BrokenPromiseSectionProps) {
  return (
    <section>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.headerMain}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
            </div>
            <p className={styles.aside}>{data.aside}</p>
          </div>

          <div className={styles.comparison}>
            <article className={`${styles.panel} ${styles.panelBefore}`}>
              <span className={styles.tag}>{data.before.tag}</span>
              <div className={styles.panelBody}>
                {data.before.entries.flatMap((entry) => [
                  <div key={entry.heading} className={styles.entryRow}>
                    <p className={styles.entryHeading}>{entry.heading}</p>
                    <p className={styles.text}>{entry.body}</p>
                  </div>,
                  entry.indent && (
                    <p key={`${entry.heading}-indent`} className={`${styles.text} ${styles.entryIndent}`}>
                      {entry.indent}
                    </p>
                  ),
                ])}
              </div>
            </article>

            <article className={`${styles.panel} ${styles.panelWith}`}>
              <span className={styles.tag}>{data.withCqi.tag}</span>
              <div className={styles.panelBody}>
                {data.withCqi.points.map((point) => (
                  <p key={point} className={`${styles.text} ${styles.withPoint}`}>
                    {point}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
