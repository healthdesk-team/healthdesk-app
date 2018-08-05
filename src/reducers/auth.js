import {
  LOGIN_SUCCESS, LOGOUT_SUCCESS, CHECK_USER_CONNECTION_FAIL, CHECK_USER_CONNECTION_SUCCESS,
} from '../actions/auth'

export default function authentification(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case CHECK_USER_CONNECTION_SUCCESS:
      return { ...state, ...action.payload }
    case LOGOUT_SUCCESS:
    case CHECK_USER_CONNECTION_FAIL:
      return {}
    default:
      return state
  }
}
