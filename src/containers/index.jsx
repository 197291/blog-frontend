import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route} from 'react-router';
import {Redirect } from 'react-router';
import PropTypes from 'prop-types';

import MainPage from './MainPage';
import * as actions from 'redux/actions';


class MainContainer extends Component {

  constructor(props){
    super(props)

    const token = localStorage.getItem('token');
    const data = {
      user: JSON.parse(localStorage.getItem('user')),
      token: token
    }
       if (token !== null) {
        this.props.setUser(data);
       }
  }

  render() {
 
    if (!this.props.user.isAuthenticated) {return <Redirect to="/sign-in"/>}
    return (
      <div>
        <Route 
          path='/' 
          render={ props => <MainPage {...props} user={this.props.user} />}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userSettings
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser: (data) => {
      dispatch(actions.auth.setUser(data))
    },
    clearList: () => {
      dispatch(actions.followers.clearInputList())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

MainContainer.propTypes = {
  user: PropTypes.object.isRequired,
  clearList: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
}