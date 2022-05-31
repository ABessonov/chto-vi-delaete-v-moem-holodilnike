const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
  categories, favourites, products, roles, users,
} = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    res.render('signUp');
  })
  .post(async (req, res) => {
    const {
      name, email, password,
    } = req.body;
    // const usersCity = await City.findOne({ where: { name: city_id } });

    if (name && email && password) {
      const user = await users.findOne({ where: { email } });
      if (user) {
        return res.send(401);
        // eslint-disable-next-line no-else-return
      } else {
        const user1 = await users.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          role_id: 2,
        });
        req.session.userid = user1.id;
        req.session.username = user1.name;
        req.session.useremail = user1.email;
        req.session.userrole = user1.role_id;
        return res.send(200);
      }
    }

    return res.send(401);
  });

module.exports = router;
