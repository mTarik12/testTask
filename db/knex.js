const allUsers = require('./allUsers');
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
            table.string('id');
            table.string('first_name');
            table.string('last_name');
            table.string('email');
            table.string('gender');
            table.string('ip_address');
        })
            .then(() => knex('users').insert(allUsers));
    }
}
createSchema();


module.exports = knex;