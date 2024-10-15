/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users2', (table) => {
    table.increments('id').primary();
    table.string('first_name', 160).notNullable();
    table.string('last_name', 160);
    table.string('email', 255).notNullable().unique();
    table.string('password_hash', 255).notNullable().unique();
    table.decimal('salary', 14, 2).notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users2');
};
