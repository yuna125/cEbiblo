import React from 'react';
import { Tab } from 'semantic-ui-react';
import styles from './publishpage.module.css';
import styled from 'styled-components';
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react';

/* CSS modules defined below are style properties that are reusable for the webpage. 
They are defined according to need and use*/

{/* Array of languages for dropdown */ }
const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
]

/* This style div defines reusable heading properties*/
const Title = styled.div`
	width: 150px;
	font-size: 19px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #3060BF;
	margin-right: 20px;
	display:inline-block;
`;

/* This style div makes a reusable css flexbox for the webpage, in which flex items can be added for different sections of the webpage. The flex itmes are centre aligned*/
const FlexBox = styled.div`
	display:flex;
	justify-content: center;
`;
const Desc = styled.div`
	font-size: 18px;
	display:inline-block;
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
	height: 140px;
	width:90%;
	margin-bottom: 5px;
	margin-top:-10px;
	background-color: white;
`;
/* Spefic styles for module 1 on publish Form page - Book Title */
const Module1 = styled(Module)`
	margin-top:5px;
  height:240px;
`;
/* Spefic styles for module 2 on publish Form page - Book Title */
const Module2 = styled(Module)`
	margin-top:5px;
	height:150px;
`;
/* Spefic styles for module 3 on publish Form page - Book Title */
const Module3 = styled(Module)`
  height:180px;
	margin-top:5px;

`;
/* Spefic styles for module 4 on publish Form page - Book Title */
const Module4 = styled(Module)`
	margin-top:5px;
	height:150px;
`;
/* Spefic styles for module 5 on publish Form page - Book Title */
const Module5 = styled(Module)`
	margin-top:5px;
	height:150px;
`;
/* Spefic styles for module 6 on publish Form page - Book Title */
const Module6 = styled(Module)`
	margin-top:5px;
	height:400px;
`;
/* Spefic styles for module 7 on publish Form page - Book Title */
const Module7 = styled(Module)`
	margin-top:5px;
	height:140px;
`;


/* Following is the code for the publish Form webpage. Above defined styles classess
are reused (module-wise) and otherwise. The webpage has a top menu bar with 4 itmes: Details, 
Content, Notes and Summary */
/* TOP MENU ITEM 1- DETAILS */
{/*Tab components: 2 tabs are rendered, one for details form and another for book description */ }
const panes = [
  {
    menuItem: 'Details',
    render: () =>

      <Tab.Pane style={{ backgroundColor: "#F5F5F5", border: 'none', borderRadius: '10px', fontSize: '20px' }}>
        <Module>
          <Title>Language</Title>
          <Desc> Choose the book's primary language</Desc>
          <Lang>
            <Form.Select style={{ fontSize: "14px" }} options={languageOptions} />
          </Lang>
        </Module> <br></br>
        <Module1>
          <Title>Book Title</Title>
          <Desc> Enter your title as it will appear on the book cover</Desc>
          <SmallTitle>Book Title</SmallTitle>
          <Block>
            <Form.Input size='small' placeholder='Book Title' style={{ fontSize: "14px", width: '80%', marginLeft: '170px' }} />
          </Block>
          <SmallTitle>Subtitle(Optional)</SmallTitle>
          <Block>
            <Form.Input size='small' placeholder='Subtitle' style={{ fontSize: "14px", width: '80%', marginLeft: '170px' }} />
          </Block>
        </Module1><br />
        <Module2>
          <Title>Author</Title>
          <Desc> Primary Author or Contributor</Desc>
          <Block>
            <Line>
              <Form.Input size='small' style={{ fontSize: "14px", width: '80%', marginLeft: '170px' }} />
            </Line>
            <Line>
              <Form.Input size='small' style={{ fontSize: "14px", width: '80%', marginLeft: '170px' }} />
            </Line>
          </Block>
        </Module2><br></br>
        <Module3>
          <Title>Contributors</Title>
          <Desc> Contributors</Desc>
          <Block>
            <FlexBox>
              <Form.Select style={{ fontSize: "14px", marginLeft: '60px', marginRight: "10px", marginBottom: "-13px" }} />
              <Form.Input size='small' style={{ fontSize: "14px", marginRight: "10px" }} />
              <Form.Input size='small' style={{ fontSize: "14px", marginRight: "10px" }} />
              <Form.Button>Remove </Form.Button>
            </FlexBox>
          </Block>
          <AddButton>
            <Form.Button>Add </Form.Button><br />
          </AddButton>
        </Module3><br></br>
        <Module4>
          <Title>Description</Title>
          <Desc>This will appear on your book profile on Ebiblo</Desc>
          <Block>
            <Form.TextArea style={{ fontSize: "14px", width: '150%', marginLeft: '170px', width: '770px', borderColor: '#ccc' }} />
          </Block>
        </Module4><br />
        <Module5>
          <Title style={{ marginLeft: "20px" }}>Publishing Rights</Title>
          <br></br>
          <Line>
            <Checkbox label='I own the copyright and I hold the necessary publishing rights' style={{ fontSize: "14px", width: '80%', marginLeft: "150px" }} />
            <Checkbox label='This is a public domain work' style={{ fontSize: "14px", width: '80%', marginLeft: "150px" }} />
          </Line>
        </Module5><br />
        <Module6>
          <Title>Keywords</Title>
          <Desc>Enter up to seven keywords that describe your booking</Desc>
          <Block>
            <Form.Group>
              <Form.Input size='small' style={{ fontSize: "14px", width: '60%', marginLeft: '170px', marginRight: "10px" }} />
              <Form.Input size='small' style={{ fontSize: "14px", width: '60%', marginLeft: '170px' }} />
            </Form.Group>
            <Form.Group>
              <Form.Input size='small' style={{ fontSize: "14px", width: '60%', marginLeft: '170px', marginRight: "10px" }} />
              <Form.Input size='small' style={{ fontSize: "14px", width: '60%', marginLeft: '170px' }} />
            </Form.Group>
            <Form.Group>
              <Form.Input size='small' style={{ fontSize: "14px", width: '60%', marginLeft: '170px', marginRight: "10px" }} />
              <Form.Input size='small' style={{ fontSize: "14px", width: '60%', marginLeft: '170px' }} />
            </Form.Group>
            <Block>
              <Form.Group>
                <Form.Input size='small' style={{ fontSize: "14px", width: '60%', marginLeft: '170px', marginRight: "10px" }} />
              </Form.Group>
            </Block>
          </Block>
        </Module6><br></br>
        <Module7>
          <Title>Categories</Title>
          <Desc>Choose up to two provided categories</Desc>
          <Block>
            <Form.Button style={{ fontSize: "14px", width: '250px', marginLeft: '170px' }}>Set Categories </Form.Button>
          </Block>
        </Module7>
      </Tab.Pane >,
  },
  {
    menuItem: 'Content',
    render: () =>

      <Tab.Pane attached={false} className={styles.palign}>
        <Button.Group style={{ marginLeft: '390px' }}>
          <Button icon>
            <Icon name='bold' />
          </Button>
          <Button icon>
            <Icon name='underline' />
          </Button>
          <Button icon>
            <Icon name='text width' />
          </Button>
          <Button icon>
            <Icon name='align left' />
          </Button>
          <Button icon>
            <Icon name='align center' />
          </Button>
          <Button icon>
            <Icon name='align right' />
          </Button>
          <Button icon>
            <Icon name='align justify' />
          </Button>
        </Button.Group>
        <div>
          <p style={{ fontSize: "15px", marginTop: "12px", textAlign: "justify" }}>
            LORD of a THOUSAND SUNS By POUL ANDERSON <br /> <br />
            A Man without a World, this 1,000,000-year-old  Daryesh! Once Lord of a Thousand Suns, now condemned  to rove the spaceways in alien form, searching  for love, for life, for the great lost Vwyrdda.<br /><br />
            [Transcriber's Note: This etext was produced fromPlanet Stories September 1951.Extensive research did not uncover any evidence thatthe U.S. copyright on this publication was renewed.]<br /><br />
            "Yes, you'll find almost anything man has ever imagined, somewhere out in the Galaxy," I said. "There are so damned many millions of planets, and such a fantastic variety of surface conditions and of life evolving to meet them, and of intelligence and civilization appearing in that life.
            Why, I've been on worlds with fire-breathing dragons, and on worlds where dwarfs fought things that could pass for the goblins our mothers used to scare us with, and on a planet where a race of witches lived—telepathic pseudohypnosis,
            you know—oh, I'll bet there's not a tall story or fairy tale ever told which doesn't have some kind of counterpart somewhere in the universe." <br /><br />
            Laird nodded. "Uh-huh," he answered, in that oddly slow and soft voice of his. "I once let a genie out of a bottle." <br /><br />
            "Eh? What happened?"<br /><br />
            "It killed me."<br /><br />
            I opened my mouth to laugh, and then took a second glance at him and shut it again. He was just too dead-pan serious about it. Not poker-faced, the way a good actor can be when he's slipping over a tall one—no,
            there was a sudden misery behind his eyes, and somehow it was mixed with the damnedest cold humor. <br /><br />
            I didn't know Laird very well. Nobody did. He was out most of the time on Galactic Survey, prowling a thousand eldritch planets never meant for human eyes.
            He came back to the Solar System more rarely and for briefer visits than anyone else in his job, and had less to say about what he had found.<br />
            A huge man, six-and-a-half feet tall, with dark aquiline features and curiously brilliant greenish-grey eyes, middle-aged now though it didn't show except at
            the temples. He was courteous enough to everyone, but shortspoken and slow to laugh. Old friends, who had known him thirty years before when he was the gayest
            and most reckless officer in the Solar Navy, thought something during the Revolt had changed him more than any psychologist would admit was possible. But he had
            never said anything about it, merely resigning his commission after the war and going into Survey.<br /><br />
            We were sitting alone in a corner of the lounge. The Lunar branch of the Explorers' Club maintains its building outside the
            main dome of Selene Center, and we were sitting beside one of the great windows, drinking Centaurian sidecars and swapping the inevitable shop-talk.
            Even Laird indulged in that, though I suspected more because of the information he could get than for any desire of companionship.
            Behind us, the long quiet room was almost empty. Before us, the window opened on the raw magnificence of moonscape, a sweep of crags and cliffs down the crater wall to
            the riven black plains, washed in the eerie blue of Earth's light. Space blazed above us, utter black and a million sparks of frozen flame. <br /><br />
            "Come again?" I said.
        </p>
        </div>
      </Tab.Pane>,
  },
  {
    menuItem: 'Notes',
    render: () =>

      <Tab.Pane attached={false} className={styles.palign}>
        <div>
          <Title>Add your notes</Title>
          <Form.TextArea style={{
            fontSize: "14px",
            marginLeft: "10px",
            width: '970px',
            borderColor: '#ccc'
          }} />
        </div>
      </Tab.Pane>,
  }
]

export default panes;