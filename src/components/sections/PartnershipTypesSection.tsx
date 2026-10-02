import type { PartnershipTypeColumn, PartnershipTypesData } from '@/data/partnerships';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import { highlightText } from '@/utils/highlightText';
import styles from './PartnershipTypesSection.module.scss';

type PartnershipTypesSectionProps = {
  data: PartnershipTypesData;
};

/**
 * Figma "Frame 1000003508": eyebrow+title on the left, an intro paragraph on the right,
 * then two static side-by-side detail columns (not a carousel) — each a bordered card
 * with an overlapping tag pill, an intro, and two label/value rows ("CQI provides",
 * "You gain"). Sits inside the same soft-blue-band as PartnershipWhyChooseSection.
 */
export function PartnershipTypesSection({ data }: PartnershipTypesSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.columns}>
          {data.columns.map((column) => (
            <PartnershipTypeCard key={column.title} column={column} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PartnershipTypeCard({ column }: { column: PartnershipTypeColumn }) {
  return (
    <div className={styles.card}>
      <TagPill label={column.tag} variant={column.tagVariant} />

      <div className={styles.cardBody}>
        <div className={styles.intro}>
          <h3 className={styles.cardTitle}>{column.title}</h3>
          <p className={styles.cardDescription}>{column.description}</p>
        </div>

        <div className={styles.row}>
          <p className={styles.rowLabel}>
            CQI
            <br />
            provides
          </p>
          <p className={styles.rowValue}>{column.cqiProvides}</p>
        </div>

        <div className={styles.row}>
          <p className={styles.rowLabel}>You gain</p>
          <p className={styles.rowValue}>{column.youGain}</p>
        </div>
      </div>
    </div>
  );
}
