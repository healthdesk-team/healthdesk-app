import Api from '../services/Api'
import makeActionCreator from './makeActionCreator'

/* Action types */
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

export const CHECK_USER_CONNECTION_REQUEST = 'CHECK_USER_CONNECTION_REQUEST'
export const CHECK_USER_CONNECTION_SUCCESS = 'CHECK_USER_CONNECTION_SUCCESS'
export const CHECK_USER_CONNECTION_FAIL = 'CHECK_USER_CONNECTION_FAIL'

/* Action creators */
export const loginRequest = makeActionCreator(LOGIN_REQUEST)
export const loginSuccess = makeActionCreator(LOGIN_SUCCESS, 'payload')
export const loginFail = makeActionCreator(LOGIN_FAIL, 'error')

export const logoutRequest = makeActionCreator(LOGOUT_REQUEST)
export const logoutSuccess = makeActionCreator(LOGOUT_SUCCESS)
export const logoutFail = makeActionCreator(LOGOUT_FAIL, 'error')

export const checkUserConnectionRequest = makeActionCreator(CHECK_USER_CONNECTION_REQUEST)
export const checkUserConnectionSuccess = makeActionCreator(CHECK_USER_CONNECTION_SUCCESS, 'payload')
export const checkUserConnectionFail = makeActionCreator(CHECK_USER_CONNECTION_FAIL, 'error')

/* Thunk action creators */
export function login(email, password) {
  return async (dispatch) => {
    dispatch(loginRequest())
    return Api.auth.signInWithEmailAndPassword(email, password)
    // As Firebase Auth user and Database User are 2 separate entities we need to fetch it thanks to the auth uid to get
    // all the user's properties
      .then(({ user }) => Api.users.doc(user.uid).get()
        .then((response) => {
          if (response.exists) dispatch(loginSuccess(response.data()))
          else dispatch(loginFail('document does not exists'))
        })
        .catch(error => dispatch(loginFail(error))))
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

export function checkUserConnection() {
  return (dispatch) => {
    dispatch(checkUserConnectionRequest())
    return Api.auth.onAuthStateChanged((res) => {
      if (res) {
        // As Firebase Auth user and Database User are 2 separate entities we need to fetch it thanks to the auth uid to get
        // all the user's properties
        Api.users.doc(res.uid).get()
          .then((response) => {
            if (response.exists) dispatch(checkUserConnectionSuccess(response.data()))
            else dispatch(checkUserConnectionFail('document does not exists'))
          })
          .catch(error => dispatch(checkUserConnectionFail(error)))
      } else dispatch(checkUserConnectionFail('document does not exists'))
    })
  }
}
