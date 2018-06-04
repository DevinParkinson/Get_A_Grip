import React, { Component } from 'react';
import {Segment, Header, Icon, Grid, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


class Footer extends Component{

  render() {
    return (
      <Segment inverted vertical>
        <FooterContainer>
          <Grid divided inverted columns={2}>
            <Grid.Row>
              <Grid.Column>
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
                <Header as='h3' textAlign='center' style={{color: '#ffffff'}}>
                  <Link to='/faq' rel='noopener noreferrer' style={{color: '#ffffff'}}>FAQ's</Link>
                </Header>
              </Grid.Column>
              <Grid.Column>
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
            </Grid.Row>
          </Grid>
        </FooterContainer>
        <Divider />
        <FooterContainer>
          <Header as="h5" textAlign="center" style={{color: '#ffffff'}}>©2016 by Get A Grip Customized Firearms, affiliates Get A Grip Cerakote Works LLC & Get A Grip Stipple Works LLC</Header>
        </FooterContainer>
      </Segment>
    )
  }
}

// Styled Components
const FooterContainer = styled.div `
    position: absolute,
    bottom: 0,
    width: 100%,
`

export default Footer;
