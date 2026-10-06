import Image from 'next/image';
import type { howWeDoItData } from '@/data/how-we-do-it';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './VerificationAlgorithmSection.module.scss';

type VerificationAlgorithmSectionProps = {
  data: typeof howWeDoItData.verificationIntro;
};

export function VerificationAlgorithmSection({ data }: VerificationAlgorithmSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="verification-intro-title">
      <Container>
        <div className={styles.inner}>
          {/* Figma Group 800 + Ellipse 132: concentric rings and the verification orb */}
          <div className={styles.decoration} aria-hidden="true">
            <img
              className={styles.ringOuter}
              src="/images/product/how-we-do-it/ellipse-outer.png"
              alt=""
              width={2572}
              height={2572}
            />
            <img
              className={styles.ringMiddle}
              src="/images/product/how-we-do-it/ellipse-middle.png"
              alt=""
              width={2008}
              height={2008}
            />
            <img
              className={styles.ringInner}
              src="/images/product/how-we-do-it/ellipse-inner.png"
              alt=""
              width={1442}
              height={1442}
            />
            {/* Figma mobile arcs: separate ellipses, shown below lg only */}
            <img
              className={styles.ringOuterMobile}
              src="/images/product/how-we-do-it/ellipse-outer-mobile.png"
              alt=""
              width={1649}
              height={1649}
              loading="lazy"
            />
            <img
              className={styles.ringMiddleMobile}
              src="/images/product/how-we-do-it/ellipse-middle-mobile.png"
              alt=""
              width={1287}
              height={1287}
              loading="lazy"
            />
            <img
              className={styles.ringInnerMobile}
              src="/images/product/how-we-do-it/ellipse-inner-mobile.png"
              alt=""
              width={925}
              height={925}
              loading="lazy"
            />
            <img
              className={styles.orb}
              src="/images/product/how-we-do-it/ellipse-verification.svg"
              alt=""
              width={586}
              height={586}
            />
          </div>

          <div className={styles.intro}>
            <h2 id="verification-intro-title" className={styles.introTitle}>
              {highlightText(data.title, data.titleHighlight)}
            </h2>
            <p className={styles.introAside}>{data.aside}</p>
          </div>

          <ul className={styles.layers}>
            {data.layers.map((layer) => (
              <li
                key={layer.title}
                className={`${styles.layer} ${layer.variant === 'verification' ? styles.layerVerification : ''}`.trim()}
              >
                <div className={styles.layerBody}>
                  <Image
                    src={layer.icon}
                    alt=""
                    width={48}
                    height={48}
                    className={styles.layerIcon}
                  />
                  <div className={styles.layerCopy}>
                    <h3 className={styles.layerTitle}>{layer.title}</h3>
                    <p className={styles.layerDescription}>{layer.description}</p>
                  </div>
                </div>
                {layer.tags && (
                  <ul className={styles.tags}>
                    {layer.tags.map((tag) => (
                      <li key={tag} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
