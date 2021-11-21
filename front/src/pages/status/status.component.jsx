import React from 'react';
import { Button, Grid, Tab } from 'semantic-ui-react'
import styled from 'styled-components';
import BookCover1 from '../../assets/images/bookCover1.png';
import c22 from '../../assets/images/c22.png';
import b11 from '../../assets/images/b11.png';
import b22 from '../../assets/images/b22.png';
import b33 from '../../assets/images/b33.png';


{/* Array of languages for dropdown */ }
const Box = styled.div`
	padding:10px;
	background-color: white;
`;
const FlexBox = styled.div`
	display:flex;
	justify-content: center;
`;
const Picture = styled.div`
	height: 10px;
  width: 100px;
`;

const Content = styled.div`
	padding: 10px;
`;
const Title = styled.div`
	height: 250px;
	display:inline-block;
`;
const Desc = styled.div`
	
  height: 250px;
`;
const Lang = styled.div`
	display: block;
	height: 30px;
	margin-left: 170px;
	font-size: 12px;
	width: 30%;
`;

const SmallTitle = styled.div`
	font-size: 18px;
	display: block;
	margin-top: 5px;
	margin-bottom: 5px;
	margin-left: 170px;
`;

const Dis = styled.div`
margin-left: 150px;

`;

const Dis1 = styled.div`
margin-left: 120px;
width: 100px;
height: 10px;
`;


const Block = styled.div`
	display: block;
`;
const Line = styled.div`
	display: inline-block;
`;
const AddButton = styled.div`
	display: block;
	margin-left: 170px;
`;
const Module = styled.div`
	border-radius: 10px;
	height: 400px;
	width:1000px;
	background-color: white;
`;
const Modules = styled.div`
width:800px;
  height:250px;
`;
const Module1 = styled(Module)`
	
  height:250px;
`;
const Module2 = styled(Module)`
	height:250px;
`;
const Module3 = styled(Module)`
  height:250px;
	margin-top:5px;

`;
const Module4 = styled(Module)`
	margin-top:5px;
	height:250px;
`;



{/*Tab components: 2 tabs are rendered, one for details form and another for book description */ }
const panes = [
	{
		menuItem: 'Status',
		render: () =>

			<Tab.Pane style={{ backgroundColor: "#F5F5F5", border: 'none', borderRadius: '10px', fontSize: '20px' }}>
				<Module1>
					<Title><img style={{ display: "block", marginLeft: '50px' }} src={BookCover1} alt="img" /></Title>
					<Desc>
						<SmallTitle style={{ marginLeft: '170px', marginTop: '0 px', fontSize: "20px" }}>Meditations</SmallTitle>
						<SmallTitle style={{ marginLeft: '170px', marginTop: '15px', fontSize: "12px" }}>Updates 10 hours ago</SmallTitle>
						<SmallTitle style={{ marginLeft: '170px', marginTop: '15px', fontSize: "12px" }}>$130 earning this month</SmallTitle>
						<Block>
							<img style={{ marginLeft: '170px', marginTop: '15px' }} src={c22} alt="img" />
						</Block>
						<Block>
							&emsp;
					</Block>
						<Block>
							&emsp;
					</Block>
						<Block>
							&emsp;
					</Block>
					</Desc>
				</Module1><br />
				<Module3>
					<img style={{ marginLeft: '10px', marginTop: '10px' }} src={b11} alt="img" />
				</Module3><br />
				<Module3>
					<img style={{ marginLeft: '10px', marginTop: '2px' }} src={b22} alt="img" />
				</Module3><br />
				<Module4>
					<img style={{ marginLeft: '10px', marginTop: '10px' }} src={b33} alt="img" />
				</Module4><br />
			</Tab.Pane>,
	},

	{
		menuItem: 'earn',
		render: () =>
			<Tab.Pane style={{ backgroundColor: "#F5F5F5", border: 'none', borderRadius: '10px', fontSize: '20px' }}>


			</Tab.Pane>,
	},
	{
		menuItem: 'attitude',
		render: () =>
			<Tab.Pane style={{ backgroundColor: "#F5F5F5", border: 'none', borderRadius: '10px', fontSize: '20px' }}>


			</Tab.Pane>,
	},
	{
		menuItem: 'discuss',
		render: () =>
			<Tab.Pane style={{ backgroundColor: "#F5F5F5", border: 'none', borderRadius: '10px', fontSize: '20px' }}>


			</Tab.Pane>,
	},]

function createstatusTabs() {

	return (
		<>
			{/* Navigation bar elements - logo, buttons and icons */}
			<Box>
				<FlexBox>
					<Content>
						<Grid.Row>
							<Grid.Column width={40}>
								<Tab menu={{ secondary: true, pointing: true, centred: true }} panes={panes} />
							</Grid.Column>
						</Grid.Row>
					</Content>
				</FlexBox>
			</Box>
		</>
	);
}

export default createstatusTabs;
