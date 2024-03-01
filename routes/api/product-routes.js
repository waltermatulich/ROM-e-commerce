const express = require('express');
const router = express.Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [Category, { model: Tag, through: ProductTag }]
    });

    if (!productData || productData.length === 0) {
      res.status(404).json({ message: "No products found." });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one product by its ID
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [Category, { model: Tag, through: ProductTag }]
    });

    if (!productData) {
      res.status(404).json({ message: "No product found with this id." });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new product
router.post('/', async (req, res) => {
  try {
    const newProductData = await Product.create(req.body);

    if (req.body.tagIds && req.body.tagIds.length > 0) {
      const productTagIdArray = req.body.tagIds.map((tag_id) => ({
        product_id: newProductData.id,
        tag_id
      }));
      await ProductTag.bulkCreate(productTagIdArray);
    }

    res.status(200).json(newProductData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT to update a product by its ID
router.put('/:id', async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id }
    });

    if (req.body.tagIds && req.body.tagIds.length > 0) {
      await ProductTag.destroy({ where: { product_id: req.params.id } });

      const productTagIdArray = req.body.tagIds.map((tag_id) => ({
        product_id: req.params.id,
        tag_id
      }));

      await ProductTag.bulkCreate(productTagIdArray);
    }

    res.status(200).json({ message: `Product with ID ${req.params.id} updated.` });
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a product by its ID
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({ where: { id: req.params.id } });

    if (!productData) {
      res.status(404).json({ message: `No product found with ID ${req.params.id}.` });
      return;
    }

    res.status(200).json({ message: `Product with ID ${req.params.id} deleted.` });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
