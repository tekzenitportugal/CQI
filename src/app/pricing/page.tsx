import type { Metadata } from 'next';
import { pricingData } from '@/data/pricing';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { PricingComparisonSection } from '@/components/sections/PricingComparisonSection';
import { PricingHeroBanner } from '@/components/sections/PricingHeroBanner';
import { PricingIncludedSection } from '@/components/sections/PricingIncludedSection';
import { PricingVariablesSection } from '@/components/sections/PricingVariablesSection';
import { TaggedInsightsRow } from '@/components/sections/TaggedInsightsRow';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Pricing — CQI',
  description:
    'CQI is priced against the journeys, channels and interaction volumes in scope. Every engagement starts with a proof of concept, so the business case is built on your own data.',
};

export default function PricingPage() {
  return (
    <>
      <PricingHeroBanner data={pricingData.hero} />
      <TaggedInsightsRow
        figmaMobile
        inlineMobileTitle
        largeMobileTags
        eyebrow={pricingData.steps.eyebrow}
        title={pricingData.steps.title}
        titleHighlight={pricingData.steps.titleHighlight}
        description={pricingData.steps.description}
        items={pricingData.steps.items}
      />
      <PricingVariablesSection data={pricingData.variables} />
      <PricingComparisonSection data={pricingData.comparison} />
      <PricingIncludedSection data={pricingData.included} />
      <div className={styles.grayBand}>
        <FaqSection data={pricingData.faq} variant="grouped" />
        <CtaBannerSection data={pricingData.cta} />
      </div>
    </>
  );
}
