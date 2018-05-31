import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  justify-content: center;
  background-image: url("http://www.copiaguechamber.org/wp-content/uploads/2017/09/background-dark-metal.jpg");
  background-attachment: fixed;
  width: 100%;
`

class NoMatch extends Component {
  render() {
    return (
      <AppContainer as='h1' textAlign='center'>
        Page Not Found
        <Link to='/'> Home</Link>
      </AppContainer>
    );
  }
}

export default NoMatch;
