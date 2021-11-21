/*
 * This is Our ABout Page Component
 */
import React from 'react';
import styles from './aboutpage.module.scss';

function AboutPage() {
  return (

    <div className={styles.AboutPage}>
      <p className={styles.AboutTitle}>About</p>
      <p className={styles.AboutText}>
        Ebiblo is a mobile application that helps users read classics online <br></br>
        and connect with experts and like-minded people. It is the ultimate  <br></br>
        platform for lifelong learning.
      </p>
    </div>

  );
}
export default AboutPage;
