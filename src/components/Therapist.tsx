import { therapist } from '@/data/content';
import styles from './Therapist.module.css';

export default function Therapist() {
  return (
    <section id="about" className={`section section--white ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.imgCol}>
          <div className={styles.imgPlaceholder}>
            <span className={styles.initials}>AB</span>
          </div>
          <div className={styles.credBadge}>
            <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{therapist.credentials}</span>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>AHPRA Registered</span>
          </div>
        </div>
        <div className={styles.textCol}>
          <span className="section-label">Meet your physiotherapist</span>
          <h2 className="section-heading">{therapist.name}</h2>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
            {therapist.title}
          </p>
          <p style={{ lineHeight: 1.75, color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
            {therapist.bio}
          </p>
          <ul className={styles.approach}>
            {therapist.approach.map(a => (
              <li key={a}>
                <span className={styles.tick}>✓</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
