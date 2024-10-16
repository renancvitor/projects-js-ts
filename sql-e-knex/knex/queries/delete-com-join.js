const knex = require('../../knex/config/database');

const deletSsql = knex.raw(`
        delete p2, u2 from users2 u2
        inner join profiles2 as p2
        on p2.user2_id = u2.id
        where u2.first_name = ?;
    `, ['Katelyn', '%Katelyn%']);

console.log(deletSsql.toString());

deletSsql.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});