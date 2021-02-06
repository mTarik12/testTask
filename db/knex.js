const allUsers = require('./allUsers');
const usersStatistics = require('./usersStatistics');
const knex = require('knex')({
    client: "sqlite3",
    connection: {
        filename: "users.sqlite3",
    },
    useNullAsDefault: true
});

console.log(allUsers);
async function createSchema() {

    if (!await knex.schema.hasTable('users')) {
        knex.schema.createTable('users', (table) => {
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
                table
                    .integer('id')
                    .unsigned()
                    .references('users._id');
            })
            .then(() => knex('users').insert(allUsers))
            .then(rows => knex('users_statistics').insert(usersStatistics, { id: rows[0] }))
            .then(() => {
                knex('users')
                    .join('users_statistics', 'id', 'users_statistics.id')
                    .select('users.firs_name as user', 'users_statistics.user_id as id')
            });
    }
}

module.exports = {
    knex,
    createSchema,
}