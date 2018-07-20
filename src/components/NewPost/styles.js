import { StyleSheet } from 'aphrodite/no-important';

const styles =  StyleSheet.create({
  wrapper: {
    display: 'flex',
    paddingTop: 50,
    alignItems: 'flex-start',
    height: '100vh',
    width: '100vw',
    background: '#fff'
  },
  wrapPost: {
    maxWidth: 600,
    width: '100%',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    borderRadius: 4,
    boxShadow: '0 0 5px 5px rgba(0,0,0, 0.2)'
  },
  wrapPostTitle: {
    marginBottom: 20
  },
  label: {
    marginRight: 10
  },
  commonForInputs: {
    padding: 10,
    boxSizing: 'border-box',
    ':focus': {
      outline: 'none'
    }
  },
  input: {
    height: 32,
    marginRight: 15
  },
  textArea: {
    marginTop: 5
  },
  btn: {
    width: 100,
    margin: '20px 0 10px auto'
  }
});

export default styles;