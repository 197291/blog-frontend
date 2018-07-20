import * as Const from '../../constants';

export const error =  store => next => action => {
  const {type, err} = action;

  if (type === Const.SHOW_ERROR) {
    if (err.response) {
      const { status } = err.response;
      if (status === Const.INTERNAL_SERVER_ERROR) {
        store.dispatch({ 
          type: Const.DISPLAY_ERROR, 
          data: 'Server error, please try again later and contact with us on tel: 000-000-000', 
          err 
        })
      }
      if (status === Const.UNAUTHORIZED) {
        store.dispatch({type: Const.USER_LOGOUT})
      }
    } else if (!err.response) {
      store.dispatch({
        type: Const.DISPLAY_ERROR, 
        data: 'Connection problems, please, try again later!',
        err
      })
    } else {
      const { data } = err.response;
      store.dispatch({ type: Const.DISPLAY_ERROR, data: data.message, err })
    }
  }
  return next(action);
}