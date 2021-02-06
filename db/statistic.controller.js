const knex = require('./knex');

function getUserInfo(id) {
    return knex.from('users_statistics').select('page_views', 'clicks').where('user_id', id);
}

function getAllUsersInfo() {
    return knex('users_statistics').select('*');
}

module.exports = {
    getUserInfo,
    getAllUsersInfo,
}