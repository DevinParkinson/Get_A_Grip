import axios from 'axios'
import React from 'react';
import EditPistolForm from './EditPistolForm';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setHeaders } from '../actions/headers';
import { Segment, Card, Header, Button, Divider, Image } from 'semantic-ui-react';

class EditPistols extends React.Component {
  state = { category: '', showForm: false, pistols: [] };

  componentDidMount = () => {
    const { dispatch } = this.props;
    axios.get('/api/pistols')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ pistols: res.data })
    })
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    } )
  }

  pistolsList = () => {
    const { pistols } = this.state
    return { pistols.map( p =>
      <Card key={ p.id } as={ Transparent } >
        <Card.Content style={ styles.text }>
          <Card.Header as="h3">
            { p.model }
          </Card.Header>
          <Card.Meta>
            ${ p.pistol_model }
          </Card.Meta>
          <Card.Meta>
            ${ p.gen }
          </Card.Meta>
          <Card.Description>
            { p.price }
          </Card.Description>
          <Card.Description>
            { p.caliber }
          </Card.Description>
          <Card.Description>
            { p.modifications }
          </Card.Description>
          <Card.Description>
            { p.textures }
          </Card.Description>
          <Card.Description>
            { p.cerakote }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={ `/edit/${ p.id }` }>View Pistol</Link>
        </Card.Content>
      </Card >
      )
    }
  }

  render() {
    const { showForm } = this.state
    return (
      <Segment textAlign='center' style={ styles.base }>
        <Header as="h3" textAlign="center">
          Menu
        </Header>
        <Button onClick={ this.toggleForm }>
          { showForm ? "Hide Form" : "Show Form" }
        </Button>
        { showForm ?
          <EditPistolForm closeForm={ this.toggleForm } />
          :
          <div>
            <Divider />
            <Card.Group>
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
