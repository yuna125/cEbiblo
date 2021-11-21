import React from 'react';
import { Button, Image, Tab, Grid } from 'semantic-ui-react';
import BookCover1 from '../../assets/images/bookCover1.png';
import BookCover2 from '../../assets/images/bookCover2.png';
import BookCover3 from '../../assets/images/bookCover3.png';
import BookCover4 from '../../assets/images/bookCover4.png';
import styles from './dashboard.module.css';
import placeHolder from '../../assets/images/placeHolder.PNG';
import moreIcon from '../../assets/images/more-icon.png';
import { Link } from 'react-router-dom';

const panes = [
  {
    menuItem: 'Published',
    render: () =>
      <Tab.Pane attached={false}>
        <Grid>
          <Grid.Column width={4}>
            <Image src={BookCover1} className={styles.cover} />
          </Grid.Column>
          <Grid.Column width={10}>
            <p className={styles.text1}>Meditations <Link to='../../status'><img src={moreIcon} style={{ marginLeft: '540px', width: '30px' }}></img></Link></p>
            <p className={styles.text2}> Updated 10 hours ago</p>
            <p className={styles.text2}>$50.00 earnings this month</p>
            <img src={placeHolder} ></img>
            <Link to="../../publishedBooks"><Button basic color='blue' style={{ marginLeft: '500px' }}>Continue</Button></Link>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={4}>
            <Image src={BookCover2} className={styles.cover} />
          </Grid.Column>
          <Grid.Column width={10}>
            <p className={styles.text1}>The Prince <img src={moreIcon} style={{ marginLeft: '540px', width: '30px' }}></img></p>
            <p className={styles.text2}> Updated 10 hours ago</p>
            <p className={styles.text2}>$40.00 earnings this month</p>
            <img src={placeHolder}></img>
            <Button basic color='blue' style={{ marginLeft: '500px' }}>Continue</Button>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={4}>
            <Image src={BookCover3} className={styles.cover} />
          </Grid.Column>
          <Grid.Column width={10}>
            <p className={styles.text1}>Think and Grow Rich! <img src={moreIcon} style={{ marginLeft: '540px', width: '30px' }}></img> </p>
            <p className={styles.text2}> Updated 10 hours ago</p>
            <p className={styles.text2}>$130.00 earnings this month</p>
            <img src={placeHolder}></img>
            <Button basic color='blue' style={{ marginLeft: '500px' }}>Continue</Button>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={4}>
            <Image src={BookCover4} className={styles.cover} />
          </Grid.Column>
          <Grid.Column width={10}>
            <p className={styles.text1}>Essay Writing Guide<img src={moreIcon} style={{ marginLeft: '540px', width: '30px' }}></img> </p>
            <p className={styles.text2}> Updated 10 hours ago</p>
            <p className={styles.text2}>$90.00 earnings this month</p>
            <img src={placeHolder}></img>
            <Button basic color='blue' style={{ marginLeft: '500px' }}>Continue</Button>
          </Grid.Column>
        </Grid>
      </Tab.Pane>,
  },
  {
    menuItem: 'Drafts',
    render: () =>
      <Tab.Pane attached={false}>
        <Grid>
          <Grid.Column width={4}>
            <Image src={BookCover1} className={styles.cover} />
          </Grid.Column>
          <Grid.Column width={10}>
            <p className={styles.text1}>Meditations</p> <br />
            <p className={styles.text2}> Updated 10 hours ago</p>
            <p className={styles.text2}>$50.00 earnings this month</p>
            <img src={placeHolder} ></img>
            <Link to="../../drafts"><Button basic color='blue' style={{ marginLeft: '500px' }}>Continue</Button></Link>
          </Grid.Column>
        </Grid>
      </Tab.Pane>,
  },
]

export default panes;