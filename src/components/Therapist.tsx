import { therapist } from '@/data/content';
import styles from './Therapist.module.css';

export default function Therapist() {
  return (
    <section id="about" className={`section section--warm ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.imgCol}>
          <div className={styles.imgBox}>
            <span className={styles.initials}>AB</span>
            <div className={styles.imgBadge}>
              <span className={styles.badgeNum}>AHPRA</span>
              <span className={styles.badgeSub}>Registered</span>
            </div>
          </div>
        </div>

        <div className={styles.textCol}>
          <span className="section-label">/ Meet your physiotherapist</span>
          <h2 className="section-heading">
            {therapist.name}<br />
            <em>{therapist.title}</em>
          </h2>
          <p className={styles.creds}>{therapist.credentials}</p>
          <p className={styles.bio}>{therapist.bio}</p>

          <div className={styles.approachGrid}>
            {therapist.approach.map(a => (
              <div key={a} className={styles.approachItem}>
                <span className={styles.tick}>✓</span>
                <span>{a}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-arrow" style={{ alignSelf: 'flex-start' }}>
            Book with Ava <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
