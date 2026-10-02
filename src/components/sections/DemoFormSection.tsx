'use client';

import { Container } from '@/components/ui/Container';
import styles from './DemoFormSection.module.scss';

export type DemoFormSectionData = {
  eyebrow: string;
  title: string;
  submitLabel: string;
};

type DemoFormSectionProps = {
  data: DemoFormSectionData;
};

/** Figma "Tell us where to start" (6079:31685–31730). No backend wired yet — UI only. */
export function DemoFormSection({ data }: DemoFormSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.layout}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <p className={styles.title}>{data.title}</p>
        </div>

        <form
          className={styles.form}
          onSubmit={(event) => {
            // TODO: wire up to a real submission endpoint.
            event.preventDefault();
          }}
        >
          <div className={styles.fields}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input type="text" name="name" className={styles.input} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Work email*</span>
              <input type="email" name="workEmail" required className={styles.input} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Organisation</span>
              <input type="text" name="organisation" className={styles.input} />
            </label>

            <div className={styles.fieldRow}>
              <label className={styles.field}>
                <span className={styles.label}>Role</span>
                <input type="text" name="role" className={styles.input} />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Sector</span>
                <span className={styles.selectWrapper}>
                  <select name="sector" defaultValue="" required className={styles.select}>
                    <option value="" disabled hidden>
                      Select
                    </option>
                    <option value="telecom">Telecom</option>
                    <option value="airlines">Airlines</option>
                    <option value="banking">Banking</option>
                    <option value="insurance">Insurance</option>
                    <option value="utilities-energy">Utilities &amp; energy</option>
                    <option value="consumer-electronics">Consumer electronics</option>
                    <option value="other">Other</option>
                  </select>
                  <img
                    src="/images/shared/common/chevron-up-lg.svg"
                    alt=""
                    width={18}
                    height={18}
                    className={styles.selectIcon}
                    aria-hidden="true"
                  />
                </span>
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Approximate annual interaction volume</span>
              <input type="text" name="volume" placeholder="e.g 4 million" className={styles.input} />
            </label>
          </div>

          <button type="submit" className={styles.submit}>
            {data.submitLabel}
          </button>
        </form>
      </Container>
    </section>
  );
}
