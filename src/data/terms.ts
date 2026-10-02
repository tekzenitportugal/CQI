import type { LegalPageSectionData } from '@/components/sections/LegalPageSection';

export const termsMeta = {
  metaTitle: 'Terms of Service — CQI Verified CX',
  metaDescription:
    'The terms on which CQiSense LTD provides this website and, separately, the CQI Sense platform.',
};

export const termsData = {
  eyebrow: 'Legal',
  title: 'Terms of service',
  intro: 'The terms on which CQiSense LTD provides this website and, separately, the CQI Sense platform.',
  effectiveDate: '1 October 2026',
  contactEmail: 'marketing@cqisense.com',
  sections: [
    {
      title: 'Scope',
      body: 'These terms govern use of this website. Use of the CQI Sense platform is governed by the written agreement between CQiSense LTD and the client, together with its Data Processing Agreement and order documentation. Where the two conflict in respect of the platform, the signed agreement prevails.',
    },
    {
      title: 'Acceptable use',
      body: 'You may view, download and print material from this site for your own internal business evaluation. You may not use this site to attempt unauthorised access, to interfere with its operation or security, to scrape or systematically extract content, or for any unlawful purpose.',
    },
    {
      title: 'Intellectual property',
      body: 'All content on this site, including text, design, product illustrations, diagrams and the CQI and CQI Sense marks, is owned by CQiSense LTD or its licensors. Third-party platform names are the marks of their respective owners and are used descriptively to identify integration categories; their use implies no endorsement, partnership or certification unless separately stated in writing.',
    },
    {
      title: 'Forward-looking and indicative material',
      body: 'Outcome ranges, ROI calculations and KPI figures shown on this site are indicative ceilings drawn from CQI programme material. They are not averages, are not portable between sectors, and are not a representation, warranty or guarantee of results. Any figure a client can rely on is the one established during a proof of concept measured against a control group and recorded in the applicable agreement.',
    },
    {
      title: 'Platform terms',
      body: 'Subscription scope, service levels, support commitments, security obligations and liability are set out in the client agreement and are not varied by this website. Proof-of-concept engagements are governed by their own scoping document.',
    },
    {
      title: 'Data processing',
      body: 'A Data Processing Agreement accompanies every deployment, covering instructions, purpose limitation, confidentiality, security measures, sub-processors, international transfers, assistance with data-subject rights, audit, and deletion or return of data on termination.',
    },
    {
      title: 'Third-party links',
      body: 'This site may link to third-party resources. CQiSense LTD does not control and is not responsible for their content, availability or privacy practices.',
    },
    {
      title: 'Disclaimer and liability',
      body: 'This website is provided on an “as is” basis. To the fullest extent permitted by law, CQiSense LTD excludes implied warranties in respect of this website and accepts no liability for indirect or consequential loss, or for loss of profit, revenue, data or goodwill arising from use of it. Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for any other liability that cannot lawfully be limited. Liability in respect of the platform is governed exclusively by the client agreement.',
    },
    {
      title: 'Changes',
      body: 'We may update these terms. The version published on this page at the time of your use applies.',
    },
    {
      title: 'Governing law',
      body: 'These terms and any non-contractual obligations arising from them are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction.',
    },
  ],
  footnote:
    'Questions about this policy: marketing@cqisense.com. Registered office and company number to be added before publication.',
} satisfies LegalPageSectionData;
