import axios from 'axios'
export const PISTOLS = 'PISTOLS';
export const ADD_PISTOLS = 'ADD_PISTOLS'
export const UPDATE_PISTOL = 'UPDATE_PISTOL'
export const DELETE_PISTOL = 'DELETE_PISTOL'

export const getPistols = (cb) => {
  return (dispatch) => {
    axios.get('/api/pistols')
      .then( res => dispatch({ type: PISTOLS, pistols: res.data } ))
      .then(cb)
      }
  }

export const addPistols = (pistols) => {
  return (dispatch) => {
    axios.post('/api/pistols', { pistols } )
    .then ( res => dispatch )
  }
}

export const updatePistol = (pistol) => {
  return (dispatch) => {
    axios.put(`/api/pistols/${pistol.id}`, { pistol } )
      .then ( res => dispatch({ type: UPDATE_PISTOL, pistol: res.data }))
  }
}

export const deletePistol = (id) => {
  return(dispatch) => {
    axios.delete(`/api/pistols/${id}`)
      .then( () => dispatch({ type: DELETE_PISTOL, id }))
  }
}
