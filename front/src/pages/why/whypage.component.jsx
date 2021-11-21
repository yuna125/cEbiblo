/*
 * This is Our Why Page Component
 */
import React from 'react';
import styles from './whypage.module.css';
import Clock from '../../assets/images/clock.png';
import Question from '../../assets/images/question.png';
import Focus from '../../assets/images/zoom.png';

function WhyPage() {
  return (
    <>
      <div className={styles.main}>
        <p className={styles.whypgtit}>Why it is hard to read classics?</p>
        <div className={styles.deck}>
          <div className={styles.deckitem}>
            <img src={Clock} alt={'ebiblo'} />
            <br />
            <h6>Lack of time</h6>
            <p>
              You are a book-lover but find no time to read. Look at reading
              books as a journey of a lifetime! Ebiblo is a tool that helps you
              manage your time and plan for this journey.
            </p>
          </div>

          <div className={styles.deckitem}>
            <img src={Focus} alt={'ebiblo'} />
            <br />
            <h6>Lack of focus</h6>
            <p>
              Today, focus is scarce and mobile phones and social media are to
              blame! They stop you from deep reading. Ebiblo helps you overcome
              this problem.
            </p>
          </div>

          <div className={styles.deckitem}>
            <img src={Question} alt={'ebiblo'} />
            <br />
            <h6>Difficult language</h6>
            <p>
              Most classics are hard to understand by general readers. A network
              of experts and friends can assist with the context and true
              meaning of old texts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyPage;
