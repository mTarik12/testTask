const { connectedKnex } = require('./knex');

function getUserInfo(id) {
    return connectedKnex.from('users_statistics').where('user_id', id).select('page_views', 'clicks');
}

function getAllUsersInfo() {
    return connectedKnex('users_statistics').select('*');
}

function getFilteredStatictic(date) {
    return connectedKnex('users_statistics').where('users_statistics.date', 'like', `%${date}%`).select('page_views', 'clicks');
}

module.exports = {
    getUserInfo,
    getAllUsersInfo,
    getFilteredStatictic,
}