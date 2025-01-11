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

    await queryInterface.bulkInsert("items", [
      {
        id: uuidv4(),
        name: "Potion",
      },
      {
        id: uuidv4(),
        name: "Pokeball",
      },
      {
        id: uuidv4(),
        name: "Masterball",
      },
      {
        id: uuidv4(),
        name: "Sunstone",
      },
      {
        id: uuidv4(),
        name: "Hyper Potion",
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

    await queryInterface.bulkDelete("items");
  },
};
