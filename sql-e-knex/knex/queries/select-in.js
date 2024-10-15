const knex = require('../../knex/config/database');

const select = knex('users2').select('id', 'first_name')
    .whereIn('id', [10, 15, 20, 25]);

console.log(select.toString());

select.then((data) => {
    console.log(data);    
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});
