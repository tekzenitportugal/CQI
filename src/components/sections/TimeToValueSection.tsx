import type { IndustryThreeThingsData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { IndustryThreeThingsSection } from './IndustryThreeThingsSection';
import styles from './TimeToValueSection.module.scss';

type TimeToValueSectionProps = {
  eyebrow: string;
  data: IndustryThreeThingsData;
};

/**
 * Figma (Frame 1000003499) pairs an eyebrow with the numbered "How the KPI curve
 * typically moves" grid. IndustryThreeThingsSection (reused below, unmodified) has no
 * eyebrow slot and always left-aligns its heading, so the eyebrow is rendered here as a
 * thin wrapper above it — this keeps the copy without editing the shared component.
 */
export function TimeToValueSection({ eyebrow, data }: TimeToValueSectionProps) {
  return (
    <div>
      <Container>
        <p className={styles.eyebrow}>{eyebrow}</p>
      </Container>
      <IndustryThreeThingsSection data={data} />
    </div>
  );
}
