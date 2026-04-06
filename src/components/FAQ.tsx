'use client';
import { useState } from 'react';
import { faqs } from '@/data/content';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={`section section--warm ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">/ Questions</span>
            <h2 className="section-heading">Frequently asked <em>questions</em></h2>
          </div>
          <p className="section-sub" style={{ maxWidth: '36ch' }}>
            Everything you need to know before your first appointment.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.active : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={styles.qNum}>0{i + 1}</span>
                <span className={styles.qText}>{f.q}</span>
                <span className={styles.icon} aria-hidden="true">
                  {open === i
                    ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  }
                </span>
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
