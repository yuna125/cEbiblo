import React from 'react'
import styles from './mybooksnav.module.css';
import searchInput from '../../assets/images/search-input.PNG';
import Ebiblo from '../../assets/images/ebiblo_logo_webapp_dashboard.png';
import notificationBell from '../../assets/images/notification-bell.png';
import userIcon from '../../assets/images/userLoggedIn.png';


function NavBar() {

    return <>
        <img src={Ebiblo} alt="ebiblo-logo" className={styles.logo1}></img>
        <img src={searchInput} alt="search-input" className={styles.icon1}></img>
        <img src={notificationBell} alt="ebiblo-logo" className={styles.icon2}></img>
        <img src={userIcon} alt='search-icon' className={styles.icon3}></img>
    </>
}

export default NavBar;

