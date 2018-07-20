import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons';


import styles from './styles';
import * as actions from 'redux/actions';

const EmptyHeart = () => {
  return ( <span>
      <FontAwesomeIcon icon={heart} />
    </span>
  );
}

const SolidHeart = () => {
  return ( <FontAwesomeIcon 
      icon={solidHeart} 
    />
  );
}


class RowUser extends Component {

  setConnect = () => {
    const { friend, userId, unsubscribe, subscribe }  = this.props;

    if (friend.followerid) {
      unsubscribe(friend.followerid);
    } else {
      subscribe({
        follower: userId, 
        following: friend.id
      })
    }

  }

  render() {
    const { friend } = this.props;
    const icon = friend.followerid ? SolidHeart() : EmptyHeart();

    return (
      <li className={css(styles.row)} onClick={this.setConnect}>
      {icon}
      {friend.name}
      </li>
  );

  }

}

export default connect( 
  (state) => ({
    userId: state.userSettings.user.user_id
}), 
(dispatch) => ({
  subscribe: (data) => dispatch(actions.followers.subscribe(data)),
  unsubscribe: (id) => dispatch(actions.followers.unsubscribe(id))
})) (RowUser);

RowUser.propTypes = {
  userId: PropTypes.string.isRequired,
  subscribe: PropTypes.func.isRequired,
  unsubscribe: PropTypes.func.isRequired
}