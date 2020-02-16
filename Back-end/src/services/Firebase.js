const firebase = require('firebase');
require('firebase/auth');
require('firebase/database');

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA15jI8n6DbD_pGd4E4vsmeSTp_E5Ao6WQ",
    authDomain: "milkplus-907e3.firebaseapp.com",
    databaseURL: "https://milkplus-907e3.firebaseio.com",
    projectId: "milkplus-907e3",
    storageBucket: "milkplus-907e3.appspot.com",
    messagingSenderId: "902503340052"
};

const settings = {
    timestampsInSnapshots: true
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings(settings);

module.exports = db;