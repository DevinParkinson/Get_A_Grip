import React from 'react';
import EditPistolForm from './EditPistolForm';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPistols } from '../actions/pistols';
import { Segment, Card, Header, Button, Divider } from 'semantic-ui-react';

const AppContainer = styled.div`
  justify-content: center;
  background-image: url("http://www.copiaguechamber.org/wp-content/uploads/2017/09/background-dark-metal.jpg");
  background-attachment: fixed;
  width: 100%;
`

class EditPistols extends React.Component {
  state = { category: '', showForm: false };

  componentDidMount() {
    this.props.dispatch( getPistols() )
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    } )
  }

  pistolsList = () => {
    const { pistols } = this.props
    return (pistols.map( p =>
      <AppContainer>
        <Card key={ p.id } as={ Transparent } >
          <Card.Content>
            <Card.Header as="h3">
              { p.make }
            </Card.Header>
            <Card.Header as="h3">
              { p.model }
            </Card.Header>
            <Card.Meta>
              { p.pistol_model }
            </Card.Meta>
            <Card.Meta>
              { p.gen }
            </Card.Meta>
            <Card.Description>
              ${ p.price }
            </Card.Description>
            <Card.Description>
              { p.caliber }
            </Card.Description>
            <Card.Description>
              Available Modifications: { p.modifications }
            </Card.Description>
            <Divider />
            <Card.Description>
              { p.textures }
            </Card.Description>
            <Divider />
            <Card.Description>
              { p.cerakote }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={ `/edit/${ p.id }` }>
            <Button color='blue'>
            View Pistol
            </Button>
            </Link>
          </Card.Content>
        </Card >
      </AppContainer>
      )
    )
  }

  render() {
    const { showForm } = this.state
    return (
      <Segment textAlign='center' style={ styles.base }>
        <Header as="h3" textAlign="center">
          Menu
        </Header>
        <Button onClick={ this.toggleForm }>
          { showForm ? "Show Pistols" : "Create Pistol" }
        </Button>
        { showForm ?
          <EditPistolForm closeForm={ this.toggleForm } />
          :
          <div>
            <Divider />
            <Card.Group
            computer={8}
            mobile={2}
            tablet={4}
            centered
            >
              { this.pistolsList() }
            </Card.Group>
          </div>
        }
      </Segment>
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


const mapStateToProps = ( state ) => {
  return { pistols: state.pistols }
}

export default connect( mapStateToProps )( EditPistols );
