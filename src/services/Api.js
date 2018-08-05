import * as firebase from 'firebase'
import serviceConfig from './firebaseConfig'

firebase.initializeApp(serviceConfig)
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

const Api = {
  auth: firebase.auth(),
  users: db.collection('users'),
}

export default Api
