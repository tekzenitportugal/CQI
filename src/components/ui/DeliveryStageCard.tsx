import Image from 'next/image';
import Link from 'next/link';
import type { DeliveryStage } from '@/data/implementation';
import { FpoImage } from '@/components/ui/FpoImage';
import styles from './DeliveryStageCard.module.scss';

type DeliveryStageCardProps = {
  stage: DeliveryStage;
  className?: string;
  /** Skip lazy-loading so the image is already cached before its slide comes into view. */
  priority?: boolean;
};

/** Figma "CQI IMPLEMENTATION" delivery card: dark gradient card, photo bleeding off the top-right, copy bottom-left. */
export function DeliveryStageCard({ stage, className, priority }: DeliveryStageCardProps) {
  return (
    <article className={[styles.card, className].filter(Boolean).join(' ')}>
      <div className={styles.media}>
        {stage.fpo ? (
          <FpoImage
            src={stage.image}
            alt=""
            width={stage.imageWidth}
            height={stage.imageHeight}
            fillContainer
            label
            className={styles.mediaFill}
          />
        ) : (
          <Image
            src={stage.image}
            alt=""
            fill
            priority={priority}
            className={styles.photo}
            sizes="(max-width: 992px) 100vw, 708px"
          />
        )}
      </div>

      <div className={styles.copy}>
        <h3 className={styles.title}>{stage.title}</h3>
        <p className={styles.description}>{stage.description}</p>
        <Link href={stage.linkHref} className={styles.link}>
          {stage.linkLabel}
          <img src="/images/shared/common/carousel/arrow-explore.svg" alt="" width={16} height={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
