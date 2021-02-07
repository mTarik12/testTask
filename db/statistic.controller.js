const knex = require('./knex');

function getUserInfo(id) {
    return knex.from('users_statistics').where('user_id', id).select('page_views', 'clicks');
}

function getAllUsersInfo() {
    return knex('users_statistics').select('*');
}

function getFilteredStatictic(date) {
    console.log(date);
    return knex('users_statistics').where('users_statistics.date', 'like', `%${date}%`).select('page_views', 'clicks');
}

module.exports = {
    getUserInfo,
    getAllUsersInfo,
    getFilteredStatictic,
}