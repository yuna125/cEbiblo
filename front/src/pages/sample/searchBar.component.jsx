import React from 'react';
import { StatusActionTypes } from '../../redux/status/status.types';
import styles from './searchBar.module.css';
import searchBarImage from '../../assets/images/searchBarImage.png';

const SearchBar = ({ keyword, setKeyword }) => {

  return (
    <div className="searchBar">
      <img src={searchBarImage} alt="search bar logo" className={styles.searchBarImage} />
      <input
        /*type="text"*/
        className={styles.BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search"}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default SearchBar