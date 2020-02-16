const firebase = require('firebase');

function getUser() {
    const user = firebase.auth().currentUser;
    console.log(user.uid);
    if (user) {
        return user;
    } else {
        return 'You are not login!';
    }
}

module.exports = getUser;