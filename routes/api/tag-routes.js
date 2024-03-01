const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // Find all tags
    const tagsData = await Tag.findAll({
      // Include associated Product data
      include: [{ model: Product, through: ProductTag }]
    });
    res.status(200).json(tagsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Find a single tag by its `id`
    const tagData = await Tag.findByPk(req.params.id, {
      // Include associated Product data
      include: [{ model: Product, through: ProductTag }]
    });
    if (!tagData) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a new tag
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Update a tag's name by its `id` value
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updatedTag);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Delete one tag by its `id` value
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deletedTag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
