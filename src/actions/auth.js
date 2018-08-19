import Api from '../services/Api'
import makeActionCreator from './makeActionCreator'

/* Action types */
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'


/* Action creators */
export const loginRequest = makeActionCreator(LOGIN_REQUEST)
export const loginSuccess = makeActionCreator(LOGIN_SUCCESS, 'payload')
export const loginFail = makeActionCreator(LOGIN_FAIL, 'error')

export const logoutRequest = makeActionCreator(LOGOUT_REQUEST)
export const logoutSuccess = makeActionCreator(LOGOUT_SUCCESS)
export const logoutFail = makeActionCreator(LOGOUT_FAIL, 'error')

/* Thunk action creators */
export function login(identifier, password) {
  return async (dispatch) => {
    dispatch(loginRequest)
    return Api.auth.login({ identifier, password })
      .then(Api.responseHandler(dispatch, loginSuccess, loginFail))
  }
}

export function logout() {
  return async (dispatch) => {}
}
