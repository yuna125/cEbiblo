/*
 * This is Our Navbar Component
 ** Note: 2 packages used for sign-in page: npm install react-bootstrap bootstrap for modal
 and npm install npm install semantic-ui-react semantic-ui-css for social buttons
 */
import React, { useState } from 'react';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';
import Ebiblo from '../../assets/images/ebiblo_logo_webapp.png';
import { Icon, Modal, Button } from 'semantic-ui-react';
import SignUp from './components/signup';

function NavBar() {
  const [visible, setVisible] = React.useState(false)

  const handleSignup = () => {
    setVisible(true)
  }

  const onClose = (flag) => {
    setVisible(flag)
  }

  const switchToSignUp = () => {
    setShow(false)
    setVisible(true)
  }

  {/*Modal state for sign-in*/ }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = React.useState(false)

  return (
    <div className={styles.NavBar}>
      <SignUp visible={visible} handleClose={onClose} />
      <div className={styles.EbibloLogo}>
        <a href="../../../"><img src={Ebiblo} alt="ebiblo logo" /></a>
      </div>

      <div className={styles.RightSide}>
        <div className={styles.NavItem}><a href="../../..#about">About</a></div>
        <div className={styles.NavItem}><a href="../../..#how">How</a></div>
        <div classNane={styles.NavItem}><a href="../../library">Library</a></div>

        <Modal style={{ width: '500px' }} centered={true} closeIcon open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} trigger={<button className={styles.NavItemGetStarted}>Get Started</button>}>
          <p style={{ fontSize: '20px', marginTop: '20px' }}><center>Join Ebiblo</center> </p> <br />
          <div style={{ marginLeft: '100px', marginRight: '100px', width: '300px', height: '300px' }}>
            <button class="ui black basic button" style={{ fontSize: '14px', width: '300px', marginTop: '10px' }}><i class="apple icon"></i>Continue with Apple</button> <br />
            <button class="ui blue basic button" style={{ fontSize: '14px', width: '300px', marginTop: '10px' }}><i class="facebook icon"></i>Continue with Facebook</button> <br />
            <button class="ui red basic button" style={{ fontSize: '14px', width: '300px', marginTop: '10px' }}><i class="google icon"></i>Continue with Google</button> <br />
            <Link to='../../../dashboard'><button class="ui grey basic button" style={{ fontSize: '14px', width: '300px', marginTop: '10px' }}><i class="envelope icon"></i>Continue with Email</button></Link>
            <p style={{ fontSize: '10px', marginTop: '20px' }}>By continuing you agree to our <a href="/privacy">Privacy Policy, </a> <a href="/user-agreement">Terms of Service</a> and <a href="/cookie-policy">Cookie Policy</a></p>
          </div>
        </Modal>
      </div>
    </div>
  );
}
export default NavBar;
