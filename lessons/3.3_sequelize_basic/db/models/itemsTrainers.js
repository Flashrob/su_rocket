"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class ItemsTrainers extends Model {
    static associate(models) {}
  }
  ItemsTrainers.init(
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
      modelName: "ItemsTrainers",
      tableName: "items_trainers_inventory",
    }
  );
  return Trainer;
};
