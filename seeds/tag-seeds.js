const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'classic rock',
  },
  {
    tag_name: 'indie music',
  },
  {
    tag_name: 'navy',
  },
  {
    tag_name: 'crimson',
  },
  {
    tag_name: 'emerald',
  },
  {
    tag_name: 'ivory',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'movies',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
