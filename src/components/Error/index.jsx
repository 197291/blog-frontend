import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';

import * as actions from 'redux/actions';
import styles from './styles';

const Error = (props) => {

    const { msg, isShow, hide } = props;
    
    setTimeout(() => {
      hide();
    }, 5000)

    return (
      <div className={css(styles.wrapper, isShow && styles.isShow)}>
        <p className={css(styles.text)}>{msg}</p>
      </div>
  );

}

export default connect(
  (state) => {
    return {
      msg: state.error.msg,
      isShow: state.error.isDisplay
    }
  },
  (dispatch) => ({
    hide: () => dispatch(actions.error.hideError())
  })
)(Error);

Error.propTypes = {
  isShow: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
}
