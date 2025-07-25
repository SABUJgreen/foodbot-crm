const admin = require('firebase-admin');
const serviceAccount = require('./foodbot-crm-3be7e-firebase-adminsdk-fbsvc-7aa83dfecd.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = db;
