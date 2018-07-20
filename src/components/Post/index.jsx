import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';
import styles from './styles';

const Post = (props) => {

    const { post } = props;
    return (
      <li>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p className={css(styles.footer)}>
          <span>{post.author && `Author: ${post.author}`}</span>
          <span>{post.date && `Date: ${post.date}`}</span>
        </p>
      </li>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post;



