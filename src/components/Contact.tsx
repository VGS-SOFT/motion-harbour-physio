import { clinic } from '@/data/content';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section section--white ${styles.section}`}>
      <div className="container">
        <span className="section-label">Get in touch</span>
        <h2 className="section-heading">Book your appointment</h2>
        <p className="section-sub" style={{ marginBottom: 'var(--space-10)' }}>
          Ready to take the first step? Reach out to book your initial assessment — no referral required for most patients.
        </p>
        <div className={styles.layout}>
          <form className={`float-card ${styles.form}`}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            <div className={styles.field}>
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" placeholder="04XX XXX XXX" />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" rows={4} placeholder="Tell us about your condition or what you're looking for..." />
            </div>
            <button type="submit" className={`btn btn-primary-light ${styles.submitBtn}`}>
              Book Appointment →
            </button>
          </form>

          <div className={styles.infoCol}>
            <div className={`float-card ${styles.infoCard}`}>
              <h3 className={styles.infoTitle}>Clinic details</h3>
              <ul className={styles.infoList}>
                <li><span className={styles.infoIcon}>📍</span><span>{clinic.address}</span></li>
                <li><span className={styles.infoIcon}>📞</span><a href={`tel:${clinic.phone}`}>{clinic.phone}</a></li>
                <li><span className={styles.infoIcon}>✉️</span><a href={`mailto:${clinic.email}`}>{clinic.email}</a></li>
              </ul>
            </div>
            <div className={`float-card ${styles.hoursCard}`}>
              <h3 className={styles.infoTitle}>Opening hours</h3>
              <ul className={styles.hoursList}>
                {clinic.hours.map(h => (
                  <li key={h.day}>
                    <span className={styles.hoursDay}>{h.day}</span>
                    <span className={styles.hoursTime}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
