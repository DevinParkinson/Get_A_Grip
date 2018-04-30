import React, { Component } from 'react';
import { Menu, Divider, Dropdown } from 'semantic-ui-react';
import Logo from '../images/Logo.jpg';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { handleLogout } from '../actions/auth';

const NavContainer = styled.div`
 background: linear-gradient( silver, black, black) !important;
`

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
      <NavContainer>
        <Menu secondary>
          <Menu.Menu position='left'>
            <Menu.Item>
              <Dropdown text='Menu' pointing style={styles.text}>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Dropdown text='Pistols' pointing>
                      <Dropdown.Menu>
                        <Link to='/cerakote'>
                          <Dropdown.Item>Cerakote</Dropdown.Item>
                        </Link>
                        <Link to='/custom-build-pistols'>
                          <Dropdown.Item>Build Your Own</Dropdown.Item>
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text='Rifles (coming soon)' disabled pointing>
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
          <Menu.Menu position='center'>
            <Menu.Item>
              <a href='/'>
                <img src={Logo} alt="Logo" />
              </a>
            </Menu.Item>
          </Menu.Menu>
          { this.rightNavs() }
        </Menu>
        <Divider inverted />
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
