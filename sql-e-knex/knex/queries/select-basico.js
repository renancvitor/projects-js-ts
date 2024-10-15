const knex = require('../../knex/config/database');

// const select = knex('users2'); // Seleciona todos
const select = knex('users2').select('email as uemail', 'id as uid'); // Seleciona o que foi pedido

select.then(data => {
    for (const user of data) {
        console.log(user);
    }
}).catch(e => {
    console.log(e.message)
}).finally(() => {
    knex.destroy();
});