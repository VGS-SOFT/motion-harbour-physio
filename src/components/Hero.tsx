import { clinic } from '@/data/content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.topRow}>
          <span className="section-label">/ Melbourne, Victoria</span>
          <span className={`tag ${styles.availTag}`}>Accepting new patients</span>
        </div>

        <h1 className={styles.heading}>
          Modern physio<br />
          for people who<br />
          <em className={styles.italic}>want to move.</em>
        </h1>

        <div className={styles.bottomRow}>
          <div className={styles.subGroup}>
            <p className={styles.sub}>
              / {clinic.tagline}
            </p>
            <div className={styles.ctas}>
              <a href="#contact" className="btn-arrow">
                Book appointment <span className="arrow">→</span>
              </a>
              <a href="#fees" className="btn btn-outline">Fees & rebates</a>
            </div>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>7+</span>
              <span className={styles.statLabel}>Years experience</span>
            </div>
            <div className={styles.statLine} />
            <div className={styles.stat}>
              <span className={styles.statNum}>4</span>
              <span className={styles.statLabel}>Core services</span>
            </div>
            <div className={styles.statLine} />
            <div className={styles.stat}>
              <span className={styles.statNum}>HICAPS</span>
              <span className={styles.statLabel}>On-the-spot claims</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageStrip}>
        <div className={`${styles.imgCard} ${styles.imgCard1}`}>
          <div className={styles.imgInner}>
            <span className={styles.imgLabel}>Back & Neck</span>
          </div>
        </div>
        <div className={`${styles.imgCard} ${styles.imgCard2}`}>
          <div className={styles.imgInner}>
            <span className={styles.imgLabel}>Sports Rehab</span>
          </div>
        </div>
        <div className={`${styles.imgCard} ${styles.imgCard3}`}>
          <div className={styles.imgInner}>
            <span className={styles.imgLabel}>Knee & Shoulder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
