const knex = require('./knex');

function createUser(user) {
    return knex('users').insert(user);
}

function getAllUsers() {
    return knex('users').select('*');
}

function deleteUser(userId) {
    return knex('users').where("id", userId).del();
}

function updateUser(id, user) {
    return knex('users').where('id', id).update(user);
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
}