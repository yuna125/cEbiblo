/*
 * This is Our Footer Section Component
 */
import React from 'react';
import styles from './footer.module.scss';
//import EbibloLogo from '../../assets/images/logo.png';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import footer_img from '../../assets/images/footer_img.png';


function Footer() {
  return (
    <div className={styles.Footer}>
      <img className={styles.Subscriber} src={footer_img} alt="Ebiblo Mobile App Image Example 1" />

      <div className={styles.Navigation}>
        <div className={styles.NavLeftSide}>
          <Link to={'../../../'}>HOME</Link>
          <Link to={'../../../user-agreement'}>ABOUT</Link>
          <Link to={'../../../'}>HOW IT WORKS?</Link>
          <Link to={'../../../contact'}>CONTACT US</Link>
        </div>
        <div className={styles.NavRightSide}>
          <Link to={'../../../privacy'}>TERMS OF SERVICE</Link>
          <Link to={'../../../privacy'}>PRIVACY POLICY</Link>
          <Link to={'../../../cookie-policy'}>COOKIE POLICY</Link>
        </div>
      </div>

      <div className={styles.FooterLeft}>
        <a
          href={'https://www.instagram.com/ebibloapp/'}
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
        <a
          href={'https://mobile.twitter.com/ebibloapp'}
          target="_blank"
          rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
        <a
          href={'https://m.facebook.com/ebiblo/'}
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook size={20} />
        </a>
        <a
          href={'https://linkedin.com/company/ebiblo/'}
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
      </div>

      <div className={styles.FooterMiddle}></div>

      <div className={styles.FooterRight}>
        <p>©Ebiblo. 2020. All rights reserved.</p>
      </div>
    </div>
  );
}
export default Footer;

//