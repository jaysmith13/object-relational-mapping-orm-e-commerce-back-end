const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{
      Model: Product,
      as: 'products'}
    ]
  })
 
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status().json(err);
  })
});

router.get('/:id', (req, res) => {

  Category.find({
    where: {
      id: req.params.id
    },
  })
 
.then(dbCategoryData => {
      if (!dbCategoryData) {
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
  
  Category.create({
    category_name: req.body.category_name,
    })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
  
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
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
  
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
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