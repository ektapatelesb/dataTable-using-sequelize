'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users', [{
      firstName: 'karan',
      lastName: 'bhatt',
      email: 'karan@example.com',
      gender:'male',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'happy',
      lastName: 'shah',
      email: 'shah@example.com',
      gender:'male',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'hitarth',
      lastName: 'raval',
      email: 'raval@example.com',
      gender:'male',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'khushi',
      lastName: 'rawat',
      email: 'khushi@example.com',
      gender:'female',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'khushali',
      lastName: 'bhojak',
      email: 'khushali@example.com',
      gender:'female',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'meet',
      lastName: 'thakkar',
      email: 'meet@example.com',
      gender:'male',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'krusha',
      lastName: 'panchal',
      email: 'krusha@example.com',
      gender:'female',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'krunal',
      lastName: 'kumar',
      email: 'krunal@example.com',
      gender:'male',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'kajal',
      lastName: 'jani',
      email: 'jani@example.com',
      gender:'female',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'krupali',
      lastName: 'bhutt',
      email: 'krupali@example.com',
      gender:'female',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'taksh',
      lastName: 'pancholi',
      email: 'taksh@example.com',
      gender:'male',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'shiv',
      lastName: 'patel',
      email: 'patel@example.com',
      gender:'male',
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
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
