import { fees, rebates } from '@/data/content';
import styles from './FeesAndRebates.module.css';

export default function FeesAndRebates() {
  return (
    <section id="fees" className={`section section--grey ${styles.section}`}>
      <div className="container">
        <span className="section-label">Transparent pricing</span>
        <h2 className="section-heading">Fees & rebates</h2>
        <p className="section-sub" style={{ marginBottom: 'var(--space-10)' }}>
          Straightforward pricing with on-the-spot claiming for private health insurance. No hidden costs.
        </p>
        <div className={styles.layout}>
          <div className={`float-card ${styles.feesCard}`}>
            <h3 className={styles.cardTitle}>Appointment fees</h3>
            <ul className={styles.feeList}>
              {fees.map(f => (
                <li key={f.label}>
                  <span className={styles.feeLabel}>{f.label}</span>
                  <span className={styles.feePrice}>{f.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rebatesCol}>
            {rebates.map(r => (
              <div key={r.title} className={`float-card ${styles.rebateCard}`}>
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
