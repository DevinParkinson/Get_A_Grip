import {
  USERS,
} from '../actions/user'

const pistols = (state = [], action ) => {
  switch(action.type) {
    case USERS:
      return action.users
    case UPDATE_USER:
    return state.map((u) => {
      if (u.id === action.user.id) {
        return action.user;
      }
      return u;
    });
    default:
      return state;
  }
}

export default users;
