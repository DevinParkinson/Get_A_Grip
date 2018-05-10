import { PISTOLS, ADD_PISTOLS, UPDATE_PISTOL, DELETE_PISTOL } from '../actions/pistols'

const pistols = ( state = [], action ) => {
  switch ( action.type ) {
    case PISTOLS:
      return action.pistols;
    case ADD_PISTOLS:
      return [action.pistols, ...state]
    case UPDATE_PISTOL:
      return state.map( i => {
        if ( i.id === action.pistol.id )
          return action.pistol
        return i
      } )
    case DELETE_PISTOL:
      return state.filter( i => i.id !== action.id )
    default:
      return state;
  }
}

export default pistols
