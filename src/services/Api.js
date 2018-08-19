import { API_URL } from '../constants/constants'

// Function to define the headers for the API fetches
function getHeaders(method, data) {
  const datas = JSON.stringify(data)
  const authToken = localStorage.getItem('hdTokenJwt') || null

  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken !== null ? `Bearer ${authToken}` : '',
    },
    credentials: 'include',
    body: datas,
  }
}

// Fonction to handle success or fail of the API requests
const responseHandler = (dispatch, actionSuccess, actionFail) => response => response.json().then((res) => {
  if (res) {
    if (res.error) {
      dispatch(actionFail(res))
    } else {
      dispatch(actionSuccess(res))
    }
  }
  return res
})

// Define all the API urls to be used
const urls = {
  auth: `${API_URL}/auth/local`,
  patients: '',
}

// All the method on each documents needed through the app.
const auth = {
  login: data => fetch(urls.auth, getHeaders('POST', data)),
}

const patients = {
  get: () => fetch(urls.patients, getHeaders('GET')),
}

// The API object to be used in the action
export default {
  responseHandler,
  auth,
  patients,
}
