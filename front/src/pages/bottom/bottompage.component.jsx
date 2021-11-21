/*
 * This is Our How To Component
 */
import React from 'react';
import styles from './bottompage.module.scss';

// Images
import mobileImage1 from '../../assets/images/mobileImage1.png';
import mobileImage2 from '../../assets/images/mobileImage2.png';
import mobileImage3 from '../../assets/images/mobileImage3.png';
import topButtonImage from '../../assets/images/topButtonImage.png';

import oneImage from '../../assets/images/oneImage.png';
import twoImage from '../../assets/images/twoImage.png';
import threeImage from '../../assets/images/threeImage.png';




function BottomPage() {

  /*
  const textData = {
    imageUrl: '../../assets/images/oneImage.png',
    TextTitle: 'LIBRARY',
    TextParagraph: 'Choose books <br>All books are on the cloud. You only need to pick and start reading. View books as preferences and personal goals in life'
  };

  <TextBlock imageUrl={textData.imageUrl} TextTitle={textData.TextTitle} TextParagraph={textData.TextParagraph} />
  */

  return (
    <div className={styles.BottomPage}>
      <p className={styles.HowTitle}>How it works?</p>
      <img className={styles.mobileImage1} src={mobileImage1} alt="Ebiblo Mobile App Image Example 1" />
    </div>
  );
}
export default BottomPage;
