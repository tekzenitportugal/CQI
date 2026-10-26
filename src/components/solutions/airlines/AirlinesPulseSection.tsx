'use client';

import { useState, type CSSProperties } from 'react';
import { Container } from '@/components/ui/Container';
import { GhostLink } from '@/components/ui/GhostLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { airlinesPageData, SeatState } from '@/data/solutions/airlines-page';
import {
  MOBILE_SEAT_CARDS,
  SEAT_NOTE,
  SEAT_STATUS_LABEL,
  seatCards,
  type SeatStatus,
} from '@/data/solutions/airlines-seat-cards';
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

const MOBILE_SEAT_COLS = 8;

function Sentiment({ state, className }: { state: SeatState; className: string }) {
  return (
    <span className={`${className} ${TONE[state]}`}>
      <img src={`/images/solutions/airlines/${FACE[state]}.svg`} alt="" aria-hidden="true" />
    </span>
  );
}

type StateCardProps = {
  className: string;
  seatLabel: string;
  status: SeatStatus;
  signals: string;
  action: string;
  /** The featured passenger's copy: its labels head every card; its name and link show only when `isFeatured`. */
  featured: typeof airlinesPageData.pulse.card;
  isFeatured: boolean;
};

function StateCard({ className, seatLabel, status, signals, action, featured, isFeatured }: StateCardProps) {
  return (
    <article className={`${styles.card} ${className}`} aria-live="polite">
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <p className={styles.cardSeat}>
            <span className={styles.cardSeatNumber}>{seatLabel}</span>
            {isFeatured && <span className={styles.cardPassenger}>{featured.passenger}</span>}
          </p>
          <span className={`${styles.cardTag} ${TAG_TONE[status]}`}>{SEAT_STATUS_LABEL[status]}</span>
        </div>
        <dl className={styles.cardRows}>
          <div className={styles.cardRow}>
            <dt>{featured.signalsLabel}</dt>
            <dd>{signals}</dd>
          </div>
          <div className={styles.cardRow}>
            <dt>{featured.actionLabel}</dt>
            <dd>{action}</dd>
          </div>
        </dl>
      </div>
      {isFeatured ? (
        <GhostLink label={featured.link.label} href={featured.link.href} className={styles.cardLink} />
      ) : (
        <p className={styles.cardNote}>{SEAT_NOTE}</p>
      )}
    </article>
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

  // Mobile: the 8 × 3 close-up. Seat (row, col) shows MOBILE_SEAT_CARDS[row * 8 + col]; the featured one is selected on load.
  const featuredMobileIndex = data.mobileSelectedSeat.row * MOBILE_SEAT_COLS + data.mobileSelectedSeat.col;
  const [mobileSelected, setMobileSelected] = useState(featuredMobileIndex);
  const mobileCard = MOBILE_SEAT_CARDS[mobileSelected];
  const isMobileFeatured = mobileSelected === featuredMobileIndex;

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
          <div className={styles.mobileFrame}>
            <div className={styles.mobilePlaneBox} aria-hidden="true">
              <img src="/images/solutions/airlines/plane-mobile.svg" alt="" className={styles.mobilePlane} />
            </div>
            <div className={styles.mobileGrid}>
              {data.mobileSeats.map((row, rowIndex) =>
                row.split('').map((state, colIndex) => {
                  const index = rowIndex * MOBILE_SEAT_COLS + colIndex;
                  const { seat, card } = MOBILE_SEAT_CARDS[index];
                  return (
                    <button
                      key={index}
                      type="button"
                      className={`${styles.mobileSeat} ${mobileSelected === index ? styles.mobileSeatSelected : ''}`.trim()}
                      aria-label={`Seat ${seat}, ${SEAT_STATUS_LABEL[card.status]}`}
                      aria-pressed={mobileSelected === index}
                      onClick={() => setMobileSelected(index)}
                    >
                      <Sentiment state={state as SeatState} className={styles.mobileSeatFace} />
                    </button>
                  );
                }),
              )}
            </div>
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

          <StateCard
            className={styles.desktopOnly}
            seatLabel={isFeatured ? featured.seat : `Seat ${selected}`}
            status={seatCard.status}
            signals={seatCard.signals}
            action={seatCard.action}
            featured={featured}
            isFeatured={isFeatured}
          />
          <StateCard
            className={styles.mobileOnly}
            seatLabel={`Seat ${mobileCard.seat}`}
            status={mobileCard.card.status}
            signals={mobileCard.card.signals}
            action={mobileCard.card.action}
            featured={featured}
            isFeatured={isMobileFeatured}
          />
        </div>
      </Container>
    </section>
  );
}
