const knex = require('../../knex/config/database');

const selectBetween = knex('users2').select('id', 'first_name')
    .whereBetween('id', [80, 83]);
    knex.orWhereBetween('id', [10, 15]);

console.log(selectBetween.toString());

selectBetween.then((data) => {
    console.log(data);    
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});
