import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center' style={styles.text}>Pa Modi bo kre armas</Header>
      </div>
    );
  }
}


const styles = {
  text: {
    color: "white",
  },
}

export default Home;
