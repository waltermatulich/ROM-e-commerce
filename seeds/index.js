const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  try {
    // Synchronize the database
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    // Seed categories
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    // Seed products
    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    // Seed tags
    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    // Seed product tags
    await seedProductTags();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    // Exit the process
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1); // Exit with a non-zero status code to indicate failure
  }
};

// Call the seedAll function
seedAll();
