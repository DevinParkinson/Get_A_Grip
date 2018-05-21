import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Container, Header, Button, Checkbox, Form, Divider, Grid } from 'semantic-ui-react';
import {connect} from 'react-redux'
import { setHeaders } from '../actions/headers';

class CustomizePistol extends React.Component {
  state = { pistols: [], my_pistol: [], redirect: false }

  componentDidMount = () => {
    const { dispatch } = this.props;
    axios.get('/api/my_pistol')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ my_pistol: res.data })
      })
  }

  handleRemove = (id) => {
    const { dispatch } = this.props;
    axios.delete(`/api/pistols/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ redirect: true})
      })
  }

  redirectMe = () => {
    if (this.state.redirect) {
      return (<Redirect to="/pistol" />)
    }
  }

  renderMods(p) {
    if(p.modifications) {
      return p.modifications.map(mod => (<div><Checkbox label={<label style={styles.texts}>{mod}</label>} /></div>))
    }
  }

  renderTextures(pistol) {
    if(pistol.textures) {
      return pistol.textures.map(mod => (<div><Checkbox label={<label style={styles.texts}>{mod}</label>} /></div>))
    }
  }

  renderCerakote(pistol) {
    if(pistol.cerakote) {
      return pistol.cerakote.map(mod => (<div><Checkbox label={<label style={styles.texts}>{mod}</label>} /></div>))
    }
  }

  render() {
    const { my_pistol } = this.state;
    if (my_pistol === 0)
    return (
      <Container>
        <Header as="h1" style={styles.text}>
          Looks like you have not selected a pistol. <Link to="/pistol">Click Here</Link> to select your pistol first.
        </Header>
      </Container>
    )
      return (
        my_pistol.map( p =>
        <Grid columns={3}>
            <Container fluid>
              <Header as="h2" key={p.id} style={styles.text}>
                  The Gun that you have chosen is: {p.make} | {p.pistol_model} | {p.gen}
              </Header>
              <Header as="h5" style={styles.texts}>Modifications:</Header>
                <Form.Field style={styles.texts}>{ this.renderMods(p)}</Form.Field>
              <Header as="h5" style={styles.texts}>Textures:</Header>
                <Form.Field style={styles.texts}>{ this.renderTextures(p)}</Form.Field>
              <Header as="h5" style={styles.texts}>Cerakote:</Header>
                <Form.Field style={styles.texts}>{ this.renderCerakote(p)}</Form.Field>
              <Header as="h5" style={styles.texts}>Click the button below if you clicked on the wrong gun.</Header>
              <Button
                size='tiny'
                onClick={() => this.handleRemove(p.id)}
                >
                Remove
              </Button>
              <Divider />
          </Container>
        {this.redirectMe()}
        </Grid>
        )
      )
  }
}

const styles = {
  text: {
    color: "white",
    textAlign: "center",
  },
  texts: {
    color: "white",
    textAlign: "left",

  }
}

const mapStateToProps = (state, props) => {
  const { pistols } = state
  return {
    pistols,
    user: state.user,
  }
}

export default connect(mapStateToProps)(CustomizePistol)
