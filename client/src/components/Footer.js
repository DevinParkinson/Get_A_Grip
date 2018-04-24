import React, { Component } from 'react';
import {Segment, Header, Icon, Grid, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


class Footer extends Component{

  render() {
    return (
      <Segment inverted vertical>
        <FooterContainer>
          <Grid divided inverted>
            <Grid.Row>
              <Grid.Column mobile={8} tablet={8} computer={5}>
                <Header as='h3' textAlign='center' style={{color: '#ffffff'}}>
                Contact Information
                </Header>
                <Divider />
                <Header as='h4' textAlign='center' style={{color: '#ffffff'}}>
                  (385)269-2900
                </Header>
                <Header as='h4' textAlign='center' style={{color: '#ffffff'}}>
                  Info@getstipplegrip.com
                </Header>
              </Grid.Column>
              <Grid.Column mobile={8} tablet={8} computer={5}>
                <Header as='h3' textAlign='center' style={{color: '#ffffff'}}>
                Want to see everything happening with Get A Grip?
                </Header>
                <Header as='h4' textAlign='center' style={{color: '#ffffff'}}>
                  Follow us here!
                </Header>
                <Header textAlign="center" style={{color: '#ffffff'}}>
                  <Link to="https://www.facebook.com/getstipplegrip/?ref=br_rs" target="_blank"><Icon name='facebook square' size='large' /></Link>
                  <Link to="https://www.instagram.com/getagrip_customs/" target="_blank" ><Icon name='instagram' size='large' /></Link>
                </Header>
              </Grid.Column>
              <Grid.Column mobile={8} tablet={8} computer={5}>
                <Header as='h3' textAlign='center' style={{color: '#ffffff'}}>
                Settings...
                </Header>
                <Header as='h4' textAlign='center' style={{color: '#ffffff'}}>
                    Terms and Conditions...
                </Header>
                <Header as='h4' textAlign='center' style={{color: '#ffffff'}}>
                  License stuff...
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </FooterContainer>
      </Segment>
    )
  }
}

// Styled Components
const FooterContainer = styled.div `
  style={{
    position:'absolute',
    bottom:'0',
    width:'100%',
  }}
`

export default Footer;
