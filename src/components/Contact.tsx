import { clinic } from '@/data/content';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section section--white ${styles.section}`}>
      <div className="container">
        <div className={styles.topRow}>
          <div>
            <span className="section-label">/ Book your visit</span>
            <h2 className="section-heading">Get in <em>touch</em></h2>
          </div>
          <p className="section-sub">
            Ready to take the first step? Reach out to book your initial assessment — no referral required for most patients.
          </p>
        </div>

        <div className={styles.layout}>
          <form className={styles.form}>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="04XX XXX XXX" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" rows={4} placeholder="Tell us about your condition or what you're looking for..." />
            </div>
            <button type="submit" className="btn-arrow" style={{ alignSelf: 'flex-start' }}>
              Send message <span className="arrow">→</span>
            </button>
          </form>

          <div className={styles.infoSide}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>/ Address</p>
              <p className={styles.infoVal}>{clinic.address}</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>/ Phone</p>
              <a href={`tel:${clinic.phone}`} className={styles.infoVal}>{clinic.phone}</a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>/ Email</p>
              <a href={`mailto:${clinic.email}`} className={styles.infoVal}>{clinic.email}</a>
            </div>
            <div className={styles.hoursBlock}>
              <p className={styles.infoLabel}>/ Opening hours</p>
              {clinic.hours.map(h => (
                <div key={h.day} className={styles.hoursRow}>
                  <span>{h.day}</span>
                  <span className={styles.hoursTime}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
