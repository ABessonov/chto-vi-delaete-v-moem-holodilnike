const router = require('express').Router();
const {
  categories, favourites, products, roles, users,
} = require('../db/models');

router.route('/:id')
  .get(async (req, res) => {
    const productId = req.params.id;
    let product = await products.findOne({
      where: { id: productId },
      include: {
        model: categories,
      },
    });
    product = JSON.parse(JSON.stringify(product));
    res.render('search', { product });
  });

module.exports = router;
