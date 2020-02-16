const db = require('../services/Firebase');
const getUser = require('./user');

async function getAllCows(req) {
    console.log(req);
    if (getUser()) {
        const userID = getUser().uid;
        const allCows = [];
        const cow = await db.collection('cows')
            .where('userID', '==', userID)
            .get()
            .then((cows) => {
                cows.forEach(async (cow) => {
                    await allCows.push(cow.data());
                });
                console.log('1');
                console.log(allCows);
            });
        console.log('2');
        return allCows;
    }
}

module.exports = getAllCows;