import type { Metadata } from 'next';
import { privacyPolicyData, privacyPolicyMeta } from '@/data/privacy-policy';
import { LegalPageSection } from '@/components/sections/LegalPageSection';

export const metadata: Metadata = {
  title: privacyPolicyMeta.metaTitle,
  description: privacyPolicyMeta.metaDescription,
};

export default function PrivacyPolicyPage() {
  return <LegalPageSection data={privacyPolicyData} />;
}
