const knex = require('../../knex/config/database');

const update = knex('users2 as u2')
    .innerJoin('profiles2 as p2', 'u2.id', 'p2.user2_id')
    .update({
        'p2.bio': knex.raw('CONCAT(p2.bio, " atualizado")')
    })
    .where({
        'u2.first_name': 'Renan'
    });

console.log(update.toString());

update.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});