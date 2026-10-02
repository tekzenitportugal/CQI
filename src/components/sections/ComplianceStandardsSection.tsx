import type { ComplianceStandardsData } from '@/data/security-trust';
import { Container } from '@/components/ui/Container';
import { RuledRowsList } from '@/components/ui/RuledRowsList';
import { highlightText } from '@/utils/highlightText';
import styles from './ComplianceStandardsSection.module.scss';

type ComplianceStandardsSectionProps = {
  data: ComplianceStandardsData;
};

/**
 * Figma "Frame 1000003497": heading on the left, 829px dashed-rule list on the right — the same
 * shape as RuledRowsSection, but this heading has no eyebrow and needs a highlighted phrase, which
 * RuledRowsSection's plain <h2> doesn't support. Thin wrapper around RuledRowsList instead.
 */
export function ComplianceStandardsSection({ data }: ComplianceStandardsSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
        <RuledRowsList rows={data.rows} className={styles.list} />
      </Container>
    </section>
  );
}
