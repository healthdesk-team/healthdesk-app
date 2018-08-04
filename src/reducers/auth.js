import { LOGIN_SUCCESS, FETCH_USER_SUCCESS } from '../actions/auth'

export default function authentification(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
    case LOGIN_SUCCESS:
      console.log('// USER IS LOGGED IN', action.payload.email)
      return action.payload
    default:
      return state
  }
}
