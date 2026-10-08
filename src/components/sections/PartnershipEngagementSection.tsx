import type { EngagementData, EngagementNode } from '@/data/partnerships';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { highlightText } from '@/utils/highlightText';
import { EngagementProgress } from './EngagementProgress';
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

        <EngagementProgress className={styles.diagram}>
          <ol className={styles.nodes}>
            <EngagementNodeItem node={n1} index={0} />
            <EngagementNodeItem node={n2} index={1} />
            <EngagementNodeItem node={n3} index={2} />
            <EngagementNodeItem node={n4} index={3} />
          </ol>
        </EngagementProgress>
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
