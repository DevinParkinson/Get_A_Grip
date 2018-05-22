import React, { Component } from 'react';
import { Header, Image, Container, Divider, Grid, Dimmer, Card, Button } from 'semantic-ui-react';
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
const GridMain = styled.div`
  width: 100%
  height: 100%
  text-align: center
  align-self: center
`
const StyledImage = styled(Image)`
  align-items: center !important;
  justify-content: center !important;
  display: flex !important;
  height: 25vh !important;
  width: auto !important;
`

class Home extends Component {
  state = { active1: false, active2: false, active3: false, active4: false}

  handleShow = () => this.setState({ active1: !this.state.active1 })
  handleShow2 = () => this.setState({ active2: !this.state.active2 })
  handleShow3 = () => this.setState({ active3: !this.state.active3 })
  handleShow4 = () => this.setState({ active4: !this.state.active4 })


  render() {
    const { active1, active2, active3, active4 } = this.state;
    return (
      <AppContainer>
        <Header as='h1' style={styles.text}>Kings Peak Customs</Header>
        <Container>
          <Image src={LandImage} alt='Logo' />
        </Container>
        <Divider />
        <Container style={styles.middleContainer}>
          <Header as='h3' style={styles.text}>Kings Peak Customs is Dedicated to providing you with the highest standard of customized Grips, Frameworks, and Slideworks.</Header>
          <Header as='h5' style={styles.text}>We custom make every pistol so that yours is not only unique, but build just the way that you want.</Header>
          <Header as='h5' style={styles.text}>We have several different builds that we <Link to='/gallery'>really enjoy</Link>, or if you want you can start your custom build <Link to='/pistol'>right here</Link> by selecting what pistol you would like to customize!</Header>
        </Container>
        <Divider hidden />
        <Divider hidden />
        <Container style={styles.middleContainer}>
          <GridMain>
          <Grid>
            <Grid.Row centered columns={4}>
              <Grid.Column
                computer={8}
                mobile={12}
                tablet={8}
              >
              <Dimmer.Dimmable as={Card} dimmed={active4}>
                <Dimmer active={active4}>
                  <Header style={styles.text} as='h3'>Grips</Header>
                  <Header style={styles.text} as='h5'>Grip determines the actual grip of the gun.</Header>
                </Dimmer>
                <Header as='h2'>Grips</Header>
                <StyledImage src={Grip} />
              </Dimmer.Dimmable>
              <Button.Group compact>
                <Button onClick={this.handleShow4}>
                  { active4 === false
                    ?
                    "Show"
                    :
                    "Hide"
                  }
                </Button>
              </Button.Group>
              <Divider hidden />
            </Grid.Column>
              <Grid.Column
                computer={8}
                mobile={12}
                tablet={8}
              >
              <Dimmer.Dimmable as={Card} dimmed={active1}>
                <Dimmer active={active1}>
                  <Header style={styles.text} as='h3'>Framework is the work that is done on the frame of the pistol</Header>
                  <Header style={styles.text} as='h5'>Here are a couple of the different styles you can choose from:</Header>
                  <ul>Operator</ul>
                  <ul>Defender</ul>
                  <ul>Frame</ul>
                </Dimmer>
                <Header as='h2'>Frameworks</Header>
                <StyledImage src={Framework} />
              </Dimmer.Dimmable>
              <Button.Group compact>
                <Button onClick={this.handleShow}>
                  { active1 === false
                    ?
                    "Show"
                    :
                    "Hide"
                  }
                </Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column
              computer={8}
              mobile={12}
              tablet={8}
            >
            <Dimmer.Dimmable as={Card} dimmed={active2}>
              <Dimmer active={active2} onClickOutside={this.handleShow2}>
                <Header style={styles.text} as='h3'>Slidework is the work that is done on the slide of the pistol</Header>
              </Dimmer>
              <Header as='h2'>Slidework</Header>
              <StyledImage src={Slides} />
            </Dimmer.Dimmable>
            <Button.Group compact>
              <Button onClick={this.handleShow2}>
                { active2 === false
                  ?
                  "Show"
                  :
                  "Hide"
                }
              </Button>
            </Button.Group>
          </Grid.Column>
          <Grid.Column
            computer={8}
            mobile={12}
            tablet={8}
          >
            <Dimmer.Dimmable as={Card} dimmed={active3}>
              <Dimmer active={active3} onClickOutside={this.handleShow3}>
                <Header style={styles.text} as='h3'>Cerakote is the type of paint on the pistol</Header>
              </Dimmer>
                <Header as='h2'>Cerakote</Header>
                  <StyledImage src={Cerakote} />
                </Dimmer.Dimmable>
              <Button.Group compact>
                <Button onClick={this.handleShow3}>
                  { active3 === false
                    ?
                    "Show"
                    :
                    "Hide"
                  }
                </Button>
              </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </GridMain>
        <Divider hidden />
        </Container>
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
  middleContainer: {
    height:'fill',
    background: 'transparent',
    width: 'fluid',
    color: "black",
  },
}

export default Home;
