const { Model, DataTypes } = require('sequelize');

const sequelize = require('../Develop/config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.integer,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name:{
      type:DataTypes.string,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;