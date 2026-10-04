'use client';

import { useId, useState } from 'react';
import type { ExpandableBandItem } from '@/types/content';
import { Button } from '@/components/ui/Button';
import { RuledRowsList } from '@/components/ui/RuledRowsList';
import styles from './ExpandableBandList.module.scss';

type ExpandableBandListProps = {
  items: ExpandableBandItem[];
  /** Figma tints each band a fixed shade by position, regardless of which one is open. */
  colors: string[];
  defaultOpen?: number;
  className?: string;
};

/**
 * Figma "CARDS EXPAND": full-width bands, progressively tinted blue, one open at a time.
 * The open band shows its copy (plain text or a ruled-rows list); the rest are just title bars.
 */
export function ExpandableBandList({ items, colors, defaultOpen = 0, className }: ExpandableBandListProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={[styles.list, className].filter(Boolean).join(' ')}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const background = colors[index % colors.length];
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.title} className={styles.item} style={{ background }}>
            <button
              type="button"
              className={styles.header}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(index)}
            >
              {item.title}
            </button>
            <div
              id={panelId}
              className={[styles.collapse, isOpen ? styles.open : ''].filter(Boolean).join(' ')}
            >
              <div className={styles.collapseInner}>
                <div className={styles.panel}>
                  {item.rows ? (
                    <RuledRowsList rows={item.rows} className={styles.rows} />
                  ) : (
                    item.description && (
                      <div className={styles.descriptionWrap}>
                        <p className={styles.description}>{item.description}</p>
                        {item.link && (
                          <Button label={item.link.label} href={item.link.href} variant="text" showArrow />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
