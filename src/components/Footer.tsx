import { clinic } from '@/data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container--wide ${styles.inner}`}>
        <div className={styles.brand}>
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <circle cx="14" cy="14" r="13" stroke="#3ecfcf" strokeWidth="2"/>
            <path d="M8 14 Q11 8 14 14 Q17 20 20 14" stroke="#3ecfcf" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
          </svg>
          <span className={styles.name}>{clinic.name}</span>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          <span className={styles.dot}>·</span>
          AHPRA registered physiotherapy practice.
        </p>
        <p className={styles.disclaimer}>
          This website is for informational purposes only and does not constitute medical advice.
          Always consult a qualified health professional for your individual needs.
        </p>
      </div>
    </footer>
  );
}
