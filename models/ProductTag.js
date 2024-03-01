// Import required components from Sequelize
const { Model, DataTypes } = require('sequelize');
// Import the database connection
const sequelize = require('../config/connection');

// Define the ProductTag model by extending Sequelize's Model class
class ProductTag extends Model {}

// Initialize the model's schema and configuration
ProductTag.init(
  {
    // Define model attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Automatically increment the ID for each new entry
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // Establishes a relationship to the Product model
        key: 'id', // Specifies the foreign key column in the Product model
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // Establishes a relationship to the Tag model
        key: 'id', // Specifies the foreign key column in the Tag model
      },
    },
  },
  {
    // Model options
    sequelize, // The connection instance
    timestamps: false, // Disable automatic creation of createdAt/updatedAt fields
    freezeTableName: true, // Prevent table name modification by Sequelize
    underscored: true, // Enable snake_case naming convention
    modelName: 'product_tag', // Explicitly define the model name
  }
);

// Export the model for use elsewhere in the application
module.exports = ProductTag;
