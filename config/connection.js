require('dotenv').config();

const { Sequelize } = require('sequelize');

// Function to initialize Sequelize based on environment
function initializeDatabase() {
  // Check for JAWSDB_URL to use JAWSDB for production
  if (process.env.JAWSDB_URL) {
    return new Sequelize(process.env.JAWSDB_URL);
  }
  
  // Fallback to local database configuration
  return new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });
}

const sequelize = initializeDatabase();

module.exports = sequelize;
