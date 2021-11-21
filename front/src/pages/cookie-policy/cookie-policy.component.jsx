/*
 * This is Our Privacy Page
 */
import React, {useEffect} from 'react';
import styles from './cookie-policy.module.css';
import {Container} from 'reactstrap';

function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className={styles.main}>
        <Container>
          <div>
            <h3>Cookie Policy</h3>
            

            <br />
           
            <p>
            This Cookie Policy applies to your use of Ebiblo’s ("us", "we", or "our") website <a href="/"> Ebiblo.com</a> and “Services” (any product or service provided by Ebiblo pursuant to our <a href="/user-agreement">User Agreement</a>), and explains what cookies are, how we use cookies and how third-parties that we may partner with may use cookies.
              
            </p>
            <p>
            By continuing to browse or use our Services, you agree that we can store and access cookies and other tracking technologies as described in this Cookie Policy.
            </p>


            <h4>
            1. What are cookies
            </h4>
            <p>
            Cookies are tiny pieces of text that are placed on your device when you visit a website meant to improve your experience. A cookie file is stored in your web browser and allows us or a third-party to recognise you on further visits, or to authorise other designated websites to recognise you for a particular purpose, such as to make your next visit easier or the Service more useful to you.
            </p>
            
            
            <h4>
            2. How and why Ebiblo uses cookies
            </h4>

            
            <p>
            Except as permitted through the Services or as otherwise permitted by us in writing, 
            your license does not include the right to:

            <ul>
              <li>
              2.1. When you use our website and the Services, we may place a number of cookie files in your web browser.
              </li>
              <li>
              2.2. We use cookies for a variety of reasons. The main purposes are: to let our website and Services operate, to enable certain functions of the Service, to identify you and your interests, to remember your preferences, to ensure that everyone who uses our website or Services has the best possible experience, to track the interests of our website visitors. 
              </li>
              <li>
              2.3. Third-parties may serve cookies through our website and Services to provide analytics, to store your preferences and personalize your experience, to enable delivery of advertisements, including behavioral advertising and other types. The cookies set by a third-party may change from time to time and we have no control over these cookies.

              </li>
              <li>
              2.4. We may use cookies and other tracking technologies to collect “Personal Data” (any information relating to an identified or identifiable natural person), for more information about how we process your Personal Data, please review our <a href="/privacy">Privacy Policy</a>.

              </li>
              <li>
              2.5. The data collected by our website and/or through Cookies that may be placed on your computer will not be kept for longer than is necessary to fulfil the purposes mentioned above.

              </li>
              <li>
              2.6. Do Not Track (DNT) is a web browser setting that requests that a web application disable its tracking of an individual user. Some web browsers include the ability to transmit these signals. Since there is no universally-agreed upon standard for what a company should do when it detects a DNT signal, Ebiblo doesn’t currently process or respond to DNT signals.

              </li>
            </ul>
            </p>
            

            <h4>
            Contacting Ebiblo
            </h4>
            <p>
            If you have any questions about our Cookie Policy, please contact us any time via email: 
            </p>

            <p>
            <a href="mailto:contact@ebiblo.com.
">contact@ebiblo.com</a>.


            </p>


          </div>
        </Container>
      </div>
    </>
  );
}
export default CookiePolicy;
