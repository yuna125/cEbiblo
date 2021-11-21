import React from 'react';
import styles from './dashboard.module.css';

import Ebiblo from "../../assets/images/ebiblo_logo_webapp_dashboard.png";
import { Link } from 'react-router-dom';
import notificationBell from '../../assets/images/notification-bell.png';
import userIcon from '../../assets/images/user-icon.png'
import { Modal, Dropdown, Grid, Tab } from 'semantic-ui-react';
import BookCover from '../../assets/images/BookCover.jpg';
import SearchInput from '../../assets/images/search-input.PNG';
import panes from './dashboardtab.component';



function DashboardPage() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div style={{ height: '50px' }}>
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
      <div style={{ backgroundColor: "#F5F5F5", marginTop: '50px', height: '1900px', width: '1800px' }}>
        <p style={{ marginLeft: '30px', paddingTop: '30px', fontSize: '18px' }}><b>My Books</b>

          <Modal style={{ width: '500px', height: '270px' }} centered={true} closeIcon open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} trigger={<button style={{ color: 'white', marginLeft: '960px', padding: '12px', borderRadius: '3px', border: 'none', backgroundColor: '#3060BF' }}>+ New Book</button>}>
            <p style={{ fontSize: '20px', marginTop: '20px' }}><center>Create a New Book</center> </p> <br />
            <div style={{ marginLeft: '100px', marginRight: '100px', width: '300px', height: '300px' }}>
              <button class="ui grey basic button" style={{ fontSize: '14px', width: '300px', marginTop: '10px' }}>Create with URL</button> <br />
              <button class="ui grey basic button" style={{ fontSize: '14px', width: '300px', marginTop: '10px' }}>Export from Gutenberg</button> <br />
              <Link to='../../../newbooks'><button class="ui grey basic button" style={{ fontSize: '14px', width: '300px', marginTop: '10px' }}>I will write myself</button> </Link><br />
            </div>
          </Modal></p>

        <Grid>
          <Grid.Row>
            <Grid.Column width={2} style={{ marginRight: '100px' }}><img src={BookCover} alt="Book Cover" style={{ width: '200px', height: '250px', marginTop: '65px', marginLeft: '80px' }}></img> </Grid.Column>
            <Grid.Column width={8}><Tab menu={{ secondary: true, pointing: true, centred: true }} panes={panes} /></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>

  );
}

export default DashboardPage;
