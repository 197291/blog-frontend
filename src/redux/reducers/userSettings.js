import * as Helper from '../../helpers/Helpers';
import * as Constants from '../../constants';
import { setAuthorizationToken } from '../actions/auth';

const initialState = {
  user: 21,
  token: '',
  isAuthenticated: false
}

const userSettings = (state = initialState, action) => {
  switch (action.type) {
    //auth
    case Constants.LOGIN_SUCCESS:
      
      const token = Helper.empty(action.data) || Helper.empty(action.data.token) ? null : action.data.token
      setAuthorizationToken(action.data)
      // axios.defaults.headers.common['Authorization'] = token
      return {...state, ...action.data, isAuthenticated: !Helper.empty(token)}
      
      case Constants.USER_SET_TOKEN:
      setAuthorizationToken(action.data)
      return {...state, ...action.data, isAuthenticated: !Helper.empty(action.data.token)}

      case Constants.USER_LOGOUT:
        setAuthorizationToken()
        console.log('state', state);
        return {
          ...state,
          isAuthenticated: false
        }
    default :
      return state
  }
}

export default userSettings;