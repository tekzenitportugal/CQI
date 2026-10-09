'use client';

import { useState, type CSSProperties } from 'react';
import { Container } from '@/components/ui/Container';
import { GhostLink } from '@/components/ui/GhostLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { airlinesPageData, SeatState } from '@/data/solutions/airlines-page';
import { SEAT_NOTE, SEAT_STATUS_LABEL, seatCards, type SeatStatus } from '@/data/solutions/airlines-seat-cards';
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

const STATUS_STATE: Record<SeatStatus, SeatState> = {
  healthy: 'H',
  friction: 'F',
  eroding: 'E',
  risk: 'R',
  silent: 'S',
};

const TAG_TONE: Record<SeatStatus, string> = {
  healthy: styles.tagHealthy,
  friction: styles.tagFriction,
  eroding: styles.tagEroding,
  risk: styles.tagRisk,
  silent: styles.tagSilent,
};

function Sentiment({ state, className }: { state: SeatState; className: string }) {
  return (
    <span className={`${className} ${TONE[state]}`}>
      <img src={`/images/solutions/airlines/${FACE[state]}.svg`} alt="" aria-hidden="true" />
    </span>
  );
}

/**
 * Customer Pulse: a cabin of coloured seats behind a legend and a state card. Selecting a seat swaps the
 * card for that seat's (Figma "STATE CARD" set); seat 14A is the featured passenger and is selected on load.
 */
export function AirlinesPulseSection({ data }: AirlinesPulseSectionProps) {
  const [selected, setSelected] = useState(data.defaultSeat);
  const featured = data.card;
  const isFeatured = selected === data.defaultSeat;
  const seatCard = seatCards[selected];

  return (
    <section className={styles.section}>
      <div className={styles.plane}>
        <img src="/images/solutions/airlines/plane.svg" alt="" aria-hidden="true" className={styles.planeImage} />
        {data.seatBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className={styles.seatBlock}
            style={{ '--seat-left': block.left, '--seat-top': block.top } as CSSProperties}
          >
            {block.letters.map((letter) =>
              Array.from({ length: 11 }, (_, colIndex) => {
                const label = `${block.firstCol + colIndex}${letter}`;
                const status = seatCards[label].status;
                return (
                  <button
                    key={label}
                    type="button"
                    className={`${styles.seat} ${selected === label ? styles.seatSelected : ''}`.trim()}
                    aria-label={`Seat ${label}, ${SEAT_STATUS_LABEL[status]}`}
                    aria-pressed={selected === label}
                    onClick={() => setSelected(label)}
                  >
                    <Sentiment state={STATUS_STATE[status]} className={styles.seatFace} />
                  </button>
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
                const isSelected = data.mobileSelectedSeat.row === rowIndex && data.mobileSelectedSeat.col === colIndex;
                return (
                  <span
                    key={`${rowIndex}-${colIndex}`}
                    className={`${styles.mobileSeat} ${isSelected ? styles.mobileSeatSelected : ''}`.trim()}
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

          <article className={styles.card} aria-live="polite">
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <p className={styles.cardSeat}>
                  <span className={styles.cardSeatNumber}>
                    {isFeatured ? (
                      <>
                        <span className={styles.desktopOnly}>{featured.seat}</span>
                        <span className={styles.mobileOnly}>{featured.mobileSeat}</span>
                      </>
                    ) : (
                      `Seat ${selected}`
                    )}
                  </span>
                  {isFeatured && <span className={styles.cardPassenger}>{featured.passenger}</span>}
                </p>
                <span className={`${styles.cardTag} ${TAG_TONE[seatCard.status]}`}>
                  {SEAT_STATUS_LABEL[seatCard.status]}
                </span>
              </div>
              <dl className={styles.cardRows}>
                <div className={styles.cardRow}>
                  <dt>{featured.signalsLabel}</dt>
                  <dd>{seatCard.signals}</dd>
                </div>
                <div className={styles.cardRow}>
                  <dt>{featured.actionLabel}</dt>
                  <dd>{seatCard.action}</dd>
                </div>
              </dl>
            </div>
            {isFeatured ? (
              <GhostLink label={featured.link.label} href={featured.link.href} className={styles.cardLink} />
            ) : (
              <p className={styles.cardNote}>{SEAT_NOTE}</p>
            )}
          </article>
        </div>
      </Container>
    </section>
  );
}
