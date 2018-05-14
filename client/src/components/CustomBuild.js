import React from 'react';
import {connect} from 'react-redux';
import { Container, Header, Dropdown, List, Button } from 'semantic-ui-react';
import axios from 'axios';
import {updateUser} from '../actions/auth';
import { setHeaders } from '../actions/headers';

class CustomBuild extends React.Component {
  state = { pistols: [], my_pistol: [] }

  componentDidMount = () => {
    const { dispatch } = this.props;
    axios.get('/api/pistols')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ pistols: res.data })
    }).then(
      axios.get('/api/my_pistol')
        .then( res => {
          dispatch(setHeaders(res.headers))
          this.setState({ my_pistol: res.data })
        })
      )
  }

  handleSelect = (id) => {
    const { dispatch } = this.props;
    axios.put(`/api/pistols/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        dispatch( updateUser())
      })
  }

  handleRemove = (id) => {
    const { dispatch } = this.props;
    axios.delete(`/api/pistols/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        dispatch( updateUser())
      })
  }

  categoryPreferences = () => {
    const { pistols, my_pistol } = this.state;
      if (my_pistol === 0)
    return (
      <Container>
        <Header style={styles.text}>Time to Build!</Header>
        <Header style={styles.text} as='h3'>Select your gun first so we can get your customization started.</Header>
          <Dropdown
            position='center'
            placeholder='Choose your pistol'
            style={styles.dropdown}
            selection
            value={this.state.handle}
            onChange={this.handleSelected}
            fluid
            >
            <Dropdown.Menu>
              <Dropdown.Header> Make  |  Model  |  Gen</Dropdown.Header>
              {pistols.map( p =>
              <Dropdown.Item
                key={p.id}
                onClick={() => this.handleSelect(p.id)}
                >{p.make} | {p.pistol_model} | {p.gen} </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
      </Container>
    )
      return (
            my_pistol.map( p =>
              <Container>
              <Header key={p.id} style={styles.text}>
                The Gun that you have chosen is: {p.make} | {p.pistol_model} | {p.gen}
            </Header>
            <Header as="h5" style={styles.text}>Click the button below if you clicked on the wrong gun.</Header>
            <Button
              onClick={() => this.handleRemove(p.id)}
              centered
              >
              Remove
            </Button>
            <Header style={styles.text}>Here is a list of the available modifications</Header>
            <ul style={styles.text}>{p.modifications}</ul>
          </Container>
          )
      )
  }


  render() {
    return (
      <Container>
        <Header>
          {this.categoryPreferences()}
        </Header>
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
    border: '5px solid #bfbfbf',
    height: '4vh',
    width: 'fill',
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
