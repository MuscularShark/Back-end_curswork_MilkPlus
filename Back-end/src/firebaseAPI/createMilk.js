const db = require('../services/Firebase');
const getUser = require('./user');
const convertDate = require('../services/convertDate');

function createCow(req) {
    console.log(req);
    if (getUser()) {
        const userID = getUser().uid;
        const task = {
            name: req.name,
            age: req.age,
            position: req.position,
            userID,
        };
        const addDoc = db.collection('cows').add(task)
        .then(() => {
            console.log('cow added');
        })
        .catch((error) => {
            console.log('cow not added');
            console.log(error);
        });
    }
}

module.exports = createCow;