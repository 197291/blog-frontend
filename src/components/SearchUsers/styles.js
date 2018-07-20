import { StyleSheet } from 'aphrodite/no-important';

const styles =  StyleSheet.create({
  wrapInput: {
    position: 'relative',
    display: 'inline-block'
  },
  wrapper: {
    marginTop: 20,
    textAlign: 'center'
  },
  searchInput: {
    padding: '4px 10px',
    borderRadius: 4,
    height: 40,
    boxShadow: 'none',
    border: '1px solid lightgrey',
    ':focus': {
      outline: 'none'
    }
  },
  list: {
    position: 'absolute',
    top: 42,
    left: 0,
    textAlign: 'left',
    background: 'white',
    width: '100%',
    height: 0,
    overflow: 'hidden',
    zIndex: 99,
    boxShadow: '0 0 3px #000'
  },
  isOpen: {
    height: 'auto'
  }
});

export default styles;