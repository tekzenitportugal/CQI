import type { WhyChooseData } from '@/data/partnerships';
import { GhostLink } from '@/components/ui/GhostLink';
import { Container } from '@/components/ui/Container';
import { RuledRowsList } from '@/components/ui/RuledRowsList';
import { highlightText } from '@/utils/highlightText';
import styles from './PartnershipWhyChooseSection.module.scss';

type PartnershipWhyChooseSectionProps = {
  data: WhyChooseData;
};

/**
 * Figma "Frame 1000003329": left is a title + sub-eyebrow paragraph + button, right is a
 * label-less RuledRowsList aligned to the sub-block — the same shape GovernanceSection
 * used on the security-trust page. Built as its own local component (rather than
 * generalising GovernanceSection) since that one is typed to security-trust's data shape.
 * Sits at the bottom of the same soft-blue-band PartnershipTypesSection starts.
 */
export function PartnershipWhyChooseSection({ data }: PartnershipWhyChooseSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.text}>
            <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
            <div className={styles.sub}>
              <p className={styles.label}>{data.subLabel}</p>
              <p className={styles.description}>{data.subDescription}</p>
            </div>
          </div>
          <GhostLink label={data.button.label} href={data.button.href} />
        </div>

        <RuledRowsList rows={data.rows} className={styles.list} />
      </Container>
    </section>
  );
}
