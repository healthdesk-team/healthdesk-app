import Api from '../services/Api'
import makeActionCreator from './makeActionCreator'

/* Action types */
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL'

/* Action creators */
export const loginRequest = makeActionCreator(LOGIN_REQUEST)
export const loginSuccess = makeActionCreator(LOGIN_SUCCESS, 'payload')
export const loginFail = makeActionCreator(LOGIN_FAIL, 'error')

export const logoutRequest = makeActionCreator(LOGOUT_REQUEST)
export const logoutSuccess = makeActionCreator(LOGOUT_SUCCESS)
export const logoutFail = makeActionCreator(LOGOUT_FAIL, 'error')

export const fetchUserRequest = makeActionCreator(FETCH_USER_REQUEST)
export const fetchUserSuccess = makeActionCreator(FETCH_USER_SUCCESS, 'payload')
export const fetchUserFail = makeActionCreator(FETCH_USER_FAIL, 'error')

/* Thunk action creators */
export function login(email, password) {
  return async (dispatch) => {
    dispatch(loginRequest())
    return Api.auth.signInWithEmailAndPassword(email, password)
      .then(result => dispatch(loginSuccess(result.user)))
      .catch(error => dispatch(loginFail(error)))
  }
}

export function logout() {
  return async (dispatch) => {
    dispatch(logoutRequest())
    return Api.auth.signOut()
      .then(() => dispatch(logoutSuccess()))
      .catch(error => dispatch(logoutFail(error)))
  }
}

export function fetchUser() {
  return async (dispatch) => {
    dispatch(fetchUserRequest())
    return Api.auth.onAuthStateChanged((user) => {
      if (user) dispatch(fetchUserSuccess(user))
      else dispatch(fetchUserFail())
    })
  }
}
