'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { IndustryTab } from '@/types/content';
import type { homepageData } from '@/data/homepage';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { VerticalTabsPanel } from '@/components/ui/VerticalTabsPanel';
import { highlightText } from '@/utils/highlightText';
import styles from './IndustriesSection.module.scss';

type IndustriesSectionProps = {
  data: typeof homepageData.industries;
};

export function IndustriesSection({ data }: IndustriesSectionProps) {
  const defaultTab =
    data.items.find((item) => item.id === data.defaultIndustry) ?? data.items[0];
  const [activeTab, setActiveTab] = useState<IndustryTab>(defaultTab);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.left}>
            <SectionHeading
              title={data.title}
              titleHighlight={data.titleHighlight}
              align="left"
              className={styles.sectionHeading}
            />
            <div className={styles.leftContent}>
              <p className={styles.description}>
                {highlightText(activeTab.description, activeTab.descriptionHighlight)}
              </p>
              <Link href={activeTab.href} className={styles.exploreLink}>
                {data.linkLabel}
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
            tabs={data.items}
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
