import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import styles from './styles';
import RowUser from './RowUser';


export default class SearchUsers extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false
    }
  }

  createRows = () => {
    return this.props.users.map(user => {
      return (
        <RowUser key={user.id} friend={user}/>
      );
    })
  }
  
  handleClickOutside = (e) => {
    const list = this.list;
    if (list && !list.contains(e.target)) {
      this.setState({
        isOpen: false
      })
    }
  }

  handleFocus = (e) => {
    const char = e.target.value;

    if (!char) {
      return false;
    }

    this.setState({
      isOpen: true
    })
    this.props.handleFocus(char);
  }

  handleChange = (e) => {
    const char = e.target.value;

    if (!char) {
      this.setState({
        isOpen: false
      })
      return false;
    } else {
      this.setState({
        isOpen: true
      })
      this.props.handleChange(char);
    }

  }

  componentDidMount() {
    this.list = document.getElementById('list_users');
    document.addEventListener('click', this.handleClickOutside )
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }

  render() {
    const {users} = this.props;
    const {isOpen} = this.state;
    const rows = users ? this.createRows() : null;
    return (
          <div className={css(styles.wrapper)} >
            <div id="list_users" className={css(styles.wrapInput)}>
              <input 
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                className={css(styles.searchInput)} 
                type="text" 
                placeholder="type name author"
              />
              <ul 
                className={css(styles.list, isOpen && styles.isOpen)}
              >
                {rows}
              </ul>
            </div>
          </div> 
    );
  }

}

SearchUsers.propTypes = {
  users: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
}