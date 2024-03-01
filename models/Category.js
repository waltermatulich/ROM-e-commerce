const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js'); // Import sequelize configuration

// Define the Category model extending Sequelize's Model class
class Category extends Model {}

// Initialize the Category model's schema and configuration
Category.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Automatically increment the ID for each new entry
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: true, // Allows null to enable optional category names
    }
  },
  {
    sequelize, // Pass the connection instance
    timestamps: false, // Do not automatically create timestamp fields
    freezeTableName: true, // Prevent sequelize from renaming the table
    underscored: true, // Use snake_case rather than camelCase for database columns
    modelName: 'category', // Define the name of the model
  }
);

module.exports = Category; // Export the Category model for use in other parts of the application
