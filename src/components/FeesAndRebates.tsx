import { fees, rebates } from '@/data/content';
import styles from './FeesAndRebates.module.css';

export default function FeesAndRebates() {
  return (
    <section id="fees" className={`section section--white ${styles.section}`}>
      <div className="container">
        <div className={styles.topRow}>
          <div>
            <span className="section-label">/ Transparent pricing</span>
            <h2 className="section-heading">Fees &amp; <em>rebates</em></h2>
          </div>
          <p className="section-sub">Straightforward pricing with on-the-spot claiming for private health insurance. No hidden costs.</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.feesCard}>
            <p className={styles.feesLabel}>/ Appointment fees</p>
            <ul className={styles.feeList}>
              {fees.map(f => (
                <li key={f.label}>
                  <span className={styles.feeLabel}>{f.label}</span>
                  <span className={styles.feePrice}>{f.price}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-arrow" style={{ marginTop: 'var(--space-2)' }}>
              Book now <span className="arrow">→</span>
            </a>
          </div>

          <div className={styles.rebatesCol}>
            {rebates.map(r => (
              <div key={r.title} className={styles.rebateItem}>
                <h3 className={styles.rebateTitle}>{r.title}</h3>
                <p className={styles.rebateBody}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
