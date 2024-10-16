const knex = require('../../knex/config/database');

const select = knex('users2')
    .max('salary as max_salary')
    .min('salary as min_salary')
    .avg('salary as avg_salary')
    .sum('salary as sum_salary')
    .count('salary as count_salary');

console.log(select.toString());

select.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});