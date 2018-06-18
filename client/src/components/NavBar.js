import React, { Component } from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import Logo from '../images/Logo.jpg';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { handleLogout } from '../actions/auth';

const NavContainer = styled.div`
  background-image: url("http://www.copiaguechamber.org/wp-content/uploads/2017/09/background-dark-metal.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: block;
  height: auto;
`

const LogoImage = styled(Image)`
  height: 8vh;
  float: center
`

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu>
          { user.role === 'admin' &&
            <Menu.Item onClick={ () => history.push( '/edit' ) }>Edit Menu</Menu.Item>
          }
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register' rel='noopener noreferrer'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login' rel='noopener noreferrer'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <NavContainer>
        <Menu inverted>
          <Menu.Menu>
            <a href='/' rel='noopener noreferrer'>
              <LogoImage src={Logo} alt="Logo" />
            </a>
          </Menu.Menu>
          <Menu.Menu>
              <Menu.Item>
                <Dropdown text='Menu'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Dropdown text='Pistols'>
                        <Dropdown.Menu>
                          <Link to='/pistol' rel='noopener noreferrer'>
                            <Dropdown.Item style={styles.text}>Choose Your Pistol</Dropdown.Item>
                          </Link>
                          <Link to='/customize-pistol' rel='noopener noreferrer'>
                            <Dropdown.Item style={styles.text}>Customize Your Pistol</Dropdown.Item>
                          </Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Dropdown text='Holsters (coming soon)' disabled>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            Under Construction
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                      <Link to='/dealer' rel='noopener noreferrer'>
                        <Dropdown.Item style={styles.text}>
                            Become A Dealer?
                        </Dropdown.Item>
                      </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
          </Menu.Menu>
          { this.rightNavs() }
        </Menu>
      </NavContainer>
    );
  }
}

const styles = {
  text: {
    color: "#000000",
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
