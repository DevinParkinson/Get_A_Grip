import React, { Component } from 'react';
import { Header, Image, Container, Divider } from 'semantic-ui-react';
import LandImage from '../images/LandImage.jpg';
import styled from 'styled-components';

const AppContainer = styled.div`
 background: linear-gradient( black, silver, black) !important;
`

class Home extends Component {
  render() {
    return (
      <AppContainer>
        <Header as='h1' textAlign='center' style={styles.text}>Get A Grip</Header>
        <Container>
          <Image src={LandImage} alt='Logo' />
        </Container>
        <Divider />
        <Container style={styles.middleContainer}>
          Here's Some extra stuff about our guns.
        </Container>
      </AppContainer>
    );
  }
}


const styles = {
  text: {
    color: "white",
  },
  middleContainer: {
    height:'200px',
    background: 'white',
    width: '80%',
    justifyContent: 'center',
    color: "black",
  },
}

export default Home;
