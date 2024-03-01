const express = require('express');
const router = express.Router();

// Importing route handlers for categories, products, and tags
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Mounting route handlers for different endpoints
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Exporting the router for use in other parts of the application
module.exports = router;
