import type { Metadata } from 'next';
import { partnershipsData } from '@/data/partnerships';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { PartnershipAllianceSection } from '@/components/sections/PartnershipAllianceSection';
import { PartnershipEngagementSection } from '@/components/sections/PartnershipEngagementSection';
import { PartnershipTypesSection } from '@/components/sections/PartnershipTypesSection';
import { PartnershipWhyChooseSection } from '@/components/sections/PartnershipWhyChooseSection';

export const metadata: Metadata = {
  title: 'Partnerships — CQI Verified CX',
  description:
    'CQI operates a focused, outcome-led partner model. Partners add a verified, outcome-driven intelligence layer to their existing CX, CRM and contact-centre offerings.',
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHeroBanner data={partnershipsData.hero} />
      <PartnershipEngagementSection data={partnershipsData.engagement} />
      <PartnershipTypesSection data={partnershipsData.partnershipTypes} />
      <PartnershipWhyChooseSection data={partnershipsData.whyChoose} />
      <PartnershipAllianceSection data={partnershipsData.alliance} />
      <CtaBannerSection data={partnershipsData.cta} variant="flushTop" />
    </>
  );
}
