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
    // return queryInterface.bulkInsert('users', [{
    //   firstName: 'kartik',
    //   lastName: 'dabhi',
    //   email: 'kartik@example.com',
    //   gender:'male',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'heni',
    //   lastName: 'oza',
    //   email: 'heni@example.com',
    //   gender:'female',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'het',
    //   lastName: 'raval',
    //   email: 'raval@example.com',
    //   gender:'male',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'rutvi',
    //   lastName: 'jani',
    //   email: 'rutvi@example.com',
    //   gender:'female',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'khushal',
    //   lastName: 'bhoda',
    //   email: 'khushal@example.com',
    //   gender:'male',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'bhavesh',
    //   lastName: 'thakkar',
    //   email: 'thakkar@example.com',
    //   gender:'male',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'jinal',
    //   lastName: 'panchal',
    //   email: 'jinal@example.com',
    //   gender:'female',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'nita',
    //   lastName: 'kumari',
    //   email: 'nita@example.com',
    //   gender:'male',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'gaurav',
    //   lastName: 'pathak',
    //   email: 'pathak@example.com',
    //   gender:'male',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'vilka',
    //   lastName: 'jani',
    //   email: 'vilka@example.com',
    //   gender:'female',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'maulik',
    //   lastName: 'patel',
    //   email: 'maulik@example.com',
    //   gender:'male',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   firstName: 'pinak',
    //   lastName: 'patel',
    //   email: 'patel@example.com',
    //   gender:'male',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },]);
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
