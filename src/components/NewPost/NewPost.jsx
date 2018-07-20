import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

import * as API from 'api';
import styles from './styles';
import { DATE } from 'constants/time';

class NewPost extends Component {

  state = {
    author: '',
    title: '',
    content: ''

  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  handleContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  

  savePost = () => {
    const { user_id } = this.props;
    const { content, title } = this.state;
    const date = moment().format(DATE);

    const data = {
      user_id,
      content,
      title,
      date
    }

    API.posts.savePost(data)
    .then(() => {
      this.props.history.push('/');
    })
    .catch(err => {
      this.setState({
        displayError: true
      })
      setTimeout(() => {
        this.setState({
          displayError: false
        })
      }, 4000)
    })
  }

  render() {
    const {author, title, content} = this.state;
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.wrapPost)}>
          <div className={css(styles.wrapPostTitle)}>
            <label className={css(styles.label)} htmlFor="author">Author</label>
            <input 
              className={css(styles.commonForInputs, styles.input)} 
              id="author" 
              placeholder="Type author name" 
              type="text"
              value={author}
              onChange={this.handleAuthor}
            />
            <label className={css(styles.label)} htmlFor="title">Title</label>
            <input 
              className={css(styles.commonForInputs, styles.input)} 
              id="title" 
              placeholder="Type title" 
              type="text"
              value={title}
              onChange={this.handleTitle}
            />
          </div>
        <label className={css(styles.label)} htmlFor="notes">Text</label>
        <textarea 
          className={css(styles.commonForInputs, styles.textArea)} 
          name="new-post" 
          id="notes" 
          cols="30" 
          rows="10"
          onChange={this.handleContent}
          value={content}
        />
        <button onClick={this.savePost} className={css(styles.btn)}>Save</button>
        </div>
      </div>
  );
  }
}

export default withRouter(NewPost);

NewPost.propTypes = {
  user_id: PropTypes.string.isRequired,
}