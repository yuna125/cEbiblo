/*
* this is library page  component
*/

import { Container, Row, Col } from 'reactstrap';
import React from 'react';
import styled from 'styled-components';
import Ebiblologo from '../../assets/images/ebiblo_logo_library.png';
import searchbar from '../../assets/images/searchbar.jpg';
import img from '../../assets/images/img.png';
import getstart from '../../assets/images/getstart.png';
import seemore from '../../assets/images/seemore.jpg';
import cover1 from '../../assets/images/library_book_cover.png';
/*import cover2 from '../../assets/images/library_book_cover.png';
import cover3 from '../../assets/images/library_book_cover.png';
import cover4 from '../../assets/images/library_book_cover.png';
import cover5 from '../../assets/images/library_book_cover.png';
import cover6 from '../../assets/images/library_book_cover.png';
import cover7 from '../../assets/images/library_book_cover.png';
import cover8 from '../../assets/images/library_book_cover.png';*/

const Contain = styled.div`
  width: ${props => props.width}px;

`;
const ImgStyle = styled.div`
      margin-top: 24px;
      margin-left: 0;`;
const ButtonStyle = styled.div`
      height: 33px; 
      margin-top: 24px;
      margin-right: 30px;`;
const Logo = styled.div`
  float: left;
  margin-left: 100px;
`;

const LogoTitle = styled.div`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const Flexed = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Box = styled.div`
  display: inline-block;
    margin: 20px;
    height: 60px;
    font-size: 15px;
    font-weight: normal;
    line-height: 60px;
    color: #65676a;
`;
const Library = styled.div`
      margin: 20px auto;
  text-align: center;
  display: block;
      height: 40px;
      font-size: 28px;
      font-weight: normal;
      line-height: 34px;
      color: #65676a;
`;
const Title = styled.div`
`;
const Body = styled.div`
  width: ${props => props.width}px;
  margin-top: 30px;
  background-color: #D7D6D6
`;
const BodyTitle = styled.div`
  margin: 20px;
    display: block;
    font-size: 20px;
    font-weight: bold;
`;
const BodySmallTitle = styled.div`
    font-size: 18px;
  margin: 20px;
  margin-top: 5px;
  display: block;
`;
const BookStyle = styled.div`
    margin: 20px;
    margin-left: 40px;
`;
const BodyStyle = styled.div`
  display: block;
    text-align: left;
`;
const BookDetail = styled.div`
  display: inline-block;
`;
const BookTitle = styled.div`
    margin-top: 20px;
  margin-left: 10px;
  display: block;
`;
const BookDesc = styled.div`
    margin-top: 30px;
    margin-left: 10px;
  display: block;
`;
const More = styled.div`
    margin: 20px;
    float: right;
  display: block;
`;
class libraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.documentElement.clientWidth,
    }

  }
  componentDidMount() {
    window.addEventListener('resize', this.resizeBind)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeBind)
  }
  resizeBind = () => {
    const width = document.documentElement.clientWidth
    this.setState({
      width: width
    })
  }
  render() {
    const { width } = this.state
    return (
      <Contain width={width}>
        <Flexed>
          <Logo>
            <ImgStyle>
              <img src={Ebiblologo} alt="Logo" />
            </ImgStyle>
            <LogoTitle>Ebiblo</LogoTitle>
          </Logo>
          <Title>
            <Box>About</Box>
            <Box>How</Box>
            <Box>Library</Box>
            <ButtonStyle> <img src={getstart} alt="start" /></ButtonStyle>
          </Title>
        </Flexed>
        <Library>Library</Library>
        <Library>
          <img src={searchbar} alt="search" />
        </Library>
        <Body width={width}>
          <BodyTitle>Top 100</BodyTitle>
          <BodySmallTitle>The book with the fastest rise in popularity in the last 30 days</BodySmallTitle>
          <BodyStyle>
            <BookStyle>
              <img src={img} alt="Logo" />
              <BookDetail>
                <BookTitle>1.Meditations</BookTitle>
                <BookDesc>James Clever</BookDesc>
              </BookDetail>
            </BookStyle>
            <BookStyle>
              <img src={img} alt="Logo" />
              <BookDetail>
                <BookTitle>2.Meditations</BookTitle>
                <BookDesc>James Clever</BookDesc>
              </BookDetail>
            </BookStyle>
            <BookStyle>
              <img src={img} alt="Logo" />
              <BookDetail>
                <BookTitle>3.Meditations</BookTitle>
                <BookDesc>James Clever</BookDesc>
              </BookDetail>
            </BookStyle>
            <BookStyle>
              <img src={img} alt="Logo" />
              <BookDetail>
                <BookTitle>4.Meditations</BookTitle>
                <BookDesc>James Clever</BookDesc>
              </BookDetail>
            </BookStyle>
            <BookStyle>
              <img src={img} alt="Logo" />
              <BookDetail>
                <BookTitle>5.Meditations</BookTitle>
                <BookDesc>James Clever</BookDesc>
              </BookDetail>
            </BookStyle>
            <BookStyle>
              <img src={img} alt="Logo" />
              <BookDetail>
                <BookTitle>6.Meditations</BookTitle>
                <BookDesc>James Clever</BookDesc>
              </BookDetail>
            </BookStyle>
            <BookStyle>
              <img src={img} alt="Logo" />
              <BookDetail>
                <BookTitle>7.Meditations</BookTitle>
                <BookDesc>James Clever</BookDesc>
              </BookDetail>
            </BookStyle>
            <BookStyle>
              <img src={img} alt="Logo" />
              <BookDetail>
                <BookTitle>8.Meditations</BookTitle>
                <BookDesc>James Clever</BookDesc>
              </BookDetail>
            </BookStyle>
          </BodyStyle>
          <More>
            See More &gt;
                    </More>
        </Body>
      </Contain>
    )
  }
}

export default libraryPage;
