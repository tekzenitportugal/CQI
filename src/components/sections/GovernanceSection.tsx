import type { GovernanceData } from '@/data/security-trust';
import { Container } from '@/components/ui/Container';
import { RuledRowsList } from '@/components/ui/RuledRowsList';
import { highlightText } from '@/utils/highlightText';
import styles from './GovernanceSection.module.scss';

type GovernanceSectionProps = {
  data: GovernanceData;
};

/**
 * Figma "Group 957": left is a title + a nested small-label sub-block (eyebrow + 24px paragraph,
 * the same shape as HeroCopy's intro), right is a label-less RuledRowsList aligned to that sub-block.
 */
export function GovernanceSection({ data }: GovernanceSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
          <div className={styles.sub}>
            <p className={styles.label}>{data.auditability.label}</p>
            <p className={styles.description}>{data.auditability.description}</p>
          </div>
        </div>

        <RuledRowsList rows={data.rows} className={styles.list} />
      </Container>
    </section>
  );
}
