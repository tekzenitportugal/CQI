import type { CSSProperties } from 'react';
import { Container } from '@/components/ui/Container';
import { GhostLink } from '@/components/ui/GhostLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { airlinesPageData, SeatState } from '@/data/solutions/airlines-page';
import styles from './AirlinesPulseSection.module.scss';

type AirlinesPulseSectionProps = {
  data: typeof airlinesPageData.pulse;
};

const FACE: Record<SeatState, string> = {
  H: 'face-healthy',
  F: 'face-friction',
  E: 'face-eroding',
  R: 'face-risk',
  S: 'face-risk',
};

const TONE: Record<SeatState, string> = {
  H: styles.healthy,
  F: styles.friction,
  E: styles.eroding,
  R: styles.risk,
  S: styles.silent,
};

function Sentiment({ state, className }: { state: SeatState; className: string }) {
  return (
    <span className={`${className} ${TONE[state]}`}>
      <img src={`/images/solutions/airlines/${FACE[state]}.svg`} alt="" aria-hidden="true" />
    </span>
  );
}

/** Customer Pulse: a cabin of coloured seats behind a legend and the selected passenger's state card. */
export function AirlinesPulseSection({ data }: AirlinesPulseSectionProps) {
  const { card, selectedSeat } = data;

  return (
    <section className={styles.section}>
      <div className={styles.plane} aria-hidden="true">
        <img src="/images/solutions/airlines/plane.svg" alt="" className={styles.planeImage} />
        {data.seatBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className={styles.seatBlock}
            style={{ '--seat-left': block.left, '--seat-top': block.top } as CSSProperties}
          >
            {block.rows.map((row, rowIndex) =>
              row.split('').map((state, colIndex) => {
                const selected =
                  selectedSeat.block === blockIndex && selectedSeat.row === rowIndex && selectedSeat.col === colIndex;
                return (
                  <span key={`${rowIndex}-${colIndex}`} className={`${styles.seat} ${selected ? styles.seatSelected : ''}`.trim()}>
                    <Sentiment state={state as SeatState} className={styles.seatFace} />
                  </span>
                );
              }),
            )}
          </div>
        ))}
      </div>

      <Container className={styles.inner}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          align="center"
          className={styles.heading}
        />

        <div className={styles.mobileSeats}>
          <div className={styles.mobileGrid} aria-hidden="true">
            {data.mobileSeats.map((row, rowIndex) =>
              row.split('').map((state, colIndex) => {
                const selected = data.mobileSelectedSeat.row === rowIndex && data.mobileSelectedSeat.col === colIndex;
                return (
                  <span
                    key={`${rowIndex}-${colIndex}`}
                    className={`${styles.mobileSeat} ${selected ? styles.mobileSeatSelected : ''}`.trim()}
                  >
                    <Sentiment state={state as SeatState} className={styles.mobileSeatFace} />
                  </span>
                );
              }),
            )}
          </div>
          <p className={styles.mobileNote}>{data.mobileNote}</p>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legendBlock}>
            <ul className={styles.legend}>
              {data.legend.map((item) => (
                <li key={item.state} className={styles.legendItem}>
                  <span className={styles.legendBadge}>
                    <Sentiment state={item.state} className={styles.legendFace} />
                  </span>
                  <span className={styles.legendLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
            <p className={styles.legendNote}>{data.legendNote}</p>
          </div>

          <article className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <p className={styles.cardSeat}>
                  <span className={styles.cardSeatNumber}>
                    <span className={styles.desktopOnly}>{card.seat}</span>
                    <span className={styles.mobileOnly}>{card.mobileSeat}</span>
                  </span>
                  <span className={styles.cardPassenger}>{card.passenger}</span>
                </p>
                <span className={styles.cardTag}>{card.tag}</span>
              </div>
              <dl className={styles.cardRows}>
                <div className={styles.cardRow}>
                  <dt>{card.signalsLabel}</dt>
                  <dd>{card.signals}</dd>
                </div>
                <div className={styles.cardRow}>
                  <dt>{card.actionLabel}</dt>
                  <dd>{card.action}</dd>
                </div>
              </dl>
            </div>
            <GhostLink label={card.link.label} href={card.link.href} className={styles.cardLink} />
          </article>
        </div>
      </Container>
    </section>
  );
}
