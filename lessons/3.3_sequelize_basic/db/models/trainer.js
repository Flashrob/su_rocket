"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
// const { Item } = require("./index");
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Item, { through: "items_trainers" }); // uses 'id' as foreign key
    }
  }
  Trainer.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Trainer",
    }
  );
  // Trainer.belongsToMany(Item, {
  //   foreignKey: 'itemId',
  // });
  // Trainer.belongsToMany(Item); // uses 'id' as foreign key
  return Trainer;
};
