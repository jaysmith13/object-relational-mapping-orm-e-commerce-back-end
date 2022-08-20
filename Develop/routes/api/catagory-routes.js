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


.then(dbCategoryData => {
      if (!dbCategoryData) {//Checking to make sure id exists
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {//checking to make sure id exists
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});





router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({
    where:{
      id:req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {//check to make sure id exists
      res.status(404).json({ message: 'This category ID was not found' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;