const knex = require('../config/database');

knex('users2') // SELECT * FROM users2
    .then(data => {
        console.log(data);    
    })
    .catch(e => {})
    .finally(() => {
        knex.destroy();
    });