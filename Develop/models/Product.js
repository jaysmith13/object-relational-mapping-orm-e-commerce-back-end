// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
  id: {
    type: DataTypes.Integer,
    primaryKey: true,
    autoIncrement: true
  },
product_name:{
  type:DataTypes.STRING,
  allowNull: false,
},
price: {
  type: DataTypes.Decimal,
  allowNull: false,
  validate: {
    isDecimal: true
  }
},
stock: {
  type: DataTypes.Integer,
  allowNull: false,
  defaultValue: 10,
  validate: {
    isInt: true
  }
},
category_id: {
  type: DataTypes.Integer,
  references: {
    Model: 'category',
    key: 'id'
  }
}
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;