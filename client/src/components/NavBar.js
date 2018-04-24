import React, { Component } from 'react';
import { Menu, Image, Container, Divider } from 'semantic-ui-react';
import Logo from '../images/Logo.jpg';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            style={styles.text}
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' style={styles.text} />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' style={styles.text} />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Container>
            <NavLink to='/'>
              <Image src={Logo} alt="Logo" />
            </NavLink>
          </Container>
          { this.rightNavs() }
        </Menu>
        <Divider inverted />
      </div>
    );
  }
}

const NavLink = styled(Link)`
  height: 5vw !important,
  width: 5vw !important,
`

const styles = {
  text: {
    color: "white",
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
