import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { css } from 'aphrodite/no-important';

import * as actions from 'redux/actions/auth';
import styles from './styles';

const states = ['email', 'name', 'age', 'password', 'confirm'];

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.number = true;

    this.state = {
      email: '',
      name: '',
      remember_me: false,
      age: '',
      password: '',
      confirm: '',
      displayError: false
    }
  }

  isNumeric = (e) => {
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      let chr = e.key;
      this.number = !chr.match(/[0-9]/) ?  false : true;
  }

  onChange = (e) => {
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = this.number ? value : "";
    }
    this.setState({[e.target.name]: value});
  };

  confirmPass = () => {
    let pass = this.state.password,
    confirm = this.state.confirm;

    if(pass !== confirm){
      this.setState({
        displayError: true
      })
      return false
    }
    this.setState({
      displayError:false
    })
    return true
  }

  epmtyFields = () => {
    let val = states.some(name => {
        return this.state[name] === '' || this.state[name] === ' '
    })
    return !val
  }

  onSubmit = () => {
    this.confirmPass() && this.epmtyFields() && this.props.signUp(this.state);
  };

  rememberMe = () => {
    this.setState({remember_me: !this.state.remember_me});
  };


render(){
    const {user} = this.props;
    const token = localStorage.getItem('token');
    if(user.isAuthenticated || !!token){
        return  (
                  <Redirect to="/"/>
           )
    }

  return(
    <div id="signup">
    <div className="login-dialog">
        <div>
            <div className={css(styles.signBody)}>
                <div className="form-group">
                    <input
                      type="text"
                      className={css(styles.input)}
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      placeholder="Please, enter your name"
                    />
                </div>
                <div className="form-group">
                    <input
                      type="text"
                      className={css(styles.input)}
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      placeholder="Please, enter your email"
                    />
                </div>
                <div className="form-group">
                    <input
                      type="text"
                      className={css(styles.input)}
                      name="age"
                      onKeyPress={this.isNumeric}
                      value={this.state.age}
                      onChange={this.onChange}
                      placeholder="Please, enter your age"
                    />
                </div>
                <div className="form-group">
                    <input
                      type="password"
                      className={css(styles.input)}
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      placeholder="Please, enter your password"
                    />
                </div>
                <div className="form-group">
                    <input
                      type="password"
                      className={css(styles.input)}
                      name="confirm"
                      value={this.state.confirm}
                      onChange={this.onChange}
                      placeholder="Please, confirm your password"
                    />
                    <span className={this.state.displayError ? '' : 'none'}>Not match with password</span>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className=" checkbox custom-checkbox ">
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
                    </div>
                </div>
                <div className="form-group">
                    <div className="btn-group-justified">
                        <button className={css(styles.btn)} onClick={this.onSubmit}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

}

export default connect(
  (state) => {
      return {user: state.userSettings};
  },
  (dispatch) => bindActionCreators(actions, dispatch)
)(SignUp);

SignUp.propTypes = {
  user: PropTypes.object.isRequired,
}