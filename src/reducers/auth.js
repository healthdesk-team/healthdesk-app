import { FETCH_USER_DATA_SUCCESS, LOGOUT_SUCCESS, CHECK_USER_CONNECTION_FAIL } from '../actions/auth'

export default function authentification(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return { ...state, ...action.payload }
    case LOGOUT_SUCCESS:
    case CHECK_USER_CONNECTION_FAIL:
      return {}
    default:
      return state
  }
}
