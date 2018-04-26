import React, { Component } from 'react';
import { Header, Image, Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LandImage from '../images/LandImage.jpg';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, black, black, silver, black, black, silver, black) !important;
`

class Home extends Component {
  render() {
    return (
      <AppContainer>
        <Header as='h1' style={styles.text}>Get A Grip</Header>
        <Container>
          <Image src={LandImage} alt='Logo' />
        </Container>
        <Divider />
        <Container style={styles.middleContainer}>
          <Header as='h3' style={styles.text}>Get A Grip Customs is Dedicated to providing you with the highest standard of customized Grips, Frameworks, and Slideworks.</Header>
          <Header as='h5' style={styles.text}>We custom make every pistol so that yours is not only unique, but build just the way that you want.</Header>
          <Header as='h5' style={styles.text}>We have several different builds that we <Link to='/gallery'>really enjoy</Link>, or if you want you can start your <Link to='/custom-build-pistols'>Custom Build</Link> right here!</Header>
        </Container>
      </AppContainer>
    );
  }
}


const styles = {
  text: {
    color: "white",
    textAlign: "center",
  },
  middleContainer: {
    height:'200px',
    background: 'black',
    width: '80%',
    justifyContent: 'center',
    color: "black",
  },
}

export default Home;
