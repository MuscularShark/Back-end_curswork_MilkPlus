const firebase = require('firebase');

function login(req) {
    console.log(req);
    const email = req.email;
    const password = req.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    // const arr = [];
        .then((res) => {
            console.log('success login');
        })
        .catch(function(error) {
            console.log(error);
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
}

module.exports = login;