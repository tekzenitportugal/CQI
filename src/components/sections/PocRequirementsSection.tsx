import type { PocRequirementsData } from '@/data/poc-approach';
import { Container } from '@/components/ui/Container';
import { ExpandableBandList } from '@/components/ui/ExpandableBandList';
import styles from './PocRequirementsSection.module.scss';

type PocRequirementsSectionProps = {
  data: PocRequirementsData;
};

/**
 * Figma "CARDS EXPAND - POC APPROACH" (6225:36251): tinted bands, one open at a
 * time, with a right-aligned ruled list. Band and container widths stay on the
 * shared ExpandableBandList.
 */
export function PocRequirementsSection({ data }: PocRequirementsSectionProps) {
  return (
    <section className={styles.section}>
      <ExpandableBandList items={data.items} colors={data.colors} scrollDriven />
      <Container>
        <p className={styles.footnote}>{data.footnote}</p>
      </Container>
    </section>
  );
}
