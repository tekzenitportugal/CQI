import Image from 'next/image';
import type { IconFeatureCard } from '@/types/content';
import styles from './FeatureIconCard.module.scss';

type FeatureIconCardProps = IconFeatureCard;

export function FeatureIconCard({ icon, title, description, variant = 'dark' }: FeatureIconCardProps) {
  return (
    <article className={`${styles.card} ${variant === 'accent' ? styles.cardAccent : ''}`.trim()}>
      <Image src={icon} alt="" width={72} height={72} className={styles.icon} />
      <div className={styles.copy}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
