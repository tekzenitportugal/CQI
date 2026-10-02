import Link from 'next/link';
import type { LinkItem } from '@/types/content';
import { Button } from '@/components/ui/Button';
import styles from './CapabilityPagerSection.module.scss';

export type CapabilityPagerData = {
  links: LinkItem[];
  prev: LinkItem;
  next: LinkItem;
};

type CapabilityPagerSectionProps = {
  data: CapabilityPagerData;
};

/** Figma "Frame 1000003359": grey 300px band with overview links and previous/next capability. */
export function CapabilityPagerSection({ data }: CapabilityPagerSectionProps) {
  return (
    <nav className={styles.section} aria-label="Capabilities">
      <div className={styles.inner}>
        <div className={styles.links}>
          {data.links.map((link) => (
            <Button key={link.label} label={link.label} href={link.href} variant="text" showArrow />
          ))}
        </div>

        <div className={styles.pager}>
          <Link href={data.prev.href} className={styles.pagerLink} rel="prev">
            <img src="/images/shared/common/arrow-left-lg.svg" alt="" width={40} height={40} aria-hidden="true" />
            <span>{data.prev.label}</span>
          </Link>
          <Link href={data.next.href} className={`${styles.pagerLink} ${styles.pagerNext}`} rel="next">
            <span>{data.next.label}</span>
            <img src="/images/shared/common/arrow-right-lg.svg" alt="" width={40} height={40} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
