const firebase = require('firebase');
const db = require('../services/Firebase');
const getUser = require('./user');

async function updateUser(req) {
    console.log(req);
    if (getUser()) {
        const userID = getUser().uid;
        console.log(userID);
        const userUpdated = await db.collection('users')
            .where('userID', '==', userID)
            .get()
            .then((users) => {
                users.forEach( async(user) => {
                    const sex = user.data().sex;
                    await db.collection('users').doc(user.id).update({
                        sex: sex + 'MAYBE'
                    })
                });
            });
    }
}

module.exports = updateUser;