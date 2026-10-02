'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { TeamRoleTab } from '@/types/content';
import type { whoIsItForData } from '@/data/who-is-it-for';
import { CompactDashedList } from '@/components/ui/CompactDashedList';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { VerticalTabsPanel } from '@/components/ui/VerticalTabsPanel';
import { highlightText } from '@/utils/highlightText';
import styles from './TeamNeedsSection.module.scss';

type TeamNeedsSectionProps = {
  data: typeof whoIsItForData.teamNeeds;
};

export function TeamNeedsSection({ data }: TeamNeedsSectionProps) {
  const defaultRole =
    data.roles.find((role) => role.id === data.defaultRole) ?? data.roles[0];
  const [activeRole, setActiveRole] = useState<TeamRoleTab>(defaultRole);
  const hasBullets = activeRole.bullets.length > 0;
  const leftModifier = hasBullets
    ? ''
    : activeRole.link
      ? styles.leftWithLink
      : styles.leftNoBullets;

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
          <div className={[styles.left, leftModifier].filter(Boolean).join(' ')}>
            <div className={styles.intro}>
              <p className={styles.subheading}>
                {highlightText(activeRole.subheading, activeRole.subheadingHighlight, styles.subheadingHighlight)}
              </p>
              <p className={styles.description}>{activeRole.description}</p>
            </div>
            {hasBullets && <CompactDashedList items={activeRole.bullets} />}
            {!hasBullets && activeRole.link && (
              <Link href={activeRole.link.href} className={styles.exploreLink}>
                {activeRole.link.label}
                <img
                  src="/images/shared/common/arrow-explore-dark.svg"
                  alt=""
                  width={16}
                  height={16}
                  className={styles.exploreLinkIcon}
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>

          <VerticalTabsPanel
            tabs={data.roles}
            activeTab={activeRole}
            onTabChange={setActiveRole}
            variant="role"
            tablistLabel="Buyer roles"
            imageAlt=""
            className={styles.tabsPanel}
          />
        </div>
      </Container>
    </section>
  );
}
