const knex = require('../../knex/config/database');

const select = knex('users2')
    .select('first_name')
    .count('id as total')
    .groupBy('first_name')
    .orderBy('total', 'desc');

console.log(select.toString());

select.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});