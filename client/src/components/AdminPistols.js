import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Card,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EditPistolForm from './EditPistolForm';
import { deletePistol } from '../actions/pistols';


class AdminPistols extends React.Component {
  state = { showForm: false, pistols: [] }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    } )
  }

  removeItem = () => {

    const { pistol: { id }, dispatch, history } = this.props
    dispatch( deletePistol( id ) )
    history.push( '/edit' )
  }

  render() {
    const { pistol = {} } = this.props
    const { showForm } = this.state
    return (
      <Container>
        <Link to="/edit">Back to Pistols</Link>

        { showForm ?
          <EditPistolForm { ...pistol } closeForm={ this.toggleForm } />
          :
          <div>
            < Card key={ pistol.id } as={ Transparent } >
              <Card.Content style={ styles.text }>
                <Card.Header as="h3" style={styles.text}>
                  { pistol.make }
                </Card.Header>
                <Card.Header as="h3" style={styles.text}>
                  { pistol.pistol_model }
                </Card.Header>
                <Card.Meta style={styles.text}>
                  { pistol.gen }
                </Card.Meta>
                <Card.Description style={styles.text}>
                  ${ pistol.price }
                </Card.Description>
                <Card.Description>
                  { pistol.size }
                </Card.Description>
                <Card.Description>
                  { pistol.caliber }
                </Card.Description>
                <Card.Description>
                  { pistol.modifications }
                </Card.Description>
                <Card.Description>
                  { pistol.textures }
                </Card.Description>
                <Card.Description>
                  { pistol.cerakote }
                </Card.Description>
              </Card.Content>
            </Card >
          </div>
        }
        <Button color='blue' onClick={ this.toggleForm }>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        <Button color='red' onClick={ this.removeItem }>
          Delete
        </Button>
      </Container>
    )
  }
}


const Transparent = styled.div`
  background: transparent !important;
`

var styles = {
  text: {
    color: 'white'
  }
}

const mapStateToProps = ( state, props ) => {
  const pistol = state.pistols.find(
    i => i.id === parseInt( props.match.params.id ),
  );
  return { pistol };
};


export default connect(mapStateToProps)( AdminPistols );
