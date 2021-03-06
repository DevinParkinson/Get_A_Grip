import axios from 'axios'
export const PISTOLS = 'PISTOLS';
export const ADD_PISTOLS = 'ADD_PISTOLS'
export const UPDATE_PISTOL = 'UPDATE_PISTOL'
export const DELETE_PISTOL = 'DELETE_PISTOL'

export const getPistols = (cb) => {
  return (dispatch) => {
    axios.get('/api/pistols')
      .then( res => dispatch({ type: PISTOLS, pistols: res.data, headers: res.headers } ))
      .then(cb)
      }
  }

  export const addPistols = ( pistol ) => {
    return ( dispatch ) => {
      axios.post( '/api/pistols', { pistol } )
        .then( res => dispatch( { type: ADD_PISTOLS, pistol: res.data, headers: res.headers } ) )
    }
  }

export const updatePistol = (pistol) => {
  return (dispatch) => {
    axios.put(`/api/pistol/${pistol.id}`, { pistol } )
      .then ( res => dispatch({ type: UPDATE_PISTOL, pistol: res.data, headers: res.headers }))
  }
}

export const deletePistol = (id) => {
  return(dispatch) => {
    axios.delete(`/api/pistols/${id}`)
      .then( () => dispatch({ type: DELETE_PISTOL, id }))
  }
}
