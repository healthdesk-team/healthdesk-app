const functions = require('firebase-functions')
const admin = require('firebase-admin')

// Cloud Functions
exports.createProfile = functions.auth.user().onCreate((user) => {
  admin.initializeApp(functions.config().firebase)
  return admin.firestore().collection('users').doc(user.uid).set({
    email: user.email,
    role: 'patient',
    uid: user.uid,
  })
})
