const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define the relationship between Product and Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Specify the foreign key in the Product model
  onDelete: 'CASCADE', // Delete associated products when a category is deleted
});

// Define the relationship between Category and Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Establish the foreign key in the Product model for the association
});

// Set up the many-to-many relationship between Product and Tag through ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag, // Intermediate model for the M:N relationship
  foreignKey: 'product_id', // Correct foreignKey to match the Product association in ProductTag
});

// Set up the many-to-many relationship between Tag and Product through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag, // Intermediate model for the M:N relationship
  foreignKey: 'tag_id', // Specify the correct foreign key for the association
});

// Export the models for use elsewhere in the application
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
