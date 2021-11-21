/*
 * This is Sidebar
 */
import React, { useState } from 'react';
import Ebiblo from '../../assets/images/ebiblo_logo_webapp_dashboard.png';
import { Input, Button } from 'semantic-ui-react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import userLoggedIn from '../../assets/images/userLoggedIn.png';


function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/* Navigation bar elements - logo, buttons and icons */}
      <div style={{ marginTop: '30px' }}>
        <img src={Ebiblo} alt="ebiblo-logo"
          style={{ marginLeft: "100px", paddingTop: "0.2em", paddingRight: "20px", width: "60px", height: "auto" }}>
        </img>
        <Input
          style={{ width: "300px", height: "45px", fontSize: "14px" }}
          icon='search' iconPosition="left" placeholder='Search' />
        <div style={{ marginLeft: '10px' }}>
          <Navbar color="light" light expand="md">

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
    </DropdownToggle>
                  <DropdownMenu right style={{ width: "200px" }}>
                    <div>
                      <img src={(userLoggedIn)} width={40} height={40} style={{ float: "left", marginRight: "20px", marginLeft: "10px", marginTop: "6px" }} />

                      <h6 style={{ marginBottom: "4px" }}>  </h6 >
                      <h6 style={{ marginLeft: "58px", fontSize: "12px", marginBottom: "3px" }}>Frank Shi </h6>
                      <h6 style={{ marginLeft: "70px", fontSize: "11px", color: "grey", marginBottom: "3px" }}>FrankShi@gmail.com
                     </h6>
                      <h6 style={{ marginLeft: "70px", fontSize: "12px", color: "blue" }}>Manage your account
                     </h6>

                    </div>
                    <hr />
                    <DropdownItem>
                      Inbox
      </DropdownItem>
                    <DropdownItem>
                      Settings
      </DropdownItem>
                    <DropdownItem>
                      Help
      </DropdownItem>
                    <DropdownItem>
                      Logout
      </DropdownItem>

                  </DropdownMenu>

                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
}
export default SideBar;
