import * as Const from '../../constants';

const initialState = {
  listUsers: []
};

const users  = (state = initialState, action) => {
  const {type, data} = action;
  let listUsers;

  switch (type) {

    case Const.GET_LIST_USERS_SUCCESS:
      return {
        ...state,
        listUsers: data
      }

    case Const.CLEAR_INPUT_LIST:
      return {
        ...state,
        listUsers: []
      }

    case Const.SUBSCRIBE_SUCCESS:

      listUsers = state.listUsers.map(user => {
        if(user.id === data.following) {
          user.followerid = data.id;
        }
        return {...user};
      })
      
      return {
        ...state,
        listUsers
      }

    case Const.UNSUBSCRIBE_SUCCESS:

    listUsers = state.listUsers.map(user => {
      if(user.id === data) {
        user.followerid = null;
      }
      return {...user};
    })
      return {
        ...state,
        listUsers
      }

    default :
      return state
  }
}

export default users;
