import React from 'react';
import styled from 'styled-components';
import Search from '../../assets/images/search-icon.png';
import BookCover from '../../assets/images/BookCover.jpg';
import { Button, Grid, Tab } from 'semantic-ui-react';
import panes from './publishtabs.component';
import Ebiblo from "../../assets/images/ebiblo_logo_webapp_dashboard.png";
import styles from './publishpage.module.scss';
import { Link } from 'react-router-dom';

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


function PublishFormPage() {
	return <>
		{/* Navigation bar elements - logo, buttons and icons */}
		<div style={{ marginTop: '30px' }}>
			<img src={Ebiblo} alt="ebiblo-logo"
				style={{
					marginLeft: "100px",
					paddingTop: "0.1em",
					paddingRight: "20px",
					width: "65px",
					height: "auto"
				}}>
			</img>
			<img src={Search} alt='search-icon'
				style={{
					marginLeft: "30px",
					paddingTop: "0.1em",
					paddingRight: "20px",
					width: "50px",
					height: "auto"
				}}></img>
			<input name='Search' placeholder='Search'
				style={{
					backgroundColor: '#F5F5F5',
					borderRadius: '20px',
					borderColor: '#F5F5F5',
					border: 'none',
					borderTopColor: '#F5F5F5',
					height: '40px',
					fontSize: '18px',
					paddingLeft: '2%'
				}}>
			</input>

			<Link to='../../mybooks'><Button size='small' basic color='blue' style={{ marginLeft: "550px", marginRight: "10px" }}>Save</Button></Link>
			<Link to='../../mybooks'><Button size='small' basic color='blue' style={{ marginLeft: "20px", marginRight: "10px" }}>Publish</Button></Link>

		</div>
		<div className={styles.PublishPage}>
			<img src={BookCover} alt="Book Cover" className={styles.BookCoverPosition}></img>
			<Tab menu={{ secondary: true, pointing: true, centred: true }} panes={panes} />
		</div>
	</>
}

export default PublishFormPage;

