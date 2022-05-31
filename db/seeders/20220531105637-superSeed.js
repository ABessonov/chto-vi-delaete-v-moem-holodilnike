const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [
      { name: 'milk_products', createdAt: new Date(), updatedAt: new Date() },
      { name: 'sweets', createdAt: new Date(), updatedAt: new Date() },
      { name: 'vegetables', createdAt: new Date(), updatedAt: new Date() },
      { name: 'fruits', createdAt: new Date(), updatedAt: new Date() },
    ];
    const roles = [
      { name: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'regular', createdAt: new Date(), updatedAt: new Date() },
    ];
    const users = [
      {
        name: 'Garegin', email: 'gar@mail.ru', password: await bcrypt.hash('123', 10), role_id: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Sasha', email: 'sasha@mail.ru', password: await bcrypt.hash('123', 10), role_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const products = [
      {
        name: 'tomato', value: 'new', user_id: '1', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'milk', value: 'old', user_id: '2', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ice_cream', value: 'new', user_id: '1', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'orange', value: 'new', user_id: '2', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'banana', value: 'old', user_id: '1', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const favourites = [
      {
        user_id: '1', product_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: '2', product_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },

    ];

    await queryInterface.bulkInsert('categories', categories);
    await queryInterface.bulkInsert('roles', roles);
    await queryInterface.bulkInsert('users', users);
    await queryInterface.bulkInsert('products', products);
    await queryInterface.bulkInsert('favourites', favourites);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
