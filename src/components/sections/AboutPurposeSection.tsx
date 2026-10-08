import type { AboutPurposeData } from '@/data/about';
import { GhostLink } from '@/components/ui/GhostLink';
import { Container } from '@/components/ui/Container';
import { RuledRowsList } from '@/components/ui/RuledRowsList';
import { highlightText } from '@/utils/highlightText';
import styles from './AboutPurposeSection.module.scss';

type AboutPurposeSectionProps = {
  data: AboutPurposeData;
};

/** Figma "Frame 1000003308": purpose copy + 2 ghost links on the left, a 5-row ruled list on the right. */
export function AboutPurposeSection({ data }: AboutPurposeSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.titleBlock}>
            <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>

            <div className={styles.purpose}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <div className={styles.copy}>
                <p className={styles.lead}>{data.lead}</p>
                <p className={styles.support}>{data.support}</p>
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            {data.buttons.map((button) => (
              <GhostLink key={button.label} label={button.label} href={button.href} />
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <RuledRowsList rows={data.rows} />
        </div>
      </Container>
    </section>
  );
}
