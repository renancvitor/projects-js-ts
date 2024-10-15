/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('profiles2', (table) => {
        table.increments('id').primary();
        table.text('bio');
        table.text('description');
        table.integer('user2_id').unique().unsigned();
        table.foreign('user2_id')
            .references('users2.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('profiles2');
  };
  