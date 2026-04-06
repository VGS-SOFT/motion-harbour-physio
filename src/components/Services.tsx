import { services } from '@/data/content';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={`section section--dark ${styles.section}`}>
      <div className="container">
        <span className="section-label section-label--light">What we offer</span>
        <h2 className="section-heading section-heading--light">Our services</h2>
        <p className="section-sub section-sub--light" style={{ marginBottom: 'var(--space-10)' }}>
          A focused range of physiotherapy services for the most common pain and movement issues. No fluff — just what you need.
        </p>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={s.title} className={`float-card float-card--dark ${styles.card}`}>
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
              {i === 0 && <span className="tag tag--accent" style={{ marginTop: 'auto' }}>Most common</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
