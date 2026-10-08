import type { IndustryThreeThingsData } from '@/types/content';
import { IndustryThreeThingsSection } from './IndustryThreeThingsSection';

type TimeToValueSectionProps = {
  eyebrow: string;
  data: IndustryThreeThingsData;
};

/**
 * Numbered "How the KPI curve typically moves" grid with a centred eyebrow
 * sitting just above the title, inside IndustryThreeThingsSection.
 */
export function TimeToValueSection({ eyebrow, data }: TimeToValueSectionProps) {
  return <IndustryThreeThingsSection data={data} eyebrow={eyebrow} headingAlign="center" plainMobile alignedLine />;
}
