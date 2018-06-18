import React from 'react';
import { Header, Image, Container, Divider, Grid, Dimmer, Segment, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LandImage from '../images/LandImage.jpg';
import Framework from '../images/Frame.jpg';
import Cerakote from '../images/Cerakote.jpg';
import Grip from '../images/grip.jpg';
import Pic1 from '../images/Pic1.jpg'
import Pic2 from '../images/Pic2.jpg'
import Pic3 from '../images/Pic3.jpg'
import Pic4 from '../images/Pic4.jpg'
import Pic5 from '../images/Pic5.jpg'
import Pic6 from '../images/Pic6.jpg'
import Slides from '../images/Slide.jpg';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import './main.css';


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

const FrameContainer = styled.div`
  height: 90vh;
  width: 30vw;
`

class Home extends React.Component {
  state = {}

  handleShowFrame = () => this.setState({ active: true })
  handleHideFrame = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <AppContainer>
        <Segment textAlign="center" >
          <Header as='h1'>Kings Peak Customs</Header>
            <Carousel autoPlay infiniteLoop width="fluid" height="100vh" showArrows={true}>
                <div>
                    <img src={Pic1} alt='Pic1' />
                    <p className="legend">Kings Peak Customs is Dedicated to providing you with the highest standard of customized Grips, Frameworks, and Slideworks.</p>
                </div>
                <div>
                    <img src={Pic2} alt='Pic2' />
                    <p className="legend">Choose your own Framework. Defender (left) or Operator (right)</p>
                </div>
                <div>
                    <img src={Pic3} alt='Pic3' />
                    <p className="legend">We custom make every pistol so that yours is not only unique, but build just the way that you want.</p>
                </div>
                <div>
                    <img src={Pic4} alt='Pic4' />
                    <p className="legend">Measured fer yer chains Yellow Jack spyglass Jack Tar no prey, no pay yardarm spirits sutler scuppers six pounders. Heave down barque deadlights rutters no prey, no pay league grapple quarter jolly boat capstan. Starboard grog blossom spanker matey lanyard parrel snow tender boom rigging.</p>
                </div>
                <div>
                    <img src={Pic5} alt='Pic5' />
                    <p className="legend">We have several different builds that we <Link to='/gallery' rel='noopener noreferrer'>really enjoy</Link>, or if you want you can start your custom build <Link to='/pistol' rel='noopener noreferrer'>right here</Link> by selecting what pistol you would like to customize!</p>
                </div>
                <div>
                    <img src={Pic6} alt='Pic6' />
                    <p className="legend">Jolly boat league poop deck holystone hogshead hornswaggle bilge rat Jack Ketch sheet tackle. Cutlass lugsail Davy Jones Locker splice the main brace Nelsons folly six pounders prow quarter reef sails Blimey. Port smartly grog blossom Yellow Jack marooned chase aye hang the jib aft flogging.</p>
                </div>
          </Carousel>
        </Segment>
        <Divider />
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
    height: "auto",
    width: "auto",
    textAlign: "center",
    backgroundRepeat: "round",
  }
}

export default Home;
