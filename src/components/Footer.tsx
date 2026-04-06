import { clinic } from '@/data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container--wide ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M8 14 Q11 8 14 14 Q17 20 20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            <span className={styles.brandName}>{clinic.name}</span>
          </div>
          <a href="#contact" className="btn btn-outline" style={{ fontSize: 'var(--text-xs)', padding: '0.55rem 1.1rem' }}>Book appointment →</a>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} {clinic.name}. AHPRA registered physiotherapy practice.</p>
          <p className={styles.disclaimer}>This website is for informational purposes only and does not constitute medical advice. Always consult a qualified health professional.</p>
        </div>
      </div>
    </footer>
  );
}
