const allUsers = require('./allUsers');
const usersStatistics = require('./usersStatistics');
const knex = require('knex');

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "users.sqlite3",
    },
    useNullAsDefault: true
});

console.log(allUsers);
async function createSchema() {

    if (!await connectedKnex.schema.hasTable('users')) {
        connectedKnex.schema.createTable('users', (table) => {
            table.increments('_id');
            table.string('id');
            table.string('first_name');
            table.string('last_name');
            table.string('email');
            table.string('gender');
            table.string('ip_address');
        })
            .createTable('users_statistics', table => {
                table.string('user_id');
                table.string('date');
                table.string('page_views');
                table.string('clicks');
            })
            .then(() => connectedKnex('users').insert(allUsers))
            .then(() => connectedKnex('users_statistics').insert(usersStatistics));
    }
}

module.exports = {
    connectedKnex,
    createSchema,
};