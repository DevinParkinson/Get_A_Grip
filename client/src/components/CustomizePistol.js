import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Header, Button, Checkbox, Form, Divider, Grid } from 'semantic-ui-react';
import { setHeaders } from '../actions/headers';
import styled from 'styled-components';

const AppContainer = styled.div`
  justify-content: center;
  background-image: url("http://www.copiaguechamber.org/wp-content/uploads/2017/09/background-dark-metal.jpg");
  background-attachment: fixed;
  width: fluid;
  height: 100vh;
  overflow: auto;
`

class CustomizePistol extends React.Component {
  state = { pistols: [], my_pistol: [], redirect: false, my_order: [], textures: [], cerakote: [], price: [] }

  componentDidMount = () => {
    const { dispatch } = this.props;
    axios.get('/api/my_pistol')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ my_pistol: res.data })
      }).then(
        axios.get('/api/my_order')
          .then( res => {
            console.log(res.data)
              dispatch(setHeaders(res.headers))
              this.setState({ my_order: res.data })
        })
      )
  }

  handleRemove = (id) => {
    const { dispatch } = this.props;
    axios.delete(`/api/pistols/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ redirect: true})
      })
  }

  handleMods = (id) => {
    const {dispatch} = this.props;
    axios.put(`/api/my_order/`)
    .then( res => {
      dispatch(setHeaders(res.headers))
      this.setState({ my_order: res.data })
    })
  }

  handleTextures = (id) => {
    const {dispatch} = this.props;
    axios.put(`/api/textures/`)
    .then( res => {
      dispatch(setHeaders(res.headers))
      this.setState({ textures: res.data })
    })
  }

  handleCerakote = (id) => {
    const {dispatch} = this.props;
    axios.put(`/api/cerakote/`)
    .then( res => {
      dispatch(setHeaders(res.headers))
      this.setState({ cerakote: res.data })
    })
  }

  redirectMe = () => {
    if (this.state.redirect) {
      return (<Redirect to="/pistol" />)
    }
  }

  renderMods(p) {
    if(p.modifications) {
      return p.modifications.map((mod, i) => (<div><Checkbox onClick={() => this.handleMods(p.modifications[i])} label={<label style={styles.texts}>{mod}</label>} /></div>))
    }
  }

  renderTextures(p) {
    if(p.textures) {
      return p.textures.map((mod, i) => (<div><Checkbox onClick={() => this.handleTextures(p.textures[i])} label={<label style={styles.texts}>{mod}</label>} /></div>))
    }
  }

  renderCerakote(p) {
    if(p.cerakote) {
      return p.cerakote.map(mod => (<div><Checkbox label={<label style={styles.texts}>{mod}</label>} /></div>))
    }
  }

  render() {
    const { my_pistol, my_order } = this.state;
    if (my_pistol.length === 0)
    return (
      <AppContainer>
        <Header as="h1" style={styles.text}>
          Looks like you have not selected a pistol. <Link to="/pistol">Click Here</Link> to select your pistol first.
        </Header>
      </AppContainer>
    )
      return (
        my_pistol.map( p =>
        <AppContainer>
          <Header as="h2" key={p.id} style={styles.text}>
          </Header>
          <Grid columns={2} rows="equal">
            <Grid.Column>
              <AppContainer>
                <Grid.Row>
                  <Header as="h5" style={styles.texts}>Modifications:</Header>
                    <Form.Field style={styles.texts}>{ this.renderMods(p)}</Form.Field>
              </Grid.Row>
                <Divider hidden />
              <Grid.Row>
                <Header as="h5" style={styles.texts}>Textures:</Header>
                  <Form.Field style={styles.texts}>{ this.renderTextures(p)}</Form.Field>
              </Grid.Row>
                <Divider hidden />
              <Grid.Row>
                <Header as="h5" style={styles.texts}>Cerakote:</Header>
                  <Form.Field style={styles.texts}>{ this.renderCerakote(p)}</Form.Field>
              </Grid.Row>
                <Divider hidden />
                <Divider hidden />
                <Header as="h5" style={styles.texts}>Click the button below if you clicked on the wrong gun.</Header>
                <Button
                  size='tiny'
                  onClick={() => this.handleRemove(p.id)}
                  >
                  Remove
                </Button>
              </AppContainer>
            </Grid.Column>
              {my_order.map( order =>
                <Grid.Column>
                  <Header as='h3' style={styles.rtexts}>The Gun that you have chosen is: {p.make} | {p.pistol_model} | {p.gen}</Header>
                  <Header as='h5' key={order.id} style={styles.texts}>{order.modifications}</Header>
                  <Divider hidden />
                  <Header as='h3' style={styles.rtexts}>The price of your order is: {p.price}</Header>
            </Grid.Column>
          )}
            {this.redirectMe()}
          </Grid>
        </AppContainer>
        )
        )
  }
}

const styles = {
  text: {
    color: "white",
    textAlign: "center",
    textDecoration: "underline",
  },
  texts: {
    color: "white",
    textAlign: "left",
  },
  rtexts: {
    color: "white",
    textAlign: "center",
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
