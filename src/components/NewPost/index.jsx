import { connect } from 'react-redux';
// import * as actions from 'redux/actions';
import NewPost from './NewPost';


export default connect(
  (state) => {
    return {
      user_id: state.userSettings.user.user_id
    }
  },
  null
)(NewPost);



