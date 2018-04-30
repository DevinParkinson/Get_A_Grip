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
  background: linear-gradient(black, black, black, silver) !important;
  justify-content: center,
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
