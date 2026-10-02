'use client';

import { useId, useState } from 'react';
import type { LinkItem } from '@/types/content';
import { Button } from '@/components/ui/Button';
import styles from './Accordion.module.scss';

export type AccordionItem = {
  question: string;
  answer: string;
  link?: LinkItem;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Index open on first render (Figma shows the first answer expanded). */
  defaultOpen?: number;
  className?: string;
};

/** Figma "FAQS": dashed-rule list of questions; one answer open at a time. */
export function Accordion({ items, defaultOpen = 0, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={[styles.list, className].filter(Boolean).join(' ')}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className={styles.item}>
            <div className={styles.body}>
              <h3 className={styles.heading}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.iconButton} aria-hidden="true">
                    <img
                      src="/images/shared/common/chevron-up-lg.svg"
                      alt=""
                      width={32}
                      height={32}
                      className={isOpen ? undefined : styles.iconClosed}
                    />
                  </span>
                </button>
              </h3>

              <div id={panelId} className={styles.panel} hidden={!isOpen}>
                <p className={styles.answer}>{item.answer}</p>
                {item.link && (
                  <Button label={item.link.label} href={item.link.href} variant="text" showArrow className={styles.link} />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
