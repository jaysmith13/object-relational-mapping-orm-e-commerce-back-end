const router = require('express').Router();
const { Category, Product } = require('../../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{
      Model: Product,
      as: 'products'}
    ]
  })
  // be sure to include its associated Products
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status().json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.find({
    where: {
      id: req.params.id
    },
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({
    where:{
      id:req.params.id
    }
  })
});

module.exports = router;