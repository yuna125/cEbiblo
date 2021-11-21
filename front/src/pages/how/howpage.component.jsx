/*
 * This is Our How To Component
 */
import React from 'react';
import styles from './howpage.module.scss';

import TextBlock from './textblock.component'

// Images
import mobileImage1 from '../../assets/images/mobileImage1.png';
import mobileImage2 from '../../assets/images/mobileImage2.png';
import mobileImage3 from '../../assets/images/mobileImage3.png';
import mobileImage4 from '../../assets/images/mobileImage4.png';
import topButtonImage from '../../assets/images/topButtonImage.png';

import oneImage from '../../assets/images/oneImage.png';
import twoImage from '../../assets/images/twoImage.png';
import threeImage from '../../assets/images/threeImage.png';




function HowPage() {

  /*
  const textData = {
    imageUrl: '../../assets/images/oneImage.png',
    TextTitle: 'LIBRARY',
    TextParagraph: 'Choose books <br>All books are on the cloud. You only need to pick and start reading. View books as preferences and personal goals in life'
  };

  <TextBlock imageUrl={textData.imageUrl} TextTitle={textData.TextTitle} TextParagraph={textData.TextParagraph} />
  */

  return (
    <div className={styles.HowPage}>
      <p className={styles.HowTitle}>How it works?</p>
      <img className={styles.mobileImage1} src={mobileImage1} alt="Ebiblo Mobile App Image Example 1" />
      <div className={styles.TextOne}>
        <img className={styles.numberImageOne} src={oneImage} />
        <div className={styles.TextOneWriting}>
          <p className={styles.TextTitleOne}>LIBRARY</p>
          <p className={styles.TextHeadingOne}>Choose books</p>
          <p className={styles.TextParagraphOne}>All books are on the cloud. You only need to pick and start reading. View books as preferences and personal goals in life</p>
        </div>
      </div>
      <img className={styles.mobileImage2} src={mobileImage2} alt="Ebiblo Mobile App Image Example 2" />
      <div className={styles.TextTwo}>
        <img className={styles.numberImageTwo} src={twoImage} />
        <div className={styles.TextTwoWriting}>
          <p className={styles.TextTitleTwo}>JOIN GROUP</p>
          <p className={styles.TextHeadingTwo}>Make Connections</p>
          <p className={styles.TextParagraphTwo}>Find friends or invite them to read with you. Search for experts or content creators in the field and follow their updates.</p>
        </div>
      </div>
      <img className={styles.mobileImage3} src={mobileImage3} alt="Ebiblo Mobile App Image Example 3" />
      <div className={styles.TextThree}>
        <img className={styles.numberImageThree} src={threeImage} />
        <div className={styles.TextThreeWriting}>
          <p className={styles.TextTitleThree}>+New Book</p>
          <p className={styles.TextHeadingThree}>Create &#38; share</p>
          <p className={styles.TextParagraphThree}>Become an active reader by creating content for books and share with your network on the app and on social media</p>
        </div>
      </div>
      <img className={styles.mobileImage4} src={mobileImage4} alt="Ebiblo Mobile App Image Example 4" />
      <div className={styles.TextFour}>
        <div className={styles.TextFourWriting}>
          <p className={styles.TextTitleThree}>MemberShip/Shop</p>
          <p className={styles.TextParagraphFour}>You can find the books that you are interested in and subscribe or study the latest content.</p>
        </div>
      </div>
      <div className={styles.topButtonImage}>
        <a href="../../../"><img src={topButtonImage} alt="Top Button to Navigate to top of page" /></a>
      </div>
    </div>
  );
}
export default HowPage;
