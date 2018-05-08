import {
  PISTOLS,
} from '../actions/pistols'

const pistols = (state = [], action ) => {
  switch(action.type) {
    case PISTOLS:
      return action.pistols
    default:
      return state;
  }
}

export default pistols;
