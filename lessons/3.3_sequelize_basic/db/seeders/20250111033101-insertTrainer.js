"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("trainers", [
      {
        id: uuidv4(),
        name: "Mark",
      },
      {
        id: uuidv4(),
        name: "Kent",
      },
      {
        id: uuidv4(),
        name: "Wen Xin",
      },
      {
        id: uuidv4(),
        name: "Calvin",
      },
      {
        id: uuidv4(),
        name: "Brandon",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("trainers");
  },
};
