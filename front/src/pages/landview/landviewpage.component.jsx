/*
 * This is Our lAND View Component
 */
import React from 'react';
import styles from './landviewpage.module.scss';
import mobileImageLandingPage from '../../assets/images/mobile_screenshot.png';
import appleDownloadButton from '../../assets/images/apple_download_button.png';
import googleDownloadButton from '../../assets/images/google_download_button.png';
import CButton from '../../components/buttons/buttons';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

function LandViewPage() {
  return (
    <div className={styles.LandViewPage}>

      <img className={styles.mobileImageLandingPage} src={mobileImageLandingPage} alt="Ebiblo Mobile App Image Example" />

      <div className={styles.LeftSide}>
        <p className={styles.titleOne}>Go social with<br />e-books.</p>
        <p className={styles.titleTwo}>Get the best of reading and writing through<br></br>study groups. Download the app now!</p>

        <div className={styles.DownloadButtons}>
          <a href="../../../"><img className={styles.appleDownloadButton} src={appleDownloadButton} alt="Apple app download button" /></a>
          <a href="../../../"><img className={styles.googleDownloadButton} src={googleDownloadButton} alt="Google app download button" /></a>
        </div>
      </div>
      <div className={styles.blueBackground}>
      </div>
    </div>
  );
}
export default LandViewPage;
