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
import Checkout from './Checkout';
import Faq from './Faq';
import CustomBuild from './CustomBuild';
import Defender from './Defender';
import Cerakote from './Cerakote';
import Frame from './Frame';
import Grip from './Grip';
import Gallery from './Gallery';
import Operator from './Operator';
import Slidework from './Slidework';
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
              <Route exact path='/custom-build-pistols' component={CustomBuild} />
              <Route exact path='/defender' component={Defender} />
              <Route exact path='/cerakote' component={Cerakote} />
              <Route exact path='/gallery' component={Gallery} />
              <Route exact path='/frame' component={Frame} />
              <Route exact path='/grip' component={Grip} />
              <Route exact path='/operator' component={Operator} />
              <Route exact path='/slidework' component={Slidework} />
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
