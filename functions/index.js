const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.doStuff = functions.https.onCall(async data => {
  const stuff = data.stuff
  return stuff
})
