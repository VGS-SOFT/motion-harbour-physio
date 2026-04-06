'use client';
import { useEffect, useState } from 'react';
import styles from './PageSkeleton.module.css';

export default function PageSkeleton() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 300);
    const hideTimer = setTimeout(() => setVisible(false), 620);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.skeleton} ${fading ? styles.fadeOut : ''}`} aria-hidden="true">
      {/* Nav skeleton */}
      <div className={styles.nav}>
        <div className={`${styles.bone} ${styles.navLogo}`} />
        <div className={styles.navLinks}>
          <div className={`${styles.bone} ${styles.navLink}`} />
          <div className={`${styles.bone} ${styles.navLink}`} />
          <div className={`${styles.bone} ${styles.navLink}`} />
          <div className={`${styles.bone} ${styles.navLink}`} />
        </div>
        <div className={`${styles.bone} ${styles.navBtn}`} />
      </div>

      {/* Hero skeleton */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <div className={`${styles.bone} ${styles.heroLabel}`} />
          <div className={`${styles.bone} ${styles.heroH1a}`} />
          <div className={`${styles.bone} ${styles.heroH1b}`} />
          <div className={`${styles.bone} ${styles.heroH1c}`} />
          <div className={`${styles.bone} ${styles.heroCta}`} />
        </div>
        <div className={styles.heroImages}>
          <div className={`${styles.bone} ${styles.heroImg1}`} />
          <div className={`${styles.bone} ${styles.heroImg2}`} />
          <div className={`${styles.bone} ${styles.heroImg3}`} />
        </div>
      </div>
    </div>
  );
}
