const knex = require('../../knex/config/database');

const select = knex(
        knex.raw(
            '?? as ??, ?? as ??',
            ['users2', 'u2', 'profiles2', 'p2']
        )
    )
    .select('u2.id as u2id', 'p2.id as p2id', 'p2.bio', 'u2.first_name')
    .where('u2.id', '=', knex.raw('??', ['p2.user2_id']));

console.log(select.toString());

select.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);   
}).finally(() => {
    knex.destroy();
});
