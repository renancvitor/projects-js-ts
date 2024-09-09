'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Renan 1',
          email: 'renan1@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Renan 2',
          email: 'renan2@gmail.com',
          password_hash: await bcryptjs.hash('123457', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Renan 3',
          email: 'renan3@gmail.com',
          password_hash: await bcryptjs.hash('123458', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Renan 4',
          email: 'renan4@gmail.com',
          password_hash: await bcryptjs.hash('123459', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
        {}
      );
  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
