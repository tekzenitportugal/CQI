import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fluidSpace } from '@/utils/fluidSpace';
import styles from './FaqSection.module.scss';

export type FaqSectionData = {
  eyebrow: string;
  title: string;
  items: AccordionItem[];
};

type FaqSectionProps = {
  data: FaqSectionData;
  /** Figma default is 200px; override per-page when the section above it needs less clearance. */
  spaceTop?: number;
  /** 'grouped' when the next section (the CTA banner) shares this one's background. */
  variant?: 'default' | 'grouped';
};

/** Centred "Frequently asked" heading over a 1194px accordion. */
export function FaqSection({ data, spaceTop, variant = 'default' }: FaqSectionProps) {
  return (
    <section
      className={`${styles.section} ${variant === 'grouped' ? styles.grouped : ''}`.trim()}
      style={spaceTop !== undefined ? { paddingTop: fluidSpace(spaceTop) } : undefined}
    >
      <Container className={styles.inner}>
        <SectionHeading eyebrow={data.eyebrow} title={data.title} align="center" className={styles.heading} />
        <Accordion items={data.items} className={styles.accordion} />
      </Container>
    </section>
  );
}
