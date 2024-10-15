const knex = require('../../knex/config/database');

const select = knex('users2')
    .select('id', 'first_name')
    .where('first_name', 'like', '___')
    .orWhere('first_name', 'liek', '%ma')
    .orderBy('id', 'asc')
    .orderBy('first_name', 'desc');

console.log(select.toString());

select.then((data) => {
    console.log(data);    
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});
