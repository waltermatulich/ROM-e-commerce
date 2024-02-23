const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: `category_id`,
  onDelete: "CASCADE"
})

Category.hasMany(Product, {
  foreignKey: 'category_id'
})

Product.belongsToMMany(Tag, {
  through: ProductTag,
  foreignKey: "tag_id"
})

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id "
})

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
