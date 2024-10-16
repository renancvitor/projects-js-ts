const knex = require('../../knex/config/database');

const insert = knex(
        knex.raw('user_roles2 (user2_id, role2_id)')
    )
    .insert(qb => {
        qb.select('id').from('users2').select(qb => {
            qb.select('id').from('roles2').orderByRaw('rand()')
            .limit(1).as('Anyone');
        });
    });

const insertIgnore = knex.raw(
    insert.toString().replace('insert', 'insert ignore')
);
console.log(insertIgnore.toString());

insertIgnore.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});

// console.log(insert.toString());

// insert.then((data) => {
//     console.log(data);
// }).catch((e) => {
//     console.log(e.message);   
// }).finally(() => {
//     knex.destroy();
// });