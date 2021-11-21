import React from 'react';
import styles from './textblock.module.scss';


function TextBlock(props) {

  //this.props;

  return (
    <div className={styles.TextBlock}>
      <img className={styles.numberImage} src={props.imageUrl} />
      <p className={styles.TextTitle}>{props.TextTitle}</p>
      <p className={styles.TextParagraph}>{props.TextParagraph}</p>
    </div>
  );
}
export default TextBlock;
