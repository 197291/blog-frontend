import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from 'redux/actions';
import Posts from '../Posts';


const PostFriends = (props) => {
  return <Posts {...props} />
}


export default connect(
  (state) => {
    return { 
      posts: state.posts.friendsPosts,
      isLoading: state.posts.isLoading,
      userId: state.userSettings.user.user_id
    }
  },
  (dispatch) => ({
      getPosts: (id) => dispatch(actions.posts.getFriendsPosts(id))
  })
)(PostFriends);

PostFriends.propTypes = {
  posts: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  getPosts: PropTypes.func.isRequired,
}

