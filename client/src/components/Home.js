import React from 'react';
import { Header, Image, Container, Divider, Grid, Dimmer, Segment, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LandImage from '../images/LandImage.jpg';
import Framework from '../images/Frame.jpg';
import Cerakote from '../images/Cerakote.jpg';
import Grip from '../images/grip.jpg';
import Slides from '../images/Slide.jpg';
import styled from 'styled-components';

const AppContainer = styled.div`
  justify-content: center;
  background-image: url("http://www.copiaguechamber.org/wp-content/uploads/2017/09/background-dark-metal.jpg");
  background-attachment: fixed;
  width: 100%;
`
const StyledImage = styled(Image)`
  display: block !important;
  height: auto !important;
  width: fluid !important;
`

class Home extends React.Component {
  state = {}

  handleShowFrame = () => this.setState({ active: true })
  handleHideFrame = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <AppContainer>
        <Header as='h1' style={styles.text}>Kings Peak Customs</Header>
        <Container>
          <Image src={LandImage} alt='Logo' />
        </Container>
        <Divider />
        <Container>
          <Header as='h3' style={styles.text}>Kings Peak Customs is Dedicated to providing you with the highest standard of customized Grips, Frameworks, and Slideworks.</Header>
          <Header as='h5' style={styles.text}>We custom make every pistol so that yours is not only unique, but build just the way that you want.</Header>
          <Header as='h5' style={styles.text}>We have several different builds that we <Link to='/gallery' rel='noopener noreferrer'>really enjoy</Link>, or if you want you can start your custom build <Link to='/pistol' rel='noopener noreferrer'>right here</Link> by selecting what pistol you would like to customize!</Header>
        </Container>
        <Divider hidden />
        <Divider hidden />
        <Dimmer.Dimmable as={Segment} dimmed={active} style={styles.backFrame}>
          <Divider hidden />
          <Header as='h1' inverted>Frameworks</Header>
            <Divider hidden />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Dimmer active={active}>
              <Header as='h2' inverted>
                There are two different kinds of Frameworks.
              </Header>
              <Header as='h5' inverted>Operator</Header>
              <Header as='h5' inverted>Defender</Header>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button inverted size="large" onClick={this.handleHideFrame}>Hide Frameworks</Button>
            </Dimmer>
          <Button inverted size='large' onClick={this.handleShowFrame}>See Frameworks</Button>
        </Dimmer.Dimmable>
        <Container>
          <Header as="h1" style={styles.text}>Pricing</Header>
          <Header as="h3" style={styles.text}>We like to keep it clean cut, affordable, and simple here. Pricing is based on the size of the pistol.</Header>
          <Header as="h4" style={styles.text}>Full Size Pistol: $225</Header>
          <Header as="h4" style={styles.text}>Compact Pistol: $200</Header>
          <Header as="h4" style={styles.text}>Subcompact Pistol: $175</Header>
          <Header as="h4" style={styles.text}>1 Coat of Cerakote: $20</Header>
          <Header as="h4" style={styles.text}>And if, for any reason, you need to return it. It is just $20 for the return shipping, which includes insurance.</Header>
        </Container>
        <br />
      </AppContainer>
    );
  }
}


const styles = {
  text: {
    color: "white",
    textAlign: "center",
  },
  backFrame: {
    backgroundImage: `url(${Framework})`,
    height: "90vh",
    width: "100%",
    textAlign: "center",
    backgroundSize: "cover",
  }
}

export default Home;
