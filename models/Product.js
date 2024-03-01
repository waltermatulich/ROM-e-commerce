// Import the necessary components from the sequelize package
const { Model, DataTypes } = require('sequelize');
// Import the sequelize connection instance from the config.js file
const sequelize = require('../config/connection');

// Define the Product class, extending Sequelize's Model class to leverage its functionalities
class Product extends Model {}

// Initialize the Product model's attributes and configurations
Product.init(
  {
    // Attribute definitions for the model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Automatically increment the ID for new entries
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false, // Require a value for product_name
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Allow for a precision of 10 digits and 2 decimal places
      allowNull: false,
      validate: {
        isDecimal: true, // Ensure the price is a valid decimal number
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // Default stock value if none is provided
      validate: {
        isNumeric: true, // Ensure the stock value is numeric
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // This references the 'category' table
        key: 'id', // Specifies the column in the referenced table
      },
    },
  },
  {
    // Model configuration options
    sequelize, // The connection instance
    timestamps: false, // Do not automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, // Prevent Sequelize from renaming the table
    underscored: true, // Use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    modelName: 'product', // Explicitly define the model name
  }
);

// Export the Product model for use in other parts of the application
module.exports = Product;
