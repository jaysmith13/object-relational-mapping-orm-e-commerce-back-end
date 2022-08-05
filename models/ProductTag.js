const { Model, DataTypes } = require('sequelize');

const sequelize = require('../Develop/config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
   id:{
    type:DataTypes.integer,
    primaryKey: true,
    autoIncrements: true
   },
   product_id: {
    type: DataTypes.integer,
    references: {
      Model: 'product',
      key: 'id'
   }
  },
  tag_id: {
    type: DataTypes.integer,
    references: {
      Model: 'tag',
      key: 'id'
    }
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;