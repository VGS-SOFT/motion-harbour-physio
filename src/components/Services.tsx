import { services } from '@/data/content';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={`section section--dark ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label section-label--light">/ Our services</span>
            <h2 className="section-heading section-heading--light">
              What we <em>offer</em>
            </h2>
          </div>
          <p className="section-sub section-sub--light" style={{ maxWidth: '38ch' }}>
            A focused range of physiotherapy services for the most common pain and movement issues.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={s.title} className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}>
              <span className={styles.icon}>{s.icon}</span>
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.description}</p>
              </div>
              {i === 0 && <span className={`tag tag--dark ${styles.mostCommon}`}>Most common</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
