import { conditions } from '@/data/content';
import styles from './WhoWeHelp.module.css';

export default function WhoWeHelp() {
  return (
    <section id="services" className={`section section--grey ${styles.section}`}>
      <div className="container">
        <span className="section-label">Who we help</span>
        <h2 className="section-heading">Common conditions we treat</h2>
        <p className="section-sub" style={{ marginBottom: 'var(--space-10)' }}>
          Whether you're dealing with a sudden injury or a long-standing ache, we work with you to understand what's happening and build a clear path forward.
        </p>
        <div className={styles.grid}>
          {conditions.map(c => (
            <div key={c.label} className={`float-card ${styles.card}`}>
              <span className="tag" style={{ marginBottom: 'var(--space-3)' }}>{c.label}</span>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
