import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from 'redux/actions';
import Posts from '../Posts';


const MyPosts = (props) => {
  return <Posts {...props} />
}

export default connect(
  (state) => {
    return { 
      posts: state.posts.ownPosts,
      isLoading: state.posts.isLoading,
      userId: state.userSettings.user.user_id
    }
  },
  
  (dispatch) => {
    return {
      getPosts: (id) => dispatch(actions.posts.getOwnPosts(id))
    }
  }
)(MyPosts);

MyPosts.propTypes = {
  posts: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getPosts: PropTypes.func.isRequired,
}