import type { CSSProperties } from 'react';
import type { RuledRow } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { RuledRowsList } from '@/components/ui/RuledRowsList';
import { fluidSpace } from '@/utils/fluidSpace';
import styles from './RuledRowsSection.module.scss';

export type RuledRowsSectionData = {
  eyebrow: string;
  title: string;
  rows: RuledRow[];
};

type RuledRowsSectionProps = {
  data: RuledRowsSectionData;
  /** Figma spacing above/below the section, in px at 1536. */
  spaceTop?: number;
  spaceBottom?: number;
  /** Some Figma lists nudge the description 3px below the label. */
  descriptionOffset?: number;
  /** Eyebrow → title gap (10 on capability pages, 14 on Core functionalities). */
  headingGap?: number;
  /** 'grouped' when the next section shares this one's background (no mobile bottom gap). */
  variant?: 'default' | 'grouped';
};

/** Heading on the left, 829px dashed-rule list on the right (connective tissue, "How it works"). */
export function RuledRowsSection({
  data,
  spaceTop = 0,
  spaceBottom = 0,
  descriptionOffset = 0,
  headingGap = 10,
  variant = 'default',
}: RuledRowsSectionProps) {
  const style = {
    paddingTop: fluidSpace(spaceTop),
    paddingBottom: fluidSpace(spaceBottom),
    '--ruled-description-offset': `${descriptionOffset}px`,
    '--ruled-heading-gap': `${headingGap}px`,
  } as CSSProperties;

  return (
    <section
      className={`${styles.section} ${variant === 'grouped' ? styles.grouped : ''}`.trim()}
      style={style}
    >
      <Container className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <h2 className={styles.title}>{data.title}</h2>
        </div>

        <RuledRowsList rows={data.rows} className={styles.list} />
      </Container>
    </section>
  );
}
