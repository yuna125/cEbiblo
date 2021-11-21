/*
 * This is  My Books page
 */
import React from 'react';
import { Button, Grid, Tab } from 'semantic-ui-react';
import styled from 'styled-components';
import BookCover1 from '../../assets/images/bookCover1.png';
import BookCover2 from '../../assets/images/bookCover2.png';
import BookCover3 from '../../assets/images/bookCover3.png';
import BookCover4 from '../../assets/images/bookCover4.png';
import c22 from '../../assets/images/c22.png';
import { Link } from 'react-router-dom';

const Title = styled.div`
	height: 250px;
	display:inline-block;
`;
const Desc = styled.div`
	
  height: 250px;
`;
const SmallTitle = styled.div`
	font-size: 18px;
	display: block;
	margin-top: 5px;
	margin-bottom: 5px;
	margin-left: 170px;
`;

const Block = styled.div`
	display: block;
`;
const Module = styled.div`
	border-radius: 10px;
	height: 400px;
	width:1000px;
	
`;
const Module1 = styled(Module)`
	
  height:250px;
`;
const Module2 = styled(Module)`
	margin-top:5px;
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
    menuItem: 'Published',
    render: () =>

      <Tab.Pane style={{ border: 'none', borderRadius: '10px', fontSize: '20px' }}>
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
              <Link to={'../../../published'}>
                <Button basic color='blue' style={{ display: "block", marginLeft: '650px' }}>Continue</Button>
              </Link>
            </Block>
            <Block>
              &emsp;
					</Block>
          </Desc>


        </Module1><br />
        <Module2>
          <Title><img style={{ display: "block", marginLeft: '50px' }} src={BookCover2} alt="img" /></Title>
          <Desc>
            <SmallTitle style={{ marginLeft: '170px', marginTop: '0 px', fontSize: "20px" }}>The Prince</SmallTitle>
            <SmallTitle style={{ marginLeft: '170px', marginTop: '15px', fontSize: "12px" }}>Updates 1 day ago</SmallTitle>
            <SmallTitle style={{ marginLeft: '170px', marginTop: '15px', fontSize: "12px" }}>$20 earning this month</SmallTitle>
            <Block>
              <img style={{ marginLeft: '170px', marginTop: '15px' }} src={c22} alt="img" />
            </Block>
            <Block>
              &emsp;
					</Block>
            <Block>
              <Link to={'../../../published'}>
                <Button basic color='blue' style={{ display: "block", marginLeft: '650px' }}>Continue</Button>
              </Link>
            </Block>
            <Block>
              &emsp;
					</Block>
          </Desc>
        </Module2><br></br>
        <Module3>
          <Title><img style={{ display: "block", marginLeft: '50px' }} src={BookCover3} alt="img" /></Title>
          <Desc>
            <SmallTitle style={{ marginLeft: '170px', marginTop: '0 px', fontSize: "20px" }}>Think and Grow Rich!</SmallTitle>
            <SmallTitle style={{ marginLeft: '170px', marginTop: '15px', fontSize: "12px" }}>Updates 31 day ago</SmallTitle>
            <SmallTitle style={{ marginLeft: '170px', marginTop: '15px', fontSize: "12px" }}>$260 earning this month</SmallTitle>
            <Block>
              <img style={{ marginLeft: '170px', marginTop: '15px' }} src={c22} alt="img" />
            </Block>
            <Block>
              &emsp;
					</Block>
            <Block>
              <Link to={'../../../published'}>
                <Button basic color='blue' style={{ display: "block", marginLeft: '650px' }}>Continue</Button>
              </Link>
            </Block>
            <Block>
              &emsp;
					</Block>
          </Desc>
        </Module3><br></br>
        <Module4>
          <Title><img style={{ display: "block", marginLeft: '50px' }} src={BookCover4} alt="img" /></Title>
          <Desc>
            <SmallTitle style={{ marginLeft: '170px', marginTop: '0 px', fontSize: "20px" }}>Essay Writing Gudie</SmallTitle>
            <SmallTitle style={{ marginLeft: '170px', marginTop: '15px', fontSize: "12px" }}>Updates 1 month ago</SmallTitle>
            <SmallTitle style={{ marginLeft: '170px', marginTop: '15px', fontSize: "12px" }}>$10 earning this month</SmallTitle>
            <Block>
              <img style={{ marginLeft: '170px', marginTop: '15px' }} src={c22} alt="img" />
            </Block>
            <Block>
              &emsp;
					</Block>
            <Block>
              <Link to={'../../../published'}>
                <Button basic color='blue' style={{ display: "block", marginLeft: '650px' }}>Continue</Button>
              </Link>
            </Block>
            <Block>
              &emsp;
					</Block>
          </Desc>
        </Module4><br />
      </Tab.Pane >,
  },

  {
    menuItem: 'Drafts',
    render: () =>
      <Tab.Pane style={{ border: 'none', borderRadius: '10px', fontSize: '20px' }}>
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
              <Link to={'../../../drafts'}>
                <Button basic color='blue' style={{ display: "block", marginLeft: '650px' }}>Continue</Button>
              </Link>
            </Block>
            <Block>
              &emsp;
			  </Block>
          </Desc>
        </Module1><br />
        <br />
      </Tab.Pane >,
  }
]

export default panes;