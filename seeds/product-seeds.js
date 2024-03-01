const { Product } = require('../models');

const productData = [
  {
    product_name: 'Striped Polo Shirt',
    price: 19.99,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Running Shoes',
    price: 110.0,
    stock: 30,
    category_id: 5,
  },
  {
    product_name: 'Vintage Snapback Hat',
    price: 24.99,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'Classic Rock Vinyl Record',
    price: 14.99,
    stock: 40,
    category_id: 3,
  },
  {
    product_name: 'Denim Cargo Shorts',
    price: 34.99,
    stock: 18,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
