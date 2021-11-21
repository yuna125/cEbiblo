/*
 * This is Our Navbar Component
 */
import React, {useState} from 'react';
import styles from '../navbar.module.css';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';

function DropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}>
        <FaBars />
      </DropdownToggle>
      <DropdownMenu right>
        <div className={styles.navitem2}>
          <a href="../../../#about" className={styles.dropdownitm}>
            <DropdownItem>About</DropdownItem>
          </a>
        </div>

        <div className={styles.navitem2}>
          <a href="../../../#why" className={styles.dropdownitm}>
            <DropdownItem>Why</DropdownItem>
          </a>
        </div>

        <div className={styles.navitem2}>
          <a href="../../../#how" className={styles.dropdownitm}>
            <DropdownItem>How</DropdownItem>
          </a>
        </div>

        <Link to={'../../../earlyaccess'}>
          <DropdownItem>
            <div className={styles.navitemsp}>Get Early Access</div>
          </DropdownItem>
        </Link>
      </DropdownMenu>
    </Dropdown>
  );
}
export default DropDown;
