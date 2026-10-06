import type { CtaBannerData, PageHeroData, TeamRoleTab } from '@/types/content';

export const whoIsItForData = {
  hero: {
    title: 'One verified CX view, five different jobs',
    titleHighlight: ['five different jobs'],
    eyebrow: 'Who is it for?',
    description:
      'CQI is bought by CX and customer success leadership, validated by IT and data, and used every day by operations and the front line. Each of them needs a different thing from the same verified view.',
    image: '/images/product/who-is-it-for/hero.png',
    mobileImage: '/images/product/who-is-it-for/hero-mobile.png',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  teamNeeds: {
    title: 'What each team needs from the same verified view',
    titleHighlight: ['each team needs'],
    defaultRole: 'cx-leadership',
    roles: [
      {
        id: 'cx-leadership',
        label: 'C-level & VP:\nCX, Customer Success, Operations, Digital, Strategy',
        mobileLabel: 'C-level & VP',
        subheading: 'A defensible read on CX health, continuously',
        subheadingHighlight: ['defensible read'],
        description:
          'Replace periodic NPS reporting with an always-on view that ties CX to churn, cost-to-serve and revenue at risk, and shows the quantified migration of customers between risk bands over time.',
        bullets: [
          'Board-ready narrative: what improved, by how much, and because of what',
          'Prioritisation by impact rather than by loudest complaint',
          'Outcome tracking against a built-in control group',
        ],
        image: '/images/product/who-is-it-for/role-cx-leadership.png',
      },
      {
        id: 'it-data',
        label: 'IT & Data leadership',
        mobileLabel: 'IT & Data leadership',
        subheading: "Architecture that doesn't force\na replacement",
        subheadingHighlight: ["doesn't force\na replacement"],
        description:
          'A connector and adapter library with pre-defined pipelines, deployed on Google Cloud with your preferred hosting location, PII redaction before models run, and RBAC throughout. The proof of concept requires no backend integration.',
        bullets: [
          'GDPR and ISO 27001 compliant as a data processor',
          "Processed in CQI's own cloud; anonymisation before inference",
          'Horizontally scalable; CQI performs the computation',
        ],
        image: '/images/product/who-is-it-for/role-it-data.png',
      },
      {
        id: 'contact-ops',
        label: 'Contact centre & operations management',
        mobileLabel: 'Contact centre\n& operations management',
        subheading: 'Root cause, owner, and a clock',
        subheadingHighlight: ['Root cause', 'owner'],
        description:
          "Each case arrives with the customer's own words, the exact promise and who made it, the SLA time remaining, system evidence and an assigned root cause, then routes to an owner and closes on verification.",
        bullets: [],
        image: '/images/product/who-is-it-for/role-contact-ops.png',
      },
      {
        id: 'quality-workforce',
        label: 'Quality & workforce teams',
        mobileLabel: 'Quality &\nworkforce teams',
        subheading: 'Promise-keeping as a measurable skill',
        subheadingHighlight: ['measurable skill'],
        description:
          'Move QA from sampled scorecards to promise-keeping across every interaction: promises made versus pending, strictly met, and met but late, benchmarked per agent, with the root cause pointing at topic, channel, tooling or knowledge.',
        bullets: [],
        image: '/images/product/who-is-it-for/role-quality-workforce.png',
        imageObjectPosition: 'center bottom',
      },
      {
        id: 'front-line',
        label: 'Front line:\nagents, crew, field, branch',
        mobileLabel: 'Front line: agents, crew,\nfield, branch',
        subheading: 'Context before the conversation starts',
        subheadingHighlight: ['before the conversation starts'],
        description:
          'The person in front of the customer sees the state, the reason for it, and the action they are authorised to take, so recovery happens in the moment rather than in a follow-up nobody makes.',
        bullets: [],
        image: '/images/product/who-is-it-for/role-front-line.png',
      },
      {
        id: 'partners',
        label: 'Partners & systems integrators',
        mobileLabel: 'Partners &\nsystems integrators',
        subheading: 'A verified intelligence layer\nfor existing offerings',
        subheadingHighlight: ['verified intelligence layer'],
        description:
          'Add an outcome-driven layer to CX, CRM and contact-centre practices, with fast time-to-value and lightweight integration.',
        bullets: [],
        link: { label: 'Partnership model', href: '/company/partnerships' },
        image: '/images/product/who-is-it-for/role-partners.png',
      },
    ] satisfies TeamRoleTab[],
  },

  whereBelongs: {
    title: 'Where CQI belongs',
    titleHighlight: ['CQI'],
    description:
      'CQI is built for complex service industries with high interaction volumes, multi-channel journeys and operational dependencies between the promise and its delivery.',
    cta: { label: 'Not listed? Talk to us', href: '/solutions/not-listed', variant: 'primary' as const },
    industries: [
      {
        label: 'Telecom',
        href: '/solutions/telecom',
        emphasis: true,
        top: '-5.77%',
        left: '50%',
        dot: { top: '0%', left: '50%' },
      },
      {
        label: 'Healthcare',
        href: '/solutions/not-listed',
        emphasis: false,
        top: '16.08%',
        left: '3%',
        dot: { top: '14.64%', left: '14.64%' },
      },
      {
        label: 'Retail',
        href: '/solutions/not-listed',
        emphasis: false,
        top: '49.92%',
        left: '-8.08%',
        dot: { top: '50%', left: '0%' },
      },
      {
        label: 'Consumer Electronics',
        href: '/solutions/consumer-electronics',
        emphasis: true,
        top: '83.92%',
        left: '-1.77%',
        dot: { top: '85.36%', left: '14.64%' },
      },
      {
        label: 'Airlines',
        href: '/solutions/airlines',
        emphasis: true,
        top: '16.08%',
        left: '95.46%',
        dot: { top: '14.64%', left: '85.36%' },
      },
      {
        label: 'Banking',
        href: '/solutions/banking',
        emphasis: true,
        top: '49.92%',
        left: '109.23%',
        dot: { top: '50%', left: '100%' },
      },
      {
        label: 'Insurance',
        href: '/solutions/insurance',
        emphasis: true,
        top: '83.92%',
        left: '96.62%',
        dot: { top: '85.36%', left: '85.36%' },
      },
      {
        label: 'Utilities & Energy',
        href: '/solutions/utilities-energy',
        emphasis: true,
        top: '105.77%',
        left: '49.92%',
        dot: { top: '100%', left: '50%' },
      },
    ],
  },

  cta: {
    title: 'Bring your buying committee',
    titleHighlight: ['buying committee'],
    description: 'One session covering the executive view, the operating model and the architecture.',
    image: '/images/product/capabilities/cta-headset.jpg',
    imageWidth: 579,
    imageHeight: 289,
    // Figma crop (node 6225:42153): 300.48% tall, -94.19% from the top
    imagePosition: 'center 46.99%',
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
      { label: 'Security & trust', href: '/products/security-trust', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};
