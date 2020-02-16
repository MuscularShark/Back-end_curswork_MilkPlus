const db = require('../services/Firebase');
const getUser = require('./user');
const convertDate = require('../services/convertDate');
const dateTime = require('node-datetime');
const dt = dateTime.create();
const formatted = dt.format('Y-m-d');

function createMilk(req) {
    console.log(req);
    if (getUser()) {
        const userID = getUser().uid;
        const date = formatted;
        const task = {
            date,
            position: req.position,
            t: req.t,
            weight: req.weight,
            litrs: req.litrs,
            stat: Math.floor(req.weight / req.litrs),
            userID,
        };
        const addDoc = db.collection('milks').add(task)
        .then(() => {
            console.log('milk added');
            console.log(req);
        })
        .catch((error) => {
            console.log('milk not added');
            console.log(error);
        });
    }
}

module.exports = createMilk;