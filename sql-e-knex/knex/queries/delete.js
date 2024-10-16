const knex = require('../../knex/config/database');

const select = knex('users2').select('id', 'first_name');
const deletesql = knex('users2').delete().whereBetween('id', [70, 75]);

console.log(select.toString());
console.log(deletesql.toString());

deletesql.then((data) => {
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
