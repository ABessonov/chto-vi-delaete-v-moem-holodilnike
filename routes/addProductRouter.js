const router = require('express').Router();
const {
  categories, favourites, products, roles, users,
} = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    res.render('addProduct');
  })
  .post(async (req, res) => {
    const {
      productName, productOwner, productCategory, productState,
    } = req.body;
    const owner = await users.findOne({
      where: { name: productOwner },
    });
    const category = await categories.findOne({
      where: { name: productCategory },
    });
    const newProduct = await products.create({
      name: productName,
      value: productState,
      user_id: owner.id,
      category_id: category.id,
    });
  });

module.exports = router;
