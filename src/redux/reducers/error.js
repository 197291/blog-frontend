import * as Const from '../../constants';

const initialState = {
  isDisplay: false,
  msg: '',
  error: null
};

const error  = (state = initialState, action) => {
  const {type, data, err} = action;

  switch (type) {

    case Const.DISPLAY_ERROR:
      return {
        ...state,
        isDisplay: true,
        msg: data,
        error: err
      }

    case Const.HIDE_ERROR:
      return {
        ...state,
        isDisplay: false,
        msg: '',
        error: null
      }


    default :
      return state
  }
}

export default error;
