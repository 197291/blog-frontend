import { StyleSheet } from 'aphrodite/no-important';

const styles =  StyleSheet.create({
  signBody: {
    maxWidth: 240,
    margin: '20px auto 0',
    padding: 10,
    boxShadow:'0 0 5px #000',
    borderRadius: 2
  },
  input: {
    width: '100%',
    marginTop: 20,
    height: 32,
    padding: '4px 8px',
    borderRadius: 4,
    boxShadow: 'none',
    border: '1px solid lightgrey',
    ':focus': {
      outline: 'none'
    }
  },
  checkbox: {
    ':focus': {
      outline: 'none'
    }
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    width: 110,
    cursor: 'pointer',
    fontSize: 12,
    marginTop: 5
  },
  btn: {
    background: '#3498db',
    backgroundImage: 'linear-gradient(to bottom, #3498db, #2980b9)',
    fontSize: 14,
    fontWeight: 600,
    width: '100%',
    outline: 'none',
    cursor: 'pointer',
    color: '#ffffff',
    borderRadius: 3,
    margin: '10px auto',
    border: 'none',
    padding: 5,
    ':hover': {
      background: '#3cb0fd',
      backgroundImage: 'linear-gradient(top, #3cb0fd, #3498db)'
    }
  },
  text: {
    fontSize: 14
  }
});

export default styles;