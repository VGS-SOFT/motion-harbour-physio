import { conditions } from '@/data/content';
import styles from './WhoWeHelp.module.css';

export default function WhoWeHelp() {
  return (
    <section id="services" className={`section section--white ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">/ Who we help</span>
            <h2 className="section-heading">
              Common conditions<br />we <em>treat</em>
            </h2>
          </div>
          <p className={`section-sub ${styles.headerSub}`}>
            Whether you're dealing with a sudden injury or a long-standing ache, we work with you to understand what's happening and build a clear path forward.
          </p>
        </div>

        <div className={styles.grid}>
          {conditions.map((c, i) => (
            <div key={c.label} className={`${styles.card} ${i % 3 === 1 ? styles.cardWarm : ''}`}>
              <span className={styles.number}>0{i + 1}</span>
              <h3 className={styles.cardTitle}>{c.label}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
