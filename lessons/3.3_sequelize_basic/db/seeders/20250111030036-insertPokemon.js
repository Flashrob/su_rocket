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

    await queryInterface.bulkInsert("pokemons", [
      {
        id: uuidv4(),
        name: "Charizard",
      },
      {
        id: uuidv4(),
        name: "Pikachu",
      },
      {
        id: uuidv4(),
        name: "Bulbasaur",
      },
      {
        id: uuidv4(),
        name: "Mewto",
      },
      {
        id: uuidv4(),
        name: "Geodude",
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

    await queryInterface.bulkDelete("pokemons");
  },
};
