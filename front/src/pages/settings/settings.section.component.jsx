import React from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import styled from 'styled-components';
import c1 from '../../assets/images/c1.png'
import c2 from '../../assets/images/c2.png'
import c3 from '../../assets/images/c3.png'
import './email.module.css';
import cardPic from '../../assets/images/cardPic.png';
import subscriptionCard from '../../assets/images/subcriptionCard.png';
import stripeLogo from '../../assets/images/stripe.png';
import subscribedStatus from '../../assets/images/subscribed.PNG';
import { Link } from 'react-router-dom';
import styles from './settings.module.css';
import { Divider } from 'semantic-ui-react';
import { Button, Form, FormGroup, Label, Input, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import membershipCategory from '../../assets/images/mem-category.PNG';


const h1 = {
  fontSize: "22px",
  fontFamily: "Arial, Helvetica, sans-serif",
  marginTop: "80px",
  marginLeft: "30px",
  color: "#3060BF",
};

const Block = styled.div`
	display: block;
`;

const text1 = {
  fontSize: "20px",
  fontFamily: "Arial, Helvetica, sans-serif",
  textAlign: "left",
  color: "grey"
};

const text2 = {
  fontSize: "18px",
  fontFamily: "Arial, Helvetica, sans-serif",
  textAlign: "left",
  color: "grey"
};

const text3 = {
  fontSize: "16px",
  fontFamily: "Arial, Helvetica, sans-serif",
  textAlign: "left",
  marginLeft: "15px",
  marginTop: "10px",
  color: "grey",
  width: "600px"
};

const text4 = {
  fontSize: "10px",
  fontFamily: "Arial, Helvetica, sans-serif",
  textAlign: "left",
  marginLeft: "18px",
  marginTop: "10px",
  color: "grey",
  width: "600px"
};

const alignList = {
  marginRight: '150px',
  border: 'none',
  color: 'white',
  hover: 'none'
};

const dividerStyle = {
  width: '800px'
};

function SettingsTabs() {
  return (
    <>

      <div style={{ marginLeft: "100px" }}>
        <h1 style={h1}> Settings</h1> <br></br>

        <Tabs defaultTab="vertical-tab" vertical >
          <TabList style={text1} style={alignList}>
            <Tab tabFor="vertical-tab-one" style={text1} className={styles.tab}><b>About you</b></Tab>
            <Tab tabFor="vertical-tab-two" style={text1}><b>Email settings</b></Tab>
            <Tab tabFor="vertical-tab-three" style={text1}><b>Connections</b></Tab>
            <Tab tabFor="vertical-tab-four" style={text1}><b>Payments</b></Tab>
            <Tab tabFor="vertical-tab-five" style={text1}><b>Purchased</b></Tab>
            <Tab tabFor="vertical-tab-six" style={text1}><b>Subscribed</b></Tab>
            <Tab tabFor="vertical-tab-seven" style={text1}><b>Membership</b></Tab>
          </TabList>

          {/*Settings Tab 1: About You */}
          <TabPanel tabId="vertical-tab-one">
            <p style={text2}><b>About you</b></p>
            <Divider style={dividerStyle} />
            <Form style={text2}>
              <FormGroup row>
                <Label for="name" sm={8} style={{ border: '1px' }}>Name</Label><br />
                <Col sm={10}>
                  <Button style={{
                    width: "80px",
                    height: "40px",
                    marginLeft: "700px",
                    backgroundColor: "white",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "grey"
                  }}
                  >Edit</Button> <br></br>

                </Col>

                <Input type="name" name="name" style={{
                  borderLeft: "none",
                  borderRight: "none",
                  borderTop: "none",
                  borderColor: "grey",
                  marginLeft: "8px",
                  width: "600px"

                }} />
                <br />
                <p style={text3}>Your name appears on your Profile page, as your byline, and in your
                    responses. It is a required field</p>
              </FormGroup>
              <br />
              <FormGroup row>
                <Label for="name" sm={8}>Photo</Label>
                <Col sm={10}>
                  <Button style={{
                    width: "80px",
                    height: "40px",
                    marginLeft: "700px",
                    backgroundColor: "white",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "grey"
                  }}
                  >Edit</Button> <br></br>
                  <p style={text3}>Your photo appears on your Profile page. <br /> </p>
                  <p style={text3}>Recommended size: square ,at least 1000 pixels per side. File type: JPG,PNG or GIF.</p>

                </Col>

                <br />


              </FormGroup>

              <FormGroup row>
                <Label for="name" sm={8}>Username </Label><br />
                <Col sm={10}>
                  <Button style={{
                    width: "80px",
                    height: "40px",
                    marginLeft: "700px",
                    backgroundColor: "white",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "grey"
                  }}
                  >Edit</Button> <br></br>

                </Col>
                <Input type="name" name="name" style={{
                  borderLeft: "none",
                  borderRight: "none",
                  borderTop: "none",
                  borderColor: "grey",
                  marginLeft: "8px",
                  width: "600px"

                }} />
                <br /> <br />

              </FormGroup>

              <FormGroup row>
                <Label for="name" sm={8}>URL </Label><br />
                <Col sm={10}>


                </Col>
                <Input type="name" name="name" style={{
                  borderLeft: "none",
                  borderRight: "none",
                  borderTop: "none",
                  borderColor: "grey",
                  marginLeft: "8px",
                  width: "600px"

                }} />
                <br /> <br />

              </FormGroup>

            </Form>
          </TabPanel>
          {/*Settings Tab 2: Email settings 
          <TabPanel tabId="vertical-tab-two" className={styles.text2}>
            <p style={text2}><b>Email settings</b></p>
            <Divider style={dividerStyle} />

            <div style={{ position: "relative", tleft: "25%", tright: "25%", marginLeft: "25px", marginRight: "25px", marginTop: "20px" }}>


              <table>
                <tr >
                  <td >
                    <p style={text2}>Your Email</p>

                  </td>
                  <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                  <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                  <td >
                    <tr style={{ align: "right" }}>
                      <button className="button1">Edit</button>
                    </tr>
                  </td>
                </tr>
                <tr>
                  <input className="emailInput" placeholder='Your email' />
                </tr>
                <tr>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</tr>
                <tr></tr>
                <tr></tr>
                <tr><td><h2>Emails from Ebiblo</h2></td></tr>
                <tr>
                  <td><h3>Ebiblo Digest</h3></td>
                  <tr></tr>

                  <td style={{ marginTop: "20px" }} >
                    <tr style={{ align: "right" }}>
                      <button className="button2">Daily</button>
                      <button className="button3">Weekly</button>

                    </tr>
                  </td>
                  <td style={{ align: "left" }}> <button className="button4">Off</button></td>
                </tr>
                <tr>&emsp;&emsp;</tr>
                <tr>
                  <td>The best books and stories on Ebiblo perosonalized based on your interests,as well as outstanding stories selected by our editors</td>
                </tr>

                <tr>&emsp;&emsp;</tr>
                <tr>
                  <td><h3>Recommended reading</h3></td>
                  <tr></tr>

                  <td style={{ marginTop: "20px" }} >
                    <tr style={{ align: "right" }}>
                      <button className="button2">On</button>
                      <button className="button4">Off</button>
                    </tr>
                  </td>
                </tr>
                <tr>&emsp;&emsp;</tr>
                <tr>
                  <td>Featured stories,columns,and collections that we think you will enjoy based on your reading history</td>
                </tr>

              </table>
            </div>

          </TabPanel> */}
          {/*Settings Tab 3: Connections */}
          <TabPanel tabId="vertical-tab-three" className={styles.text2}>
            <p style={text2}><b>Connections</b></p>
            <Divider style={dividerStyle} />
            <div style={{ position: "relative", tleft: "25%", tright: "25%", marginLeft: "50px", marginRight: "50px", marginTop: "20px" }}>

              <table>
                <tr >
                  <td >
                    <tr><b>Connect to Facebook</b></tr>
                    <tr style={{ fontSize: '8px', color: "grey" }}>We will never post toFacebook or message your friends&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</tr>
                    <tr style={{ fontSize: '8px', color: "grey" }}>without your permission.</tr>
                    <tr>&emsp;&emsp;&emsp;&emsp;&emsp;</tr>
                  </td>
                  <td >
                    <tr style={{ align: "right" }}>
                      <Link to={'../../../privacy'}>
                        <img src={c1} alt="c1" style={{ width: "170px", height: "30" }} />
                      </Link>
                    </tr>
                  </td>
                </tr>


                <tr >
                  <td >
                    <tr ><b>Connect to Apple</b></tr>
                    <tr style={{ fontSize: '8px', color: "grey" }}>We will never post to Apple or message your friends</tr>
                    <tr style={{ fontSize: '8px', color: "grey", borderCollapse: "separate", borderSpacing: "0px 50px" }}>without your permission.</tr>
                    <tr>&emsp;&emsp;&emsp;&emsp;&emsp;</tr>
                  </td>

                  <td >
                    <tr>
                      <Link to={'../../../privacy'}>
                        <img src={c2} alt="c2" style={{ width: "170px", height: "30" }} />
                      </Link>
                    </tr>
                  </td>

                </tr>


                <tr >
                  <td >
                    <tr ><b>Connect to Google</b></tr>
                    <tr style={{ fontSize: '8px', color: "grey" }}>We will never post to Google or message your friends</tr>
                    <tr style={{ fontSize: '8px', color: "grey", borderCollapse: "separate", borderSpacing: "0px 50px" }}>without your permission.</tr>

                  </td>

                  <td >
                    <tr>
                      <Link to={'../../../privacy'}>
                        <img src={c3} alt="c3" style={{ width: "170px", height: "30" }} />
                      </Link>
                    </tr>
                  </td>
                </tr>
              </table>
            </div>
          </TabPanel>
          {/*Settings Tab 4: Payments */}
          <TabPanel tabId="vertical-tab-four" >
            <p style={text2}><b>Payments</b></p>
            <Divider style={dividerStyle} />
            <Form style={text2}>
              <FormGroup row>
                <Col sm={10}>
                  <Label for="name" sm={8}>Your Cards</Label>
                  <p style={text3}>Here is a list of all your cards currently in use to pay for all your subscriptions</p>
                  <Button style={{
                    width: "130px",
                    height: "40px",
                    marginBottom: "10px",
                    marginTop: "2px",
                    marginLeft: "700px",
                    color: "white",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    backgroundColor: "#3060BF"
                  }}
                  >+New Card</Button> <br></br>
                  <Button style={{
                    width: "130px",
                    height: "40px",
                    marginLeft: "700px",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "grey"
                  }}
                  >Edit Card</Button> <br></br>

                </Col>
                <img src={cardPic}></img>
                <Divider style={dividerStyle} />
              </FormGroup>

              <FormGroup row>
                <Label for="name" sm={8}>Subscription Details</Label><br />
                <p style={text3}>Here is a list of all of your current subscriptions and its details.</p>
                <Col sm={10}>
                  <Button style={{
                    width: "130px",
                    height: "40px",
                    marginBottom: "10px",
                    marginTop: "2px",
                    marginLeft: "700px",
                    color: "white",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    backgroundColor: "#3060BF"
                  }}
                  >+Add New</Button> <br></br>
                  <Button style={{
                    width: "130px",
                    height: "40px",
                    marginLeft: "700px",
                    color: "white",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "grey"
                  }}
                  >Edit Current</Button> <br></br>
                </Col>
                <img src={subscriptionCard}></img>
                <Divider style={dividerStyle} />

              </FormGroup>

              <FormGroup row>
                <Label for="name" sm={8}>Payment & Subscription Policies </Label><br />

                <Col sm={10}>
                  <Button style={{
                    width: "130px",
                    height: "40px",
                    marginLeft: "700px",
                    backgroundColor: "white",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "grey"
                  }}
                  >Read Now</Button> <br></br>
                  <p style={text3}>Please make sure to read our Payment Policies as well as our Subscription
                  Policies to understand how we charge your payments, the data and information that we may collect and how we may use those data and information.</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Divider style={dividerStyle} />
                <Label for="name" sm={8}>Stripe Integration </Label><br />
                <Col sm={10}>
                  <img src={stripeLogo}></img>
                  <Button style={{
                    width: "130px",
                    height: "40px",
                    marginLeft: "700px",
                    backgroundColor: "white",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "grey"
                  }}
                  >Learn More</Button> <br></br>
                  <p style={text3}>We are proud to use Stripe as our payment method.</p>

                </Col>
              </FormGroup>
            </Form>
          </TabPanel>
          {/*Settings Tab 5: Purchased */}
          <TabPanel tabId="vertical-tab-five" >
            <p style={text2}><b>Purchased</b></p>
          </TabPanel>
          {/*Settings Tab 6: Subscribed */}
          <TabPanel tabId="vertical-tab-six" >
            <p style={text2}><b>Subscribed</b></p>
            <Divider style={dividerStyle} />
            <img src={subscribedStatus}></img>
          </TabPanel>
          {/*Settings Tab 7: Membership */}
          <TabPanel tabId="vertical-tab-seven" >
            <p style={text2}><b>Membership</b></p>
            <Divider style={dividerStyle} />
            <Form>
              <FormGroup row>
                <Label for="name" sm={8} style={text3}> Membership Details</Label><br />
                <Col sm={10}>
                  <p style={text3}>Your membership: <u><b>Basic</b></u></p>
                  <Button style={{
                    width: "130px",
                    height: "40px",
                    marginBottom: "10px",
                    marginTop: "2px",
                    marginLeft: "700px",
                    color: "white",
                    borderColor: "grey",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    backgroundColor: "#3060BF"
                  }}
                  >Change</Button> <br></br>
                </Col>
                <br />
                <img src={membershipCategory}></img>
              </FormGroup>
            </Form>
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}

export default SettingsTabs;