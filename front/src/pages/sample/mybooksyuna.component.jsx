/*
 * This is  My Books page
 */
import React from 'react';
import { Grid, Tab } from 'semantic-ui-react';
import NavBar from './mybooksnav.component';
import panes from '../dashboard/tab.component';
import styles from './mybooks.module.css';
import styled from 'styled-components';
import { Component } from 'react';

const Box = styled.div`
	padding:10px;
	
`;
const FlexBox = styled.div`
	display:flex;
	justify-content: center;
`;

const Content = styled.div`
	padding: 10px;
`;

//responsive style package
const Contain = styled.div`
  width: ${props => props.width}px;

`;

const Body = styled.div`
  width: ${props => props.width}px;
  margin-top: 30px;
  background-color: #D7D6D6
`;

function createDashboardTab() {
	return (
		<>
			<NavBar />
			<div style={{ backgroundColor: "#F5F5F5", width: '1370px', marginTop: '15px', marginLeft: '0' }}>
				<h1 className={styles.text1}>My Books</h1>
				<Grid.Row>
					<Grid.Column width={30}>
						<Tab menu={{ secondary: true, pointing: true, centred: true }} panes={panes} />
					</Grid.Column>
				</Grid.Row>
			</div>
		</>

	);
}

export default createDashboardTab;

