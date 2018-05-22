import React, { Component } from 'react';
import { Menu, Divider, Dropdown, Image } from 'semantic-ui-react';
import Logo from '../images/Logo.jpg';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { handleLogout } from '../actions/auth';

const NavContainer = styled.div`
  background-image: url("http://www.copiaguechamber.org/wp-content/uploads/2017/09/background-dark-metal.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: block
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
        <Menu.Menu position='right'>
          { user.role === 'admin' &&
            <Menu.Item onClick={ () => history.push( '/edit' ) } style={styles.text}>Edit Menu</Menu.Item>
          }
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
      <NavContainer fluid>
        <Menu secondary>
          <Menu.Menu position='left'>
            <Menu.Item>
              <Dropdown text='Menu' style={styles.text}>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Dropdown text='Pistols'>
                      <Dropdown.Menu>
                        <Link to='/pistol'>
                          <Dropdown.Item>Choose Your Pistol</Dropdown.Item>
                        </Link>
                        <Link to='/customize-pistol'>
                          <Dropdown.Item>Customize Your Pistol</Dropdown.Item>
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text='Rifles (coming soon)' disabled>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          Under Construction
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                    <Link to='/dealer'>
                      <Dropdown.Item>
                          Become A Dealer?
                      </Dropdown.Item>
                    </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu>
            <Menu.Item>
              <a href='/'>
                <LogoImage src={Logo} alt="Logo" />
              </a>
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
    color: "white",
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
