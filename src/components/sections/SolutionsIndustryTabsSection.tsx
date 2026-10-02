'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { SolutionsIndustryTab, SolutionsIndustryTabsData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { VerticalTabsPanel } from '@/components/ui/VerticalTabsPanel';
import { highlightText } from '@/utils/highlightText';
import styles from './SolutionsIndustryTabsSection.module.scss';

type SolutionsIndustryTabsSectionProps = {
  data: SolutionsIndustryTabsData;
};

export function SolutionsIndustryTabsSection({ data }: SolutionsIndustryTabsSectionProps) {
  const [activeTab, setActiveTab] = useState<SolutionsIndustryTab>(data.tabs[0]);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          title={data.title}
          titleHighlight={data.titleHighlight}
          align="left"
          className={styles.heading}
        />

        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.headline}>
              {highlightText(activeTab.headline, activeTab.headlineHighlight)}
            </p>
            <div className={styles.bottom}>
              <div className={styles.tags}>
                {activeTab.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={activeTab.href} className={styles.exploreLink}>
                Explore
                <img
                  src="/images/shared/common/arrow-explore-dark.svg"
                  alt=""
                  width={16}
                  height={16}
                  className={styles.exploreLinkIcon}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <VerticalTabsPanel
            tabs={data.tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="industry"
            tablistLabel="Industries"
            imageAlt={`${activeTab.label} industry`}
            className={styles.tabsPanel}
          />
        </div>
      </Container>
    </section>
  );
}
