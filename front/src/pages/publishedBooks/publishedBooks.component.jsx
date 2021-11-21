import React from 'react';
import styled from 'styled-components';
import Search from '../../assets/images/search-icon.png';
import BookCover from '../../assets/images/BookCover.jpg';
import { Button, Dropdown, Grid, Tab } from 'semantic-ui-react';
import panes from './publishedBooksTab.component';
import Ebiblo from "../../assets/images/ebiblo_logo_webapp_dashboard.png";
import { Link } from 'react-router-dom';
import styles from './publishedBooks.module.css';
import SearchInput from '../../assets/images/search-input.PNG';
import notificationBell from '../../assets/images/notification-bell.png';
import userIcon from '../../assets/images/user-icon.png'

//styled components properties declaration
/* This style div sets the background colour of the publishBooks page to #d3d3d3 (light gray)*/
const Box = styled.div`
	padding:10px;
	background-color: #D3D3D3;
`;
/* This style div makes a reusable css flexbox for the webpage, in which flex items can be added for different sections of the webpage. The flex itmes are centre aligned*/
const FlexBox = styled.div`
	display:flex;
	justify-content: center;
`;

/* This styl div defines just a reusable uniform padding property*/
const Content = styled.div`
	padding: 10px;
`;

/* This style div defines properties for a picture*/
const Picture = styled.div`
	width: 40%;
	height: 800px;
	margin: 30px 10px 0 50px;
	padding: 10px;
`;


function publishedBooksTabs() {
  return <>
    {/* Navigation bar elements - logo, buttons and icons */}
    <div>
      <Link to='../../'>
        <img src={Ebiblo} alt="ebiblo-logo" className={styles.logo1}></img>
      </Link>
      <img src={SearchInput} alt="search-input" className={styles.input1}></img>
      <Link to='../../dashboard'><Button size='small' basic color='blue' style={{ marginLeft: "700px", marginRight: "10px" }}>Save</Button></Link>

      <hr className={styles.shade} />
    </div>
    <div style={{ backgroundColor: "#F5F5F5", marginTop: '50px', height: '1900px', width: '1800px' }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} style={{ marginRight: '50px' }}><img src={BookCover} alt="Book Cover" style={{ width: '150px', height: '200px', marginTop: '65px', marginLeft: '80px' }}></img> </Grid.Column>
          <Grid.Column width={10}><Tab menu={{ secondary: true, pointing: true, centred: true }} panes={panes} /></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </>
}

export default publishedBooksTabs;

