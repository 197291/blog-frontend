import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainContainer from './containers';
import store from './core/store';
import { Route} from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

export default class App extends Component {


  render() {

   return (
      <Provider store={store}>
          <BrowserRouter >
            <Switch>
              <Route path='/sign-up' component={SignUp} />
              <Route path='/sign-in' component={SignIn} />
              <Route path="/" render={ props => <MainContainer {...props}/> } />
            </Switch>
          </BrowserRouter>
      </Provider>
    );
  }
}
