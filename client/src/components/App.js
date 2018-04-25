import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import Footer from './Footer';
import Pistols from './Pistols';
import Checkout from './Checkout';
import Faq from './Faq';
import { Segment } from 'semantic-ui-react';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <div style = {styles.wrapper}>
          <NavBar />
          <Flash />
          <FetchUser>
            <Switch>
              <Route exact path='/' component={Home} />
              <ProtectedRoute exact path='/pistols' component={Pistols} />
              <ProtectedRoute exact path='/checkout' component={Checkout} />
              <Route exact path='/faq' component={Faq} />
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/register' component={Register} />
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </div>
        <Footer />
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
  wrapper: {
    minHeight: '100vh',
    marginBottom: '-150px',
    paddingBottom: '150px',

  }
}

export default App;
