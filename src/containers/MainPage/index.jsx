import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import NewPost from 'components/NewPost';
import MyPosts from 'components/MyPosts';
import PostFriends from 'components/PostsFriends';
import * as actions from 'redux/actions';
import SearchUsers from 'components/SearchUsers';
import Error from 'components/Error';
import styles from './styles';

class MainPage extends Component{

  constructor(props) {
    super(props);
    this.getListAuthors = debounce(this.getListAuthors, 1000)
  }

  getOwnPosts = () => {
    const { user, getOwnPosts } = this.props;
    return  user && getOwnPosts(user.user_id);
  }

  handleChange = (char) => {
    this.getListAuthors(char);
  }

  handleFocus = (char) => {
    this.getListAuthors(char);
  }

  getListAuthors = (char) => {
    const { getListUsers } = this.props;
    getListUsers(char);
  }

  render(){
    return(
          <div className={css(styles.mainPage)} id='main_page'>
            <header className={css(styles.header)}>
              <SearchUsers 
                handleFocus={this.handleFocus} 
                users={this.props.users} 
                handleChange={this.handleChange}
              />
            </header>
            <main className={css(styles.mainContainer)}>
              <aside className={css(styles.aside)}>
                <ul className={css(styles.list)}>
                  <Link to='/my-posts'>My Posts</Link>
                  <Link to='/posts-my-friends'>Posts of my friends</Link>
                  <Link to='/new-posts'>New Post</Link>
                </ul>
              </aside>
              <div className={css(styles.content)}>
                <Route path={'/new-posts'} render={props => <NewPost {...props}/>} />
                <Route path={'/my-posts'} render={props => <MyPosts {...props}/>} />
                <Route path={'/posts-my-friends'} render={props => <PostFriends {...props}/>} />
              </div>
            </main>
            <Error />
          </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userSettings.user,
    users: state.users.listUsers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOwnPosts: (id) => {
      dispatch(actions.posts.getOwnPosts(id))
    },
    clearList: () => {
      dispatch(actions.followers.clearInputList())
    },
    getListUsers: (char) => {
      dispatch(actions.users.getListUsers(char))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

MainPage.propTypes = {
  users: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  getOwnPosts: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  getListUsers: PropTypes.func.isRequired,
}
