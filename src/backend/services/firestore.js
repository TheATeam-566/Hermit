const admin = require('firebase-admin');
const serviceAccount = require('../config/serviceAccountKey');

// initialize an instance of firestore with admin priviledges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// creates the db variable to be accessed
module.exports = admin.firestore();
