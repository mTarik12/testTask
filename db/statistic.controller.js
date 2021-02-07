const { connectedKnex } = require('./knex');
const Joi = require('joi');

function getUserInfo(id) {
    return connectedKnex.from('users_statistics').where('user_id', id).select('page_views', 'clicks');
}

function getAllUsersInfo() {
    return connectedKnex('users_statistics').select('*');
}

function getFilteredStatictic(dateSearch) {
    console.log(dateSearch);
    return connectedKnex('users_statistics').whereBetween('users_statistics.date', dateSearch).select('page_views', 'clicks');
}

function validatrDatafromQuery(req, res, next) {
    const schema = Joi.object({
        date: Joi.string().required(),
    });
    const result = schema.validate(req.query);

    if (result.error) {
        return res.status(400).send(result.error);
    }
    next()
}

module.exports = {
    getUserInfo,
    getAllUsersInfo,
    getFilteredStatictic,
}