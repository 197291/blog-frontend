import { StyleSheet } from 'aphrodite/no-important';

const styles =  StyleSheet.create({
  header: {
    height: 60
  },
  mainPage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '20px'
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  aside: {
    width: '25%'
  },
  content: {
    width: '75%',
    padding: 15,
    height: 'calc(100vh - 60px)',
    overflow: 'auto'
  },
  listItem: {}
});

export default styles;