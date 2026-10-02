import type { LegalPageSectionData } from '@/components/sections/LegalPageSection';

export const privacyPolicyMeta = {
  metaTitle: 'Privacy Policy — CQI Verified CX',
  metaDescription:
    'How CQiSense LTD handles personal data, as a controller for this website, and as a processor for client deployments of CQI Sense.',
};

export const privacyPolicyData = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  intro:
    'How CQiSense LTD handles personal data, as a controller for this website, and as a processor for client deployments of CQI Sense.',
  effectiveDate: '1 October 2026',
  contactEmail: 'marketing@cqisense.com',
  sections: [
    {
      title: 'Who we are',
      body: 'CQiSense LTD (“CQI”, “we”) is the data controller for personal data collected through this website. For personal data processed inside a client deployment of CQI Sense, the client is the controller and CQI acts solely as a processor on documented instructions, under Article 28 of the UK GDPR and Regulation (EU) 2016/679. Privacy enquiries and data-subject requests: marketing@cqisense.com.',
    },
    {
      title: 'What this website collects',
      body: 'Contact details you submit through a demo or contact form (name, work email, organisation, role, sector and approximate interaction volume); correspondence you send us; and aggregate usage measurement where you have consented to analytics cookies. We do not collect special category data through this site and we do not use automated decision-making or profiling on website visitors.',
    },
    {
      title: 'Lawful basis',
      body: 'Form submissions and correspondence are processed on the basis of legitimate interests in responding to a business enquiry, and where applicable to take steps at your request prior to entering a contract. Analytics and marketing cookies are processed on the basis of consent, which you may withdraw at any time. Our legitimate interests assessment is available on request.',
    },
    {
      title: 'Retention',
      body: 'Enquiry records are retained for 24 months from last contact unless a commercial relationship begins, in which case they are retained for the life of that relationship and for six years afterwards to meet statutory and contractual record-keeping obligations. Analytics data is retained in aggregate form for 14 months.',
    },
    {
      title: 'Client deployments',
      body: 'Within a deployment, CQI processes interaction content and operational records supplied by the client. Personal data is anonymised before any model runs, so no personal data reaches the AI layer. Direct identifiers are masked or hashed before analytics, and re-identification is possible only through a secure key vault under client-controlled access. Scope, instructions, retention and deletion are fixed in the Data Processing Agreement that accompanies every deployment.',
    },
    {
      title: 'International transfers',
      body: 'Hosting region is selected per client and agreed at scoping. Where personal data is transferred outside the UK or EEA, transfers are made under UK International Data Transfer Agreements or the EU Standard Contractual Clauses, supported by a transfer risk assessment. Regional regimes are respected where they apply, including CITRA requirements in Kuwait.',
    },
    {
      title: 'Sub-processors',
      body: 'CQI uses a limited set of sub-processors, principally Google Cloud for hosting. Each is bound by written terms no less protective than those in our client DPAs, is assessed before engagement and reviewed periodically. Clients are notified of intended changes to the sub-processor list with a reasonable opportunity to object.',
    },
    {
      title: 'Security',
      body: 'Data is encrypted in transit with TLS 1.3 and at rest with AES-256. Access is governed by role-based access control with multi-factor authentication for administrators. Tenants are logically separated, and workloads run in SOC 2 and ISO 27001 certified data centres. CQI operates an ISO 27001 aligned information security management system, with vulnerability scanning and independent security testing.',
    },
    {
      title: 'Personal data breaches',
      body: 'Where CQI acts as a processor, we notify the affected client without undue delay after becoming aware of a personal data breach, and in any event within 72 hours, providing the information the controller needs to meet its own obligations. Where CQI acts as a controller, we notify the relevant supervisory authority and affected individuals as required.',
    },
    {
      title: 'Your rights',
      body: 'You have the right to access, rectify, erase, restrict or object to processing of your personal data, to data portability, and to withdraw consent at any time. Requests relating to a client deployment are referred to that client as controller and supported by CQI. Requests are answered within one month. You may also complain to your supervisory authority; in the UK this is the Information Commissioner’s Office.',
    },
    {
      title: 'Changes to this policy',
      body: 'Material changes are published on this page and, where a change affects a live deployment, notified to the client under the terms of the applicable DPA.',
    },
  ],
  footnote:
    'Questions about this policy: marketing@cqisense.com. Registered office and company number to be added before publication.',
} satisfies LegalPageSectionData;
