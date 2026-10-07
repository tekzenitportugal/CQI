import type { AllianceData } from '@/data/partnerships';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { highlightText } from '@/utils/highlightText';
import styles from './PartnershipAllianceSection.module.scss';

type PartnershipAllianceSectionProps = {
  data: AllianceData;
};

/**
 * Figma "Frame 1000003509": the same title + sub-eyebrow + button left column as
 * PartnershipWhyChooseSection/GovernanceSection, paired with a real photo (not an FPO
 * placeholder) on the right.
 */
export function PartnershipAllianceSection({ data }: PartnershipAllianceSectionProps) {
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
          <Button label={data.button.label} href={data.button.href} variant={data.button.variant} />
        </div>

        <div className={styles.media}>
          <FpoImage
            src={data.image}
            alt={data.title}
            width={data.imageWidth}
            height={data.imageHeight}
            overlay={false}
            sizes="(max-width: 1023px) 100vw, 587px"
            fillContainer
          />
        </div>
      </Container>
    </section>
  );
}
