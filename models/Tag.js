// Importing necessary modules from sequelize package
const { Model, DataTypes } = require('sequelize');

// Importing the database connection from your configuration file
const sequelize = require('../config/connection.js');

// Defining the Tag model by extending the Model class
class Tag extends Model {}

// Initializing the model's attributes and configurations
Tag.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Automatically increment the ID for new entries
    },
    tag_name: {
      type: DataTypes.STRING, // Define tag_name as a string
      // allowNull is not explicitly set, so it defaults to true
    },
  },
  {
    // Model options go here
    sequelize, // Pass the connection instance
    timestamps: false, // Do not automatically create timestamp fields
    freezeTableName: true, // Disable automatic pluralization of table name
    underscored: true, // Use snake_case rather than camelCase for database columns
    modelName: 'tag', // Explicitly define the model name
  }
);

// Export the Tag model for use elsewhere in the application
module.exports = Tag;
