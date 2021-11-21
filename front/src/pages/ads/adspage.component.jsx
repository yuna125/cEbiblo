/*
 * This is Our Ads Section Component
 */
import React from 'react';
import styles from './adspage.module.css';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

function AdsPage() {
  return (
    <>
      <div className={styles.main}>
        <Container>
          <p className={styles.tit1}>Get Early Access</p>
          <p className={styles.tit2}>
            Get access to our private beta and receive special discounts.
          </p>
          <Link to={'../../../earlyaccess'}>
            <div className={styles.buttonwrap}>
              <p>Subscribe</p>
            </div>
          </Link>
        </Container>
      </div>
    </>
  );
}
export default AdsPage;
