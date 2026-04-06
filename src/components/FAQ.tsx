'use client';
import { useState } from 'react';
import { faqs } from '@/data/content';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={`section section--dark`}>
      <div className="container">
        <span className="section-label section-label--light">Got questions?</span>
        <h2 className="section-heading section-heading--light">Frequently asked questions</h2>
        <p className="section-sub section-sub--light" style={{ marginBottom: 'var(--space-10)' }}>
          Everything you need to know before your first appointment.
        </p>
        <div className={styles.list}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.active : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className={styles.icon} aria-hidden="true">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
