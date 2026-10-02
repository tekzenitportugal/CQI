import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroBanner } from '@/components/sections/HeroBanner';
import styles from './NotFoundSection.module.scss';

export type NotFoundSectionData = {
  title: string;
  description: string;
  buttons: { label: string; href: string; variant: 'primary' | 'secondary' }[];
};

type NotFoundSectionProps = {
  data: NotFoundSectionData;
};

/** Figma "ERROR PAGE" (6079:31402). */
export function NotFoundSection({ data }: NotFoundSectionProps) {
  return (
    <HeroBanner>
      <Container className={styles.inner}>
        <div className={styles.badge} aria-hidden="true">
          <div className={styles.badgeInner}>
            <img src="/images/shared/common/face-very-satisfied.svg" alt="" width={80} height={80} />
          </div>
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.actions}>
          {data.buttons.map((button) => (
            <Button key={button.label} label={button.label} href={button.href} variant={button.variant} />
          ))}
        </div>
      </Container>
    </HeroBanner>
  );
}
