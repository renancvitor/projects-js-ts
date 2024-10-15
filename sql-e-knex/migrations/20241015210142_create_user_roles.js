/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user_roles2', (table) => {
        table.integer('user2_id').unsigned();
        table.foreign('user2_id')
            .references('users2.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('role2_id').unsigned();
        table.foreign('role2_id')
            .references('roles2.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.primary(['user2_id', 'role2_id']);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('user_roles2');
  };
  