import type { implementationData } from '@/data/implementation';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ResponsibilitiesSection.module.scss';

type ResponsibilitiesSectionProps = {
  data: typeof implementationData.responsibilities;
};

const RACI_PREFIX = /^(CQI: ([A-Z]))(?:( · )(Client: ([A-Z])))?(\s*—.*)?$/;

function RaciDescription({ description }: { description: string }) {
  const match = description.match(RACI_PREFIX);
  if (!match) return <>{description}</>;

  const [, cqi, cqiRole, separator, client, clientRole, rest] = match;
  return (
    <>
      <span className={styles.raciPrefix} data-r={cqiRole === 'R' ? '' : undefined}>
        {cqi}
      </span>
      {separator && <span className={styles.raciPrefix}>{separator}</span>}
      {client && (
        <span className={styles.raciPrefix} data-r={clientRole === 'R' ? '' : undefined}>
          {client}
        </span>
      )}
      {rest}
    </>
  );
}

/** Figma "Frame 1000003115": 6 light, bordered rows — a card-boxed relative of RuledRowsList. */
export function ResponsibilitiesSection({ data }: ResponsibilitiesSectionProps) {
  return (
    <section className={styles.section} id="responsibilities">
      <Container>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          align="center"
          className={styles.heading}
        />

        <ul className={styles.list}>
          {data.rows.map((row) => (
            <li key={row.label} className={styles.row}>
              <p className={styles.label}>{row.label}</p>
              <p className={styles.description}>
                <RaciDescription description={row.description} />
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
