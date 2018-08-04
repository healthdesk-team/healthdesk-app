import firebase from 'firebase'
import serviceConfig from './firebaseConfig'

firebase.initializeApp(serviceConfig)

const Api = {
  auth: firebase.auth(),
}

export default Api
