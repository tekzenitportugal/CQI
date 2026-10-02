import type { Metadata } from 'next';
import { securityTrustData } from '@/data/security-trust';
import { ComplianceStandardsSection } from '@/components/sections/ComplianceStandardsSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { GovernanceSection } from '@/components/sections/GovernanceSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { SecurityBlindSpotsSection } from '@/components/sections/SecurityBlindSpotsSection';

export const metadata: Metadata = {
  title: 'Security & Trust — CQI Verified CX',
  description:
    'CQI operates as a data processor. Data is processed inside CQI’s own cloud and is anonymised before models run.',
};

export default function SecurityTrustPage() {
  return (
    <>
      <PageHeroBanner data={securityTrustData.hero} />
      <SecurityBlindSpotsSection data={securityTrustData.blindSpots} />
      <ComplianceStandardsSection data={securityTrustData.compliance} />
      <GovernanceSection data={securityTrustData.governance} />
      <CtaBannerSection data={securityTrustData.cta} />
    </>
  );
}
