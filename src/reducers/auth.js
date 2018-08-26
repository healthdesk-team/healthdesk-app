import { isEmpty, pick } from 'lodash'
import {
  LOGIN_SUCCESS, LOGOUT_SUCCESS,
} from '../actions/auth'

// Check if the user has already connected once and get its auth information from localstorage to init our store
const localAuthInfo = localStorage.getItem('hdAuthInfo')
const initState = !isEmpty(localAuthInfo) ? JSON.parse(localAuthInfo) : {}

// Remember that we should not have side effects in Reducers, however, as it is to store our auth info in localstorage it is okay.
export default function authentification(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('hdAuthInfo', JSON.stringify({ ...action.payload.user }))
      localStorage.setItem('hdTokenJwt', JSON.stringify(action.payload.jwt))
      return { ...state, ...action.payload.user }
    case LOGOUT_SUCCESS:
      localStorage.clear()
      return initState
    default:
      return state
  }
}
