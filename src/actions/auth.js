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

export const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST'
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS'
export const FETCH_USER_DATA_FAIL = 'FETCH_USER_DATA_FAIL'

/* Action creators */
export const loginRequest = makeActionCreator(LOGIN_REQUEST)
export const loginSuccess = makeActionCreator(LOGIN_SUCCESS, 'payload')
export const loginFail = makeActionCreator(LOGIN_FAIL, 'error')

export const logoutRequest = makeActionCreator(LOGOUT_REQUEST)
export const logoutSuccess = makeActionCreator(LOGOUT_SUCCESS)
export const logoutFail = makeActionCreator(LOGOUT_FAIL, 'error')

export const checkUserConnectionRequest = makeActionCreator(FETCH_USER_DATA_REQUEST)
export const checkUserConnectionSuccess = makeActionCreator(FETCH_USER_DATA_SUCCESS)
export const checkUserConnectionFail = makeActionCreator(FETCH_USER_DATA_FAIL, 'error')

export const fetchUserDataRequest = makeActionCreator(FETCH_USER_DATA_REQUEST)
export const fetchUserDataSuccess = makeActionCreator(FETCH_USER_DATA_SUCCESS, 'payload')
export const fetchUserDataFail = makeActionCreator(FETCH_USER_DATA_FAIL, 'error')

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

export function checkUserConnection() {
  return async (dispatch) => {
    dispatch(checkUserConnectionRequest())
    return Api.auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchUserDataRequest())
        return Api.users.doc(user.uid).get()
          .then((response) => {
            if (response.exists) dispatch(fetchUserDataSuccess(response.data()))
            else dispatch(fetchUserDataFail('document does not exists'))
          })
          .catch(error => dispatch(fetchUserDataFail(error)))
      }
      return dispatch(checkUserConnectionFail())
    })
  }
}
