const knex = require('../../knex/config/database');

const update = knex('users2').update({
    salary: knex.raw('round(rand() * ??, ??)', [10000, 2])
});

console.log(update.toString());

update.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});