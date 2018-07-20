import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Post from '../Post';

import { css } from 'aphrodite/no-important';
import styles from './styles';

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.createPosts = this.createPosts.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const {userId, getPosts} = this.props;
    getPosts(userId);
  }

  createPosts(posts){
    return Array.isArray(posts) ? 
    posts.map( (post, i) => {
      return ( <Post key={post.id + String(i)} post={post}/> );
    }) :
    '';
  }

  goBack () {
    this.props.history.goBack();
  }

  render() {
    const { posts, isLoading } = this.props;
    if (isLoading) {
      return <div className={css(styles.loading)}>Loading...</div>
    }
    const postsMarkUp = this.createPosts(posts);

    return (
      <div id="posts" className={css(styles.posts)}>
        <ul className={css(styles.list)}>
          { postsMarkUp.length ? postsMarkUp : 'There are no posts!' }
        </ul>
        { !postsMarkUp.length && <button onClick={this.goBack}>Go Back</button>}
      </div>
  );

  }

}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string,
    date: PropTypes.string,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  getPosts: PropTypes.func.isRequired
}
