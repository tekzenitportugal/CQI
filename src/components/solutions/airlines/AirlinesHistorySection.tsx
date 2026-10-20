import { Container } from '@/components/ui/Container';
import type { airlinesPageData, SeatState } from '@/data/solutions/airlines-page';
import styles from './AirlinesHistorySection.module.scss';

type AirlinesHistorySectionProps = {
  data: typeof airlinesPageData.history;
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

function Sentiment({ state }: { state: SeatState }) {
  return (
    <span className={styles.badge}>
      <span className={`${styles.face} ${TONE[state]}`}>
        <img src={`/images/solutions/airlines/${FACE[state]}.svg`} alt="" aria-hidden="true" />
      </span>
    </span>
  );
}

/** "Same delay, different risk." — copy left, two passenger journey-history cards right (Figma Frame 1410129101). */
export function AirlinesHistorySection({ data }: AirlinesHistorySectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <h2 className={styles.title}>{data.title}</h2>
            </div>
            <div className={styles.text}>
              <p className={styles.lead}>{data.lead}</p>
              <p className={styles.body}>{data.body}</p>
            </div>
          </div>

          <div className={styles.cards}>
            {data.passengers.map((passenger) => (
              <article key={passenger.name} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.who}>
                    <p className={styles.name}>{passenger.name}</p>
                    <p className={styles.seat}>{passenger.seat}</p>
                  </div>
                  <span className={`${styles.tag} ${passenger.status === 'risk' ? styles.tagRisk : styles.tagHealthy}`}>
                    {passenger.statusLabel}
                  </span>
                </div>
                <div className={styles.timeline}>
                  <div className={styles.group}>
                    <p className={styles.groupLabel}>{data.historyLabel}</p>
                    <div className={styles.faces}>
                      {passenger.history.map((state, i) => (
                        <Sentiment key={i} state={state} />
                      ))}
                    </div>
                  </div>
                  <div className={styles.group}>
                    <p className={styles.groupLabel}>{data.todayLabel}</p>
                    <div className={styles.faces}>
                      <Sentiment state={passenger.today} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
