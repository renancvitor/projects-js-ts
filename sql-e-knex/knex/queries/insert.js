const knex = require('../../knex/config/database');

const data = [
    // {
    //     first_name: 'Renan',
    //     last_name: 'C. Vitor',
    //     email: 'renan@email.com',
    //     password_hash: 'rP@1',
    //     salary: '1320.3',
    // },
    {
        first_name: 'Joaquim',
        last_name: 'Guimaraes',
        email: 'joaquim@email.com',
        password_hash: 'JG123',
        salary: 1200.03
    },
    {
        first_name: 'Priscila',
        last_name: 'da Silva',
        email: 'priscila@email.com',
        password_hash: 'PdS123',
        salary: 1300.07
    },
    {
        first_name: 'Gustavo',
        last_name: 'Fonseca',
        email: 'gustavo@email.com',
        password_hash: 'GF123',
        salary: 1400.09
    },
    {
        first_name: 'Daniela',
        last_name: 'Carla',
        email: 'daniela@email.com',
        password_hash: 'DC123',
        salary: 2000.01
    },
    {
        first_name: 'Vanessa',
        last_name: 'de Souza',
        email: 'vanessa@email.com',
        password_hash: 'VDS123',
        salary: 2100.06
    },
];

const insert = knex('users2').insert(data);

// console.log(insert.toString());
// console.log(insert.toSQL().toNative());

insert.then(data => {
    console.log(data);    
}).catch(e => {
    console.log(e.message)
}).finally(() => {
    knex.destroy();
});