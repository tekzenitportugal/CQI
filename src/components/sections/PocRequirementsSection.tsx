import type { PocRequirementsData } from '@/data/poc-approach';
import { ExpandableBandList } from '@/components/ui/ExpandableBandList';
import styles from './PocRequirementsSection.module.scss';

type PocRequirementsSectionProps = {
  data: PocRequirementsData;
};

/**
 * Figma "Frame 1000003495": the CARDS EXPAND band spans the full 1536px page
 * width (no container gutter — each band owns its own 50px padding), with a
 * flush-left footnote underneath.
 */
export function PocRequirementsSection({ data }: PocRequirementsSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <ExpandableBandList items={data.items} colors={data.colors} />
        <p className={styles.footnote}>{data.footnote}</p>
      </div>
    </section>
  );
}
