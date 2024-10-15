const knex = require('../../knex/config/database');

const select = knex('users2').select('id', 'first_name')
    .where('id', '=', 5)
    .andWhere('first_name', '=', 'Renan')
    .orWhere('id', '=', '3');
console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message)
}).finally(() => {
    knex.destroy();
});