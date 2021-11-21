/*
 * This is Our HomePage Component
 */
import React, { useEffect } from 'react';
import NavBar from '../../components/navbar/navbar';
import LandViewPage from '../landview/landviewpage.component';
import AboutPage from '../about/aboutpage.component';
import WhyPage from '../why/whypage.component';
import HowPage from '../how/howpage.component';
import AdsPage from '../ads/adspage.component';
import styles from './homepage.module.scss';

import Footer from '../../components/footer/footer';
//import styles from './homepage.module.css';

function HomePage({ match }) {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  });

  return (
    //<div className={styles.homepage}>
    //      <div id="why"></div>
    /*
          <NavBar />
      <LandViewPage />
      <AboutPage />

      <div id="how"></div>
      <HowPage />
      <AdsPage />
      <Footer />
    */
    //<WhyPage />
    <div className={styles.HomePage}>
      <div className={styles.LeftColumn1}></div><div className={styles.NavBar}><NavBar /></div><div className={styles.RightColumn1}></div>
      <div className={styles.LeftColumn2}></div><div className={styles.LandViewPage}><LandViewPage /></div><div className={styles.RightColumn2}></div>
      <div className={styles.LeftColumn3}></div><div className={styles.AboutPage}><AboutPage /></div><div className={styles.RightColumn3}></div>
      <div className={styles.LeftColumn4}></div><div className={styles.HowPage}><HowPage /></div><div className={styles.RightColumn4}></div>
      <div className={styles.LeftColumn5}></div><div className={styles.Footer}><Footer /></div><div className={styles.RightColumn5}></div>
    </div>
  );
}
export default HomePage;
