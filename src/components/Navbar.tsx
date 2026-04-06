'use client';
import { useState, useEffect } from 'react';
import { clinic } from '@/data/content';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Services',  href: '#services' },
    { label: 'About',     href: '#about'    },
    { label: 'Fees',      href: '#fees'     },
    { label: 'FAQ',       href: '#faq'      },
    { label: 'Contact',   href: '#contact'  },
  ];

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container--wide ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-label="Motion Harbour Physio">
            <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M8 14 Q11 8 14 14 Q17 20 20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
          <span className={styles.logoText}>{clinic.name}</span>
        </a>

        <nav className={`${styles.links} ${open ? styles.mobileOpen : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.link} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`} onClick={() => setOpen(false)}>
            Book now <span style={{ opacity: 0.6, fontSize: '0.9em' }}>→</span>
          </a>
        </nav>

        <button className={styles.hamburger} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(o => !o)}>
          <span className={open ? styles.hOpen : ''} />
          <span className={open ? styles.hOpen2 : ''} />
          <span className={open ? styles.hOpen3 : ''} />
        </button>
      </div>
    </header>
  );
}
