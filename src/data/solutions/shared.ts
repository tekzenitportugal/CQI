import type {
  CtaBannerData,
  IndustryFrictionData,
  IndustryScenariosData,
  IndustryTagGroup,
  IndustryThreeThingsData,
  WhereCqiFitsData,
} from '@/types/content';

export const defaultFrictionImage = '/images/solutions/telecom/dashboard.png';

export function mapTagGroups(
  groups: { label: string; tags: string[] }[],
): IndustryTagGroup[] {
  return groups.map((group) => ({
    label: group.label,
    tags: group.tags,
    variant:
      group.label === 'What stays invisible'
        ? 'invisible'
        : group.label === 'CQI GOALS'
          ? 'goals'
          : 'signals',
  }));
}

export function mapThreeThings(raw: {
  title: string;
  titleHighlight: string | string[];
  items: IndustryThreeThingsData['items'];
}): IndustryThreeThingsData {
  const highlights = Array.isArray(raw.titleHighlight)
    ? raw.titleHighlight
    : [raw.titleHighlight];
  return {
    title: raw.title,
    titleHighlight: highlights,
    items: raw.items,
  };
}

export function mapScenarios(raw: {
  title: string;
  titleHighlight: string | string[];
  items: IndustryScenariosData['scenarios'];
}): IndustryScenariosData {
  const highlights = Array.isArray(raw.titleHighlight)
    ? raw.titleHighlight
    : [raw.titleHighlight];
  return {
    title: raw.title,
    titleHighlight: highlights,
    scenarios: raw.items,
  };
}

export function mapFriction(
  raw: Omit<IndustryFrictionData, 'tagGroups' | 'image'> & {
    tagGroups: { label: string; tags: string[] }[];
  },
  image = defaultFrictionImage,
): IndustryFrictionData {
  return {
    ...raw,
    image,
    tagGroups: mapTagGroups(raw.tagGroups),
  };
}

export const industryPlugIn = {
  eyebrow: 'where it plugs in',
  title: 'Enrichment, not rip-and-replace.',
  description:
    'CQI verifies across the platforms already in place and pushes action back into them.',
  ctas: [
    { label: 'Integrations', href: '/products/integrations', variant: 'primary' as const },
    { label: 'How the PoC runs', href: '/products/poc-approach', variant: 'secondary' as const },
    { label: 'How we prove it', href: '/products/how-we-prove-it', variant: 'secondary' as const },
  ],
} satisfies WhereCqiFitsData;

export function industryCtaBanner(
  sectorLabel: string,
  titleHighlight: string,
  image: string = '/images/solutions/telecom/cta-tower.png',
  imagePosition: string = 'center top',
  imageInset?: CtaBannerData['imageInset'],
): CtaBannerData {
  return {
    title: `See ${sectorLabel} on your own data`,
    titleHighlight: [titleHighlight],
    description:
      'A two-week non-intrusive proof of value, with your baseline, your journeys and your friction map.',
    image,
    imageWidth: 579,
    imageHeight: 289,
    imagePosition,
    imageInset,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
      { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' },
    ],
  };
}
