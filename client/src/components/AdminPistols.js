import React from 'react';
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
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    } )
  }

  removePistol = () => {
    const { pistol: { id }, dispatch, history } = this.props
    dispatch( deletePistol( id ) )
    history.push( '/edit' )
  }

  renderMods(pistol) {
    if(pistol.modifications) {
      return pistol.modifications.map(mod => (<div>{mod}</div>))
    }
  }

  render() {
    const { pistol = {} } = this.props
    const { showForm } = this.state
    return (
      <Container>
        <Link to="/edit">Back To Pistols</Link>

        { showForm ?
          <EditPistolForm { ...pistol } closeForm={ this.toggleForm } />
          :
          <div>
            <Card key={ pistol.id } >
              <Card.Content>
                <Card.Header as="h3">
                  { pistol.make }
                </Card.Header>
                <Card.Header as="h3">
                  { pistol.pistol_model }
                </Card.Header>
                <Card.Meta>
                  { pistol.gen }
                </Card.Meta>
                <Card.Description>
                  ${ pistol.price }
                </Card.Description>
                <Card.Description>
                  { pistol.size }
                </Card.Description>
                <Card.Description>
                  { pistol.caliber }
                </Card.Description>
                <Card.Description>
                  { this.renderMods(pistol) }
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
        <Button color='red' onClick={ this.removePistol }>
          Delete
        </Button>
      </Container>
    )
  }
}


const mapStateToProps = ( state, props ) => {
  const pistol = state.pistols.find(
    i => i.id === parseInt( props.match.params.id, 10 ),
  );
  return { pistol };
};


export default connect(mapStateToProps)( AdminPistols );
