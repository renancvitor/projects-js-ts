const knex = require('../../knex/config/database');

const select = knex('users2 as u2')
    .select('u2.id as u2id', 'p2.id as p2id', 'p2.bio', 'u2.first_name')
    .innerJoin('profiles2 as p2', 'u2.id', 'p2.user2_id')
    .where('u2.first_name', 'like', '%a')
    .orderBy('u2.first_name', 'desc')
    .limit(5);

console.log(select.toString());

select.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});