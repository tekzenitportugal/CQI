import type { contactData } from '@/data/contact';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ContactChannelsSection.module.scss';

type ContactChannelsSectionProps = {
  data: typeof contactData.channels;
};

/**
 * Figma "Frame 1000003512" (6079:38463): 6 light, bordered rows — a
 * ResponsibilitiesSection relative, extended with an optional mailto email
 * and an optional trailing text-link/button per row.
 */
export function ContactChannelsSection({ data }: ContactChannelsSectionProps) {
  return (
    <section className={styles.section} id="contact-channels">
      <Container>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          align="center"
          className={styles.heading}
        />

        <ul className={styles.list}>
          {data.rows.map((row) => (
            <li key={row.title} className={styles.row}>
              <p className={styles.title}>{row.title}</p>
              <div className={styles.content}>
                <p className={styles.description}>
                  {row.description}
                  {row.email && (
                    <>
                      <br />
                      <a className={styles.email} href={`mailto:${row.email}`}>
                        {row.email}
                      </a>
                    </>
                  )}
                </p>
                {row.link && (
                  <Button
                    label={row.link.label}
                    href={row.link.href}
                    variant="text"
                    showArrow
                    className={styles.link}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
