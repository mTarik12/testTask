const { connectedKnex } = require('./knex');

function createUser(user) {
    return connectedKnex('users').insert(user);
}

function getAllUsers() {
    return connectedKnex('users').select('*');

}

function getOneUser(id) {
    return connectedKnex.from('users').select('id', 'first_name', 'last_name', 'email', 'gender', 'ip_address').where('id', id);
}

function deleteUser(userId) {
    return connectedKnex('users').where("id", userId).del();
}

function updateUser(id, user) {
    return connectedKnex('users').where('id', id).update(user);
}

function getUsersAndInfo(id) {
    return connectedKnex
        .select('u.id', 'u.first_name', 'u.last_name', 'u.email', 'u.gender', 'u.ip_address', 'us.page_views', 'us.clicks')
        .from('users as u')
        .leftJoin('users_statistics as us', 'us.user_id', 'u.id')
        .where('u.id', id)
        .first();
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getOneUser,
    getUsersAndInfo,
}