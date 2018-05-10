import React from 'react';
import { connect } from 'react-redux';
import { addPistols, updatePistol } from '../actions/pistols';
import { Form, Grid } from 'semantic-ui-react';

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

  handleSubmit = ( e ) => {
    e.preventDefault()
    const pistol = { ...this.state }
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updatePistol : addPistols
    dispatch( func( pistol ) )
    closeForm()
  }

  render() {
    const { make, pistol_model, gen, price, size, caliber, modifications, textures, cerakote } = this.props

    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Input
          name="make"
          defaultValue= {make}
          required
          onChange={ this.handleChange }
          label="Make"
        />
        <Form.Input
          name="pistol_model"
          required
          defaultValue={ pistol_model }
          onChange={ this.handleChange }
          label="Model"
        />
        <Form.Input
          name="gen"
          defaultValue={ gen }
          onChange={ this.handleChange }
          label="Gen"
        />
        <Form.Input
          name="price"
          defaultValue={ price }
          type="number"
          min="0"
          onChange={ this.handleChange }
          label="Price"
        />
        <Form.Input
          name="size"
          defaultValue={ size }
          onChange={ this.handleChange }
          label="Size"
        />
        <Form.Input
          name="caliber"
          defaultValue={ caliber }
          onChange={ this.handleChange }
          label="Caliber"
        />
        <Form.Input
          name="modifications"
          defaultValue={ modifications }
          onChange={ this.handleChange }
          label="Modifications"
        />
        <Form.Input
          name="textures"
          defaultValue={ textures }
          onChange={ this.handleChange }
          label="Textures"
        />
        <Form.Input
          name="cerakote"
          defaultValue={ cerakote }
          onChange={ this.handleChange }
          label="Cerakote"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()( EditPistolForm );
