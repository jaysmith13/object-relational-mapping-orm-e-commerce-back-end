const { Model, DataTypes } = require('sequelize');

const sequelize = require('../Develop/config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.integer,
      primaryKey: true,
      autoIncrement: true
    },
    Category_name:{
      type:DataTypes.String,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;