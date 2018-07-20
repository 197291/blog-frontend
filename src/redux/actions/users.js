import * as Const from '../../constants'
import * as API from 'api';

export const getListUsers = (char) => (dispatch) => {

  API.users.getListUsers(char)
  .then( data => {
    dispatch({
      type: Const.GET_LIST_USERS_SUCCESS,
      data: data.users
    })
  })
  .catch( err => {
    dispatch({
      type: Const.SHOW_ERROR,
      err
    })
  })
}