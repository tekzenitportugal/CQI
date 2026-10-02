'use client';

import { Fragment } from 'react';
import { FpoImage } from '@/components/ui/FpoImage';
import styles from './VerticalTabsPanel.module.scss';

export type VerticalTabItem = {
  id: string;
  label: string;
  image?: string;
  imageObjectPosition?: string;
  imageFlipX?: boolean;
};

type VerticalTabsPanelProps<T extends VerticalTabItem> = {
  tabs: T[];
  activeTab: T;
  onTabChange: (tab: T) => void;
  variant?: 'industry' | 'role';
  tablistLabel: string;
  imageAlt: string;
  className?: string;
};

export function VerticalTabsPanel<T extends VerticalTabItem>({
  tabs,
  activeTab,
  onTabChange,
  variant = 'industry',
  tablistLabel,
  imageAlt,
  className,
}: VerticalTabsPanelProps<T>) {
  const variantClass = variant === 'role' ? styles.variantRole : styles.variantIndustry;

  return (
    <div className={[styles.panel, variantClass, className].filter(Boolean).join(' ')}>
      <div className={styles.tabs} role="tablist" aria-label={tablistLabel}>
        {tabs.map((tab) => {
          const isActive = activeTab.id === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.tab} ${isActive ? styles.tabActive : ''}`.trim()}
              onClick={() => onTabChange(tab)}
            >
              <span className={styles.tabLabel}>
                {tab.label.split('\n').map((line, index, lines) => (
                  <Fragment key={`${tab.id}-${line}`}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </Fragment>
                ))}
              </span>
            </button>
          );
        })}
      </div>
      <div className={styles.tabImage} role="tabpanel" aria-label={activeTab.label.replace(/\n/g, ' ')}>
        <FpoImage
          key={activeTab.id}
          src={activeTab.image ?? '/images/shared/common/fpo.svg'}
          alt={imageAlt}
          width={618}
          height={448}
          overlay={false}
          objectPosition={activeTab.imageObjectPosition}
          flipX={activeTab.imageFlipX}
          sizes="(max-width: 992px) 100vw, 618px"
          fillContainer
        />
      </div>
    </div>
  );
}
