import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import * as actions from 'redux/actions';
import * as API from 'api';
import config from 'config';
import styles from './styles';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      remember_me: false,
    }
    this.textInput = React.createRef();
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    let data = {...this.state};
    data.token =  localStorage.getItem('token');
    this.props.signIn(data);

  };

  rememberMe = () => {
    this.setState({remember_me: !this.state.remember_me});
  };

  enterWithGoogle = () => {
    API.auth.authGoogle();
  }

  handleKeyPress = (e) => {
    if(e.which === 13 || e.keyCode === 13){
        this.onSubmit()
    }
  }

  render(){
    const {user} = this.props;
    const token = localStorage.getItem('token');
    const googleUrl = config.path.BASE_URL + config.path.BASE_API + '/auth/google';
    if (user.isAuthenticated || !!token) {
        return  (<Redirect to="/" />)
    }
    return (
      <div id="SignIn">
          <div className="SignIn-dialog">
              <div>
                  <div
                    onKeyPress={this.handleKeyPress}
                    className={css(styles.signBody)}>
                      <div className="form-group">
                          <input
                              type="text"
                              className={css(styles.input)}
                              name="email"
                              value={this.state.email}
                              onChange={this.onChange}
                              placeholder="Email Address"
                          />
                      </div>
                      <div className="form-group">
                          <input
                              type="password"
                              className={css(styles.input)}
                              name="password"
                              value={this.state.password}
                              onChange={this.onChange}
                              placeholder="Password"
                          />
                      </div>
                      <div className="form-group">
                          <div className="row">
                            <label className={css(styles.label)}>
                                <input
                                    onClick={this.rememberMe}
                                    type="checkbox"
                                    checked={this.state.remember_me}
                                    className={css(styles.checkbox)}
                                />
                                <span className="fa fa-check">&nbsp;</span> Remember me
                            </label>
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="btn-group-justified">
                              <button className={css(styles.btn)} onClick={this.onSubmit}>Sign In</button>
                          </div>
                          <div className={css(styles.text)}>
                            <a href={googleUrl}>Log with google</a>
                          </div>
                      </div>
                      <p className={css(styles.text)}>
                          Don't have an account? <Link to="/sign-up">Sign Up</Link>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );

  }

}

export default connect(
    (state) => {
      return {user: state.userSettings}
    },
  
  (dispatch) => {
    return {
        signIn: (data) => dispatch(actions.auth.login(data)) 
    }
  }
)(SignIn);

SignIn.propTypes = {
  user: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
}