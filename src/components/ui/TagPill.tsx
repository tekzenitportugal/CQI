import type { IndustryTagGroup } from '@/types/content';
import styles from './TagPill.module.scss';

type TagPillProps = {
  label: string;
  variant: IndustryTagGroup['variant'];
};

export function TagPill({ label, variant }: TagPillProps) {
  return (
    <span className={`${styles.pill} ${styles[variant]}`}>
      {label}
    </span>
  );
}
