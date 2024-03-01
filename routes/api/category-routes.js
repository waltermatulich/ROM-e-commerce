const express = require('express');
const router = express.Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    if (!categories) {
      res.status(404).send('No categories found.');
      return;
    }
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET a single category by its ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).send(`No category found with the id ${req.params.id}.`);
      return;
    }
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT to update a category by its ID
router.put('/:id', async (req, res) => {
  try {
    const updateStatus = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (updateStatus[0] === 0) {
      res.status(404).send(`No category found with the id ${req.params.id}.`);
      return;
    }
    res.send(`Category with id ${req.params.id} updated.`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE a category by its ID
router.delete('/:id', async (req, res) => {
  try {
    const deleteStatus = await Category.destroy({
      where: { id: req.params.id },
    });
    if (deleteStatus === 0) {
      res.status(404).send(`No category found with the id ${req.params.id}.`);
      return;
    }
    res.send(`Category with id ${req.params.id} deleted.`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
