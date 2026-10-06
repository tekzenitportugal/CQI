import type { EngagementData, EngagementNode } from '@/data/partnerships';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { highlightText } from '@/utils/highlightText';
import styles from './PartnershipEngagementSection.module.scss';

type PartnershipEngagementSectionProps = {
  data: EngagementData;
};

/**
 * Figma "Group 735": 4 circular nodes in a zigzag, threaded by a dashed connector line
 * with dot markers (Group 440). The node circles, connector paths and dots are all
 * exported 1:1 from Figma as SVGs and positioned with the exact percentages read back
 * from the design (relative to the 1169×589 diagram box), so the desktop rendering is a
 * faithful reproduction rather than a hand-drawn approximation. Below `lg`, where the
 * absolute zigzag no longer reads well, this simplifies to a plain stacked card list —
 * on mobile (Figma 6225:45799) the circles zigzag vertically with their own connector art.
 */
export function PartnershipEngagementSection({ data }: PartnershipEngagementSectionProps) {
  const [n1, n2, n3, n4] = data.nodes;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          align="center"
          className={styles.heading}
        />

        <div className={styles.diagram}>
          <svg className={styles.mConnectors} viewBox="0 0 303 1242" fill="none" aria-hidden="true">
            <g strokeLinecap="round" strokeDasharray="4 4">
              <path d="M151 315C234.4 315 302 246.5 302 162C302 77.5 234.4 9 151 9" stroke="#4D4D4D" />
              <path d="M151 315C67.6 315 0 383.5 0 468C0 552.5 67.6 621 151 621" stroke="#AFAFAF" />
              <path d="M151 621C234.4 621 302 689.5 302 774C302 858.5 234.4 927 151 927" stroke="#AFAFAF" />
              <path d="M151 927C67.6 927 0 995.5 0 1080C0 1164.5 67.6 1233 151 1233" stroke="#AFAFAF" />
            </g>
            <circle cx="151" cy="9" r="9" fill="#0044FF" />
            <g fill="#AFAFAF">
              <circle cx="151" cy="315" r="9" />
              <circle cx="151" cy="621" r="9" />
              <circle cx="151" cy="927" r="9" />
              <circle cx="151" cy="1233" r="9" />
            </g>
          </svg>
          <div className={styles.connectors} aria-hidden="true">
            <img src="/images/company/partnerships/connector-main.svg" alt="" className={styles.connectorMain} />
            <img
              src="/images/company/partnerships/connector-accent.svg"
              alt=""
              className={styles.connectorAccent}
            />
            <img src="/images/company/partnerships/connector-dot-blue.svg" alt="" className={styles.dotBlue} />
            <img src="/images/company/partnerships/connector-dot-gray.svg" alt="" className={styles.dotGray1} />
            <img src="/images/company/partnerships/connector-dot-gray.svg" alt="" className={styles.dotGray2} />
            <img src="/images/company/partnerships/connector-dot-gray.svg" alt="" className={styles.dotGray3} />
          </div>

          <ol className={styles.nodes}>
            <EngagementNodeItem node={n1} index={0} />
            <EngagementNodeItem node={n2} index={1} />
            <EngagementNodeItem node={n3} index={2} />
            <EngagementNodeItem node={n4} index={3} />
          </ol>
        </div>
      </Container>
    </section>
  );
}

function EngagementNodeItem({ node, index }: { node: EngagementNode; index: number }) {
  return (
    <li className={styles.node} data-index={index}>
      <div className={styles.nodeBox}>
        <img src="/images/company/partnerships/m-circle.svg" alt="" className={styles.mCircle} aria-hidden="true" />
        <img src="/images/company/partnerships/node-circle.svg" alt="" className={styles.nodeBg} aria-hidden="true" />
        <div className={styles.nodeContent}>
          <p className={styles.nodeTitle}>{highlightText(node.title)}</p>
          <p className={styles.nodeDescription}>{node.description}</p>
        </div>
      </div>
    </li>
  );
}
