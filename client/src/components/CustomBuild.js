import React from 'react';
import {connect} from 'react-redux';
import { Container, Header, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import { Card } from 'semantic-ui-react';

class CustomBuild extends React.Component {
  state = { pistols: [], handle: '' }

  componentDidMount = () => {
    const { dispatch } = this.props;
    axios.get('/api/pistols')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ pistols: res.data })
    })
  }

  filterPistols = () => {
    const { pistols } = this.state;
    pistols.map( p =>
      <Card key={p.id}>
        <Card.Header>{p.make}</Card.Header>
        <Card.Content>{p.pistol_model}</Card.Content>
        <Card.Content>{p.gen}</Card.Content>
        <Card.Content>{p.price}</Card.Content>
        <Card.Content>{p.size}</Card.Content>
        <Card.Content>{p.modifications}</Card.Content>
        <Card.Content>{p.textures}</Card.Content>
        <Card.Content>{p.cerakote}</Card.Content>
      </Card>
    )
  }

  categoryPreference = () => {
    const {pistols}  = this.state;
    return pistols.map( (h, i) => {
      return { key: i, text: h, value: h }
    })
  }

  handleSelected = (e, {value}) => {
    let selected = value.toLowerCase();
    this.props.history.push(`/${selected}`)
    this.setState({ handle: value });
    this.visible;
  }

  render() {
    return (
      <Container>
        <Header style={styles.text}>
          Time to build!
        </Header>
        <Header style={styles.text}>
          First, Go ahead and select your pistol, then we can start your customization.
        </Header>
        <Dropdown
          floated='left'
          placeholder='Choose your pistol'
          style={styles.dropdown}
          selection
          value={this.state.handle}
          options={this.categoryPreference()}
          onChange={this.handleSelected}
        />
      </Container>
    )
  }
}

const styles = {
  text: {
    color: "white",
    textAlign: "center",
  },
  dropdown: {
    margin: '20px',
    padding: '20px',
    border: '10px solid #008080',
    height: '2vh',
    width: '25vw',
  },
}

const mapStateToProps = (state, props) => {
  const { pistols } = state
  return {
    pistols,
    user: state.user,
  }
}

export default connect(mapStateToProps)(CustomBuild);
