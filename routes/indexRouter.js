const router = require('express').Router();
const {
  categories, favourites, products, roles, users,
} = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    let product = await products.findAll({ include: { model: categories } });
    product = JSON.parse(JSON.stringify(product));
    // console.log(product);
    res.render('index', { product });
  })
  .delete(async (req, res) => {
    await products.destroy({ where: { id: req.body.id } });
    res.json();
  })
  .post(async (req, res) => {
    const product = await products.findOne({ where: { name: req.body.productName } });
    res.json(product);
  });
module.exports = router;
