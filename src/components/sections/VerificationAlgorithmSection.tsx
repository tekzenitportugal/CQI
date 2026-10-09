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
              src="/images/product/how-we-do-it/ellipse-outer.webp"
              alt=""
              width={2572}
              height={2572}
            />
            <img
              className={styles.ringMiddle}
              src="/images/product/how-we-do-it/ellipse-middle.webp"
              alt=""
              width={2008}
              height={2008}
            />
            <img
              className={styles.ringInner}
              src="/images/product/how-we-do-it/ellipse-inner.webp"
              alt=""
              width={1442}
              height={1442}
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

          <div className={styles.layersWrap}>
            {/* Figma mobile arcs, anchored to the layers so each layer centres in its band (below xl) */}
            <div className={styles.arcsMobile} aria-hidden="true">
              <img
                className={styles.ringOuterMobile}
                src="/images/product/how-we-do-it/ellipse-outer-mobile.webp"
                alt=""
                width={1649}
                height={1649}
                loading="lazy"
              />
              <img
                className={styles.ringMiddleMobile}
                src="/images/product/how-we-do-it/ellipse-middle-mobile.webp"
                alt=""
                width={1287}
                height={1287}
                loading="lazy"
              />
              <img
                className={styles.ringInnerMobile}
                src="/images/product/how-we-do-it/ellipse-inner-mobile.webp"
                alt=""
                width={925}
                height={925}
                loading="lazy"
              />
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
        </div>
      </Container>
    </section>
  );
}
