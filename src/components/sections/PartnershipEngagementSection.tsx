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
 * the same "faithful desktop, simplified mobile" tradeoff CqiEcosystemSection/
 * ReferenceArchitectureSection made for their own bespoke diagrams.
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
      <img src="/images/company/partnerships/node-circle.svg" alt="" className={styles.nodeBg} aria-hidden="true" />
      <div className={styles.nodeContent}>
        <p className={styles.nodeTitle}>{highlightText(node.title)}</p>
        <p className={styles.nodeDescription}>{node.description}</p>
      </div>
    </li>
  );
}
