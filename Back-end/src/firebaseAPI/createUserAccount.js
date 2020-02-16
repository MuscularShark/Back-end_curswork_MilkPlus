const firebase = require('firebase');
const db = require('../services/Firebase');
const getUser = require('./user');

function createUserAccount(req) {
    console.log(req);
    const email = req.email;
    const password = req.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            const userID = getUser().uid;
            console.log(req);
            const user = {
                email,
                password,
                userID,
            };
            const addDoc = db.collection('users').add(user)
                .then(() => {
                    console.log('user added');
                })
                .catch((error) => {
                    console.log('user not added');
                    console.log(error);
                });
        })
        .catch(function (error) {
            console.log(error);
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
}

module.exports = createUserAccount;
