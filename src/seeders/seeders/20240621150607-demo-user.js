'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', 
    [
      {
        email: 'John Doe 1',
        username: 'hahaha',
        password: 123,
      },
      {
        email: 'John Doe 2',
        username: 'hahaha',
        password: 333,
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
