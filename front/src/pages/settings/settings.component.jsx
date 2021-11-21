import React from 'react';
import "react-web-tabs/dist/react-web-tabs.css";
import styles from './settings.module.css';
import styled from 'styled-components';
import SettingsTabs from './settings.section.component';
import Ebiblo from "../../assets/images/ebiblo_logo_webapp_dashboard.png";
import { Link } from 'react-router-dom';
import notificationBell from '../../assets/images/notification-bell.png';
import userIcon from '../../assets/images/user-icon.png'
import { Dropdown } from 'semantic-ui-react';
import SearchInput from '../../assets/images/search-input.PNG';

function createSettingsPage() {
  return (
    <>

      <div>
        <Link to='../../'>
          <img src={Ebiblo} alt="ebiblo-logo" className={styles.logo1}></img>
        </Link>
        <img src={SearchInput} alt="search-input" className={styles.input1}></img>
        <img src={notificationBell} alt="notification-bell" className={styles.icon1}></img>
        <img src={userIcon} alt="user-icon" className={styles.icon2}></img>
        {/*Sidebar */}
        <Dropdown style={{ marginLeft: '0px', width: '100px' }}>
          <Dropdown.Menu  >
            <div>
              <img src={(userIcon)} width={40} height={40} style={{ float: "left", marginRight: "20px", marginLeft: "10px", marginTop: "6px" }} />
              <h6 style={{ marginBottom: "4px" }}> </h6>
              <h6 style={{ marginLeft: "58px", fontSize: "11px", marginBottom: "3px", paddingLeft: "4px", paddingRight: "4px" }}>Frank Shi</h6>
              <h6 style={{ marginLeft: "70px", fontSize: "9px", color: "grey", marginBottom: "3px", paddingLeft: "4px", paddingRight: "4px" }}>FrankShi@gmail.com</h6>
              <h6 style={{ marginLeft: "70px", fontSize: "11px", color: "blue", paddingLeft: "4px", paddingRight: "4px" }}>Manage your account</h6>
            </div>
            <hr />
            <Dropdown.Item> Inbox</Dropdown.Item>
            <Dropdown.Item><Link to="../../settings" style={{ color: 'black' }}> Settings</Link></Dropdown.Item>
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr className={styles.shade} />
      </div>
      <div>
        <SettingsTabs />
      </div>
    </>
  );
}

export default createSettingsPage;
