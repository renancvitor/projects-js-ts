const knex = require('../../knex/config/database');

const select = knex('users2 as u2')
    .select('u2.id as u2id', 'p2.id as p2id', 'p2.bio', 'u2.first_name')
    .leftJoin('profiles2 as p2', 'u2.id', 'p2.user2_id') // Reforçando que left join considera todos os registros
                                                        // das tabelas relacionadas, porém não se importa com dados null e 
                                                        // não se importa em trazê-los/exibir
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