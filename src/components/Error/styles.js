import { StyleSheet } from 'aphrodite/no-important';

const styles =  StyleSheet.create({
  wrapper: {
    display: 'block',
    position: 'fixed',
    left: 0,
    bottom: 0,
    opacity: 0,
    transition: 'all .4s linear',
    pointerEvents: 'none',
    height: 40,
    width: '100%',
    background: 'red',
  },
  text: {
    color: 'white',
    gontSize: 14,
    fontWeight: 600,
    padding: '10px 20px',
    textAlign: 'center',
    margin: 0,
    lineHeight: '16px'
  },
  isShow: {
    opacity: 1,
    transition: 'all .4s linear'
  }  
});

export default styles;