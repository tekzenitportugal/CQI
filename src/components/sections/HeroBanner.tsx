import type { ReactNode } from 'react';
import styles from './HeroBanner.module.scss';

type HeroBannerProps = {
  children: ReactNode;
};

/** Full-width 864px gradient band (Figma Rectangle 85/86). Header lives in root layout. */
export function HeroBanner({ children }: HeroBannerProps) {
  return <div className={styles.banner}>{children}</div>;
}
