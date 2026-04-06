import { clinic } from '@/data/content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className="tag tag--accent">📍 Melbourne CBD</span>
        </div>

        <h1 className={styles.heading}>
          Move better.<br />
          <span className={styles.accent}>Feel stronger.</span><br />
          Live fully.
        </h1>

        <p className={styles.sub}>{clinic.tagline}</p>

        <div className={styles.ctas}>
          <a href="#contact" className="btn btn-primary">Book Appointment →</a>
          <a href="#fees" className="btn btn-outline-dark">Fees & Rebates</a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>7+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>Core Services</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>HICAPS</span>
            <span className={styles.statLabel}>On-the-spot claims</span>
          </div>
        </div>

        <div className={styles.floatingCards} aria-hidden="true">
          <div className={`${styles.fcard} ${styles.fcard1}`}>
            <span className={styles.fcardIcon}>✓</span>
            <div>
              <p className={styles.fcardTitle}>Next available</p>
              <p className={styles.fcardSub}>Today — 2:30 pm</p>
            </div>
          </div>
          <div className={`${styles.fcard} ${styles.fcard2}`}>
            <span className={styles.fcardIcon}>🏃</span>
            <div>
              <p className={styles.fcardTitle}>Sports Injury</p>
              <p className={styles.fcardSub}>Same-day assessment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
