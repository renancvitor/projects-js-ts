const knex = require('../../knex/config/database');

const select = knex('users2').where('id', '=', 1);
const update = knex('users2').update({
    email: 'renancv@email.com'
}).where('id', '=', 1);

console.log(select.toString());
console.log(update.toString());

update.then((data) => {
    console.log(data);

    select.then((data) => {
        console.log(data);    
    }).catch((e) => {
        console.log(e.message);   
    });

}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});
