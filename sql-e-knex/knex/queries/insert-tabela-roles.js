const knex = require('../../knex/config/database');

const insert = knex('roles2').insert([
    { name: 'ADMIN' },
    { name: 'POST' },
    { name: 'PUT' },
    { name: 'DELETE' },
    { name: 'GET' },
]);

console.log(insert.toString());

insert.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});