import type { IndustrySolutionData } from '@/types/content';
import { airlinesSolutionData } from '@/data/solutions/airlines';
import { bankingSolutionData } from '@/data/solutions/banking';
import { consumerElectronicsSolutionData } from '@/data/solutions/consumer-electronics';
import { insuranceSolutionData } from '@/data/solutions/insurance';
import { telecomSolutionData } from '@/data/solutions/telecom';
import { utilitiesEnergySolutionData } from '@/data/solutions/utilities-energy';

export const industrySlugs = [
  'telecom',
  'airlines',
  'banking',
  'insurance',
  'utilities-energy',
  'consumer-electronics',
] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

const solutions: Record<IndustrySlug, IndustrySolutionData> = {
  telecom: telecomSolutionData,
  airlines: airlinesSolutionData,
  banking: bankingSolutionData,
  insurance: insuranceSolutionData,
  'utilities-energy': utilitiesEnergySolutionData,
  'consumer-electronics': consumerElectronicsSolutionData,
};

export function getIndustrySolution(slug: string): IndustrySolutionData | undefined {
  return solutions[slug as IndustrySlug];
}

export function isIndustrySlug(slug: string): slug is IndustrySlug {
  return industrySlugs.includes(slug as IndustrySlug);
}
