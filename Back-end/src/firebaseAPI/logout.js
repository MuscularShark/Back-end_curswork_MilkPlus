const firebase = require('firebase');

function logout(req) {
    console.log(req);
    firebase.auth().signOut().then(() => {
        console.log('success log out');
        // Sign-out successful.
    }).catch((error) => {
        console.log(error);
        // An error happened.
    });
}

module.exports = logout;