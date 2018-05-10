import { PISTOLS, ADD_PISTOL, UPDATE_PISTOL, DELETE_PISTOL } from '../actions/pistols'

const pistols = ( state = [], action ) => {
  switch ( action.type ) {
    case PISTOLS:
      return action.items;
    case ADD_PISTOL:
      return [action.item, ...state]
    case UPDATE_PISTOL:
      return state.map( i => {
        if ( i.id === action.item.id )
          return action.item
        return i
      } )
    case DELETE_PISTOL:
      return state.filter( i => i.id !== action.id )
    default:
      return state;
  }
}

export default pistols
