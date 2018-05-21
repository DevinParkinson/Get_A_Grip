import React from 'react';
import { connect } from 'react-redux';
import { addPistols, updatePistol } from '../actions/pistols';
import { Form, Header } from 'semantic-ui-react';

class EditPistolForm extends React.Component {

  initialState = {
    make: '', pistol_model: '', gen: '', price: '', size: '', caliber: '', modifications: '', textures: '', cerakote: ''
  }
  state = { ...this.initialState }



  componentDidMount() {
    if ( this.props.id )
      this.setState( { ...this.props } )
  }

  handleChange = ( e ) => {
    const { name, value } = e.target
    this.setState( { [name]: value } )

  }

  handleMultiChange = (name, index) => (e) => {
      const newMulti = this.state[name].map( ( value, i ) => {
        if (index !== i) return value
        return e.target.value
      })
      this.setState({ [name]: newMulti})
  }

  handleSubmit = ( e ) => {
    e.preventDefault()
    const pistol = { ...this.state }
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updatePistol : addPistols
    dispatch( func( pistol ) )
    closeForm()
  }

  renderMultiInputs(values, name) {
    return values.map((value, index) => {
      return (
        <Form.Input
          key = { index }
          name={name + "[]"}
          value={ this.state[name][index] }
          onChange={ this.handleMultiChange(name, index) }
        />
      )
    })
  }

  render() {
    const { make, pistol_model, gen, price, size, caliber, modifications, textures, cerakote } = this.props

    return (
      <Form onSubmit={ this.handleSubmit }>
        <Header as="h4" style={styles.text}>Make</Header>
        <Form.Input
          name="make"
          defaultValue= {make}
          required
          onChange={ this.handleChange }
        />
        <Header as="h4" style={styles.text}>Model</Header>
        <Form.Input
          name="pistol_model"
          required
          defaultValue={ pistol_model }
          onChange={ this.handleChange }
        />
        <Header as="h4" style={styles.text}>Gen</Header>
        <Form.Input
          name="gen"
          defaultValue={ gen }
          onChange={ this.handleChange }
        />
      <Header as="h4" style={styles.text}>Price</Header>
        <Form.Input
          name="price"
          defaultValue={ price }
          type="number"
          min="0"
          onChange={ this.handleChange }
        />
        <Header as="h4" style={styles.text}>Size</Header>
        <Form.Input
          name="size"
          defaultValue={ size }
          onChange={ this.handleChange }
        />
        <Header as="h4" style={styles.text}>Caliber</Header>
        <Form.Input
          name="caliber"
          defaultValue={ caliber }
          onChange={ this.handleChange }
        />
      <Header as="h4" style={styles.text}>Modifications</Header>
      { this.renderMultiInputs(modifications, "modifications") }
        <Header as="h4" style={styles.text}>Textures</Header>
      { this.renderMultiInputs(textures, "textures")}
        <Header as="h4" style={styles.text}>Cerakote</Header>
      { this.renderMultiInputs(cerakote, "cerakote")}
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

const styles = {
  text: {
    color: "white",
    textAlign: "center",
  }
}

export default connect()( EditPistolForm );
