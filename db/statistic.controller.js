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

function validateDatafromQuery(req, res, next) {

    if (!!req.query.dateStart) {
        const schema = Joi.object({
            dateStart: Joi.string().required(),
            dateFinal: Joi.string().required(),
        });
        const result = schema.validate(req.query);

        if (result.error) {
            res.status(400).send(result.error);
        }

        next()

    } else {
        next()
    }
}

module.exports = {
    getUserInfo,
    getAllUsersInfo,
    getFilteredStatictic,
    validateDatafromQuery,
}