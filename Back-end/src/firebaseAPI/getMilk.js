const db = require('../services/Firebase');
const getUser = require('./user');

async function getAllTasks(req) {
    console.log(req);
    if (getUser()) {
        const userID = getUser().uid;
        const allTasks = [];
        const task = await db.collection('milks')
            .where('userID', '==', userID)
            .get()
            .then((tasks) => {
                tasks.forEach(async (task) => {
                    await allTasks.push(task.data());
                });
                console.log('1');
                console.log(allTasks);
            });
        console.log('2');
        return allTasks;
    }
}

module.exports = getAllTasks;