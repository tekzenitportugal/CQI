import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type { SitemapLinksSectionData } from '@/components/sections/SitemapLinksSection';

export const sitemapData = {
  metaTitle: 'Sitemap — CQI Verified CX',
  metaDescription: 'The full structure, useful while the site is in review.',
  hero: {
    title: 'Every page on this site',
    titleHighlight: ['Every page'],
    mobileHighlightBlock: true,
    mobileMinHeight: 880,
    mobilePaddingTop: 56,
    mobileIntroGap: 10,
    eyebrow: 'Sitemap',
    description: 'The full structure, useful while the site is in review.',
  } satisfies HeroCopyData,

  // Figma 6225:44946 mobile: same left-light → right-blue band as Compare CQI.
  heroGradient: 'linear-gradient(283.09deg, #668fff -147.05%, #edf2ff 100%)',

  links: {
    title: 'Every section, every page',
    titleHighlight: ['section', 'page'],
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Product overview', href: '/products/overview' },
          { label: 'Verified CX Analytics', href: '/products/verified-cx-analytics' },
          { label: 'Customer Quality Index', href: '/products/customer-quality-index' },
          { label: 'Root cause & recovery', href: '/products/root-cause-recovery' },
          { label: 'Predictive churn & recontact', href: '/products/predictive-churn-recontact' },
          { label: 'Cross-channel integrity', href: '/products/cross-channel-integrity' },
          { label: 'End-to-end orchestration', href: '/products/end-to-end-orchestration' },
          { label: 'Core functionalities', href: '/products/core-functionalities' },
          { label: 'Fix before failure happens', href: '/products/fix-before-failure-happens' },
          { label: 'How we do it', href: '/products/how-we-do-it' },
          { label: 'Who is it for?', href: '/products/who-is-it-for' },
        ],
      },
      {
        title: 'Deploy',
        links: [
          { label: 'Integrations', href: '/products/integrations' },
          { label: 'CQI implementation', href: '/products/implementation' },
          { label: 'PoC approach', href: '/products/poc-approach' },
          { label: 'Security & Trust', href: '/products/security-trust' },
          { label: 'How we prove it', href: '/products/how-we-prove-it' },
        ],
      },
      {
        title: 'Solutions',
        links: [
          { label: 'All industries', href: '/solutions/all-industry' },
          { label: 'Telecom', href: '/solutions/telecom' },
          { label: 'Airlines', href: '/solutions/airlines' },
          { label: 'Banking', href: '/solutions/banking' },
          { label: 'Insurance', href: '/solutions/insurance' },
          { label: 'Utilities & Energy', href: '/solutions/utilities-energy' },
          { label: 'Consumer electronics', href: '/solutions/consumer-electronics' },
          { label: 'Not listed?', href: '/solutions/not-listed' },
        ],
      },
      {
        title: 'Pricing & value',
        links: [
          { label: 'Pricing', href: '/pricing' },
          { label: 'ROI calculator', href: '/resources/roi-calculator' },
          { label: 'See it live', href: '/resources/see-it-live' },
          { label: 'Request a demo', href: '/request-a-demo' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About us', href: '/company/about' },
          { label: 'Our history', href: '/company/history' },
          { label: 'CQI team', href: '/company/team' },
          { label: 'Partnerships', href: '/company/partnerships' },
          { label: 'Careers', href: '/company/careers' },
          { label: 'Get in touch', href: '/contact' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Resources hub', href: '/resources/articles' },
          { label: 'Articles & blogs', href: '/resources/articles' },
          { label: 'Events & webinars', href: '#' },
          { label: 'Product updates', href: '#' },
          { label: 'Press releases', href: '#' },
          { label: 'Glossary', href: '/resources/glossary' },
        ],
      },
      {
        title: 'Compare',
        links: [
          { label: 'Compare CQI', href: '/resources/compare-cqi' },
          { label: 'vs CCaaS & contact centre reporting', href: '#' },
          { label: 'vs Interaction & speech analytics', href: '#' },
          { label: 'vs VoC & CXM platforms', href: '#' },
          { label: 'vs QA & quality management', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/privacy-policy' },
          { label: 'Terms', href: '/terms' },
          { label: 'Cookies', href: '/cookies' },
        ],
      },
    ],
    mobileColumns: [
      {
        title: 'Product',
        links: [
          { label: 'Product overview', href: '/products/overview' },
          { label: 'Verified CX Analytics', href: '/products/verified-cx-analytics' },
          { label: 'Customer Quality Index', href: '/products/customer-quality-index' },
          { label: 'Root cause & recovery', href: '/products/root-cause-recovery' },
          { label: 'Predictive churn & recontact', href: '/products/predictive-churn-recontact' },
          { label: 'Cross-channel integrity', href: '/products/cross-channel-integrity' },
          { label: 'End-to-end orchestration', href: '/products/end-to-end-orchestration' },
          { label: 'Core functionalities', href: '/products/core-functionalities' },
          { label: 'Fix before failure happens', href: '/products/fix-before-failure-happens' },
          { label: 'How we do it', href: '/products/how-we-do-it' },
          { label: 'Who is it for?', href: '/products/who-is-it-for' },
        ],
      },
      {
        title: 'Deploy',
        links: [
          { label: 'Integrations', href: '/products/integrations' },
          { label: 'CQI implementation', href: '/products/implementation' },
          { label: 'PoC approach', href: '/products/poc-approach' },
          { label: 'Security & Trust', href: '/products/security-trust' },
          { label: 'How we prove it', href: '/products/how-we-prove-it' },
        ],
      },
      {
        title: 'Solutions',
        links: [
          { label: 'All industries', href: '/solutions/all-industry' },
          { label: 'Telecom', href: '/solutions/telecom' },
          { label: 'Airlines', href: '/solutions/airlines' },
          { label: 'Banking', href: '/solutions/banking' },
          { label: 'Insurance', href: '/solutions/insurance' },
          { label: 'Utilities & Energy', href: '/solutions/utilities-energy' },
          { label: 'Consumer electronics', href: '/solutions/consumer-electronics' },
          { label: 'Not listed?', href: '/solutions/not-listed' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Articles & blogs', href: '/resources/articles' },
          { label: 'Glossary', href: '/resources/glossary' },
          { label: 'ROI calculator', href: '/resources/roi-calculator' },
          { label: 'Compare CQI', href: '/resources/compare-cqi' },
          { label: 'See it live', href: '/resources/see-it-live' },
          { label: 'Site map', href: '/sitemap' },
        ],
      },
      {
        title: 'Pricing',
        links: [{ label: 'Pricing', href: '/pricing' }],
      },
      {
        title: 'Company',
        links: [
          { label: 'About us', href: '/company/about' },
          { label: 'Our history', href: '/company/history' },
          { label: 'CQI team', href: '/company/team' },
          { label: 'Partnerships', href: '/company/partnerships' },
          { label: 'Careers', href: '/company/careers' },
          { label: 'Get in touch', href: '/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/privacy-policy' },
          { label: 'Terms', href: '/terms' },
          { label: 'Cookies', href: '/cookies' },
        ],
      },
    ],
    footnote: {
      before: 'Integration detail pages sit under ',
      linkLabel: 'Integrations',
      linkHref: '/products/integrations',
      after: ' — 25 of them.',
    },
  } satisfies SitemapLinksSectionData,
};
