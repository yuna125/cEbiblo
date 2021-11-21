/*
 * This is Our Custom Button Component
 */
import React from 'react';
import styles from './buttons.module.css';

function PrimaryButton(props) {
  return <div className={styles.cbutton}>{props.text}</div>;
}
export default PrimaryButton;
