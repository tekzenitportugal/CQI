import type { RoutingStateCard } from '@/types/content';
import styles from './RoutingTreatmentCard.module.scss';

type RoutingTreatmentCardProps = RoutingStateCard & {
  className?: string;
};

export function RoutingTreatmentCard({
  title,
  description,
  icon,
  color,
  className,
}: RoutingTreatmentCardProps) {
  return (
    <article className={[styles.card, className].filter(Boolean).join(' ')}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.sentimentFilter} aria-hidden="true">
          <span className={styles.sentimentCircle} style={{ backgroundColor: color }}>
            <img src={icon} alt="" width={21} height={21} />
          </span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
