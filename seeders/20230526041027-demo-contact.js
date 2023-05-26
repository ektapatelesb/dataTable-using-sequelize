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
  //  await queryInterface.bulkInsert('contacts',[{
  //   contact: '1487415121',
  //   userId:'47',
  //   createdAt: new Date(),
  //    updatedAt: new Date()
  //  },{
  //   contact: '1487415121',
  //   userId:'48',
  //   createdAt: new Date(),
  //    updatedAt: new Date()
  //  },{
  //   contact: '1487415121',
  //   userId:'48',
  //   createdAt: new Date(),
  //    updatedAt: new Date()
  //  },{
  //   contact: '1487415121',
  //   userId:'48',
  //   createdAt: new Date(),
  //    updatedAt: new Date()
  //  },{
  //   contact: '1487415121',
  //   userId:'49',
  //   createdAt: new Date(),
  //    updatedAt: new Date()
  //  },{
  //   contact: '1487415121',
  //   userId:'49',
  //   createdAt: new Date(),
  //    updatedAt: new Date()
  //  },{
  //   contact: '1487415121',
  //   userId:'49',
  //   createdAt: new Date(),
  //    updatedAt: new Date()
  //  },{
  //   contact: '1487415121',
  //   userId:'50',
  //   createdAt: new Date(),
  //    updatedAt: new Date()
  //  },{
  //   contact: '1487415121',
  //   userId:'50',
  //   createdAt: new Date(),
  //    updatedAt: new Date()
  //  }])
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
