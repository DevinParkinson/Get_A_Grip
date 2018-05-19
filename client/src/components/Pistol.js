import React from 'react';
import {connect} from 'react-redux';
import { Container, Header, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom';
import { setHeaders } from '../actions/headers';

class Pistol extends React.Component {
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
      })
  }

  redirectMe = () => {
    if (this.state.redirect) {
      return (<Redirect to="/customize-pistol" />)
    }
  }

  categoryPreferences = () => {
    const { pistols, my_pistol } = this.state;
      if (my_pistol.length === 0)
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
                ><Link to={`/customize-pistol`}>{p.make} | {p.pistol_model} | {p.gen}</Link></Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          {this.redirectMe()}
      </Container>
    )
        return (
          <Container>
            <Header as="h1" style={styles.text}>You have already selected a pistol. <Link to="/customize-pistol">Click Here</Link> to see your pistol and start customizing.</Header>
          </Container>
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

export default connect(mapStateToProps)(Pistol);