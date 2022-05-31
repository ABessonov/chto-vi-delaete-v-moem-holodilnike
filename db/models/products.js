const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ categories, users }) {
      this.belongsTo(categories, { foreignKey: 'category_id' });
      this.belongsTo(users, { foreignKey: 'user_id' });
      this.belongsToMany(users, { through: 'favourites', foreignKey: 'product_id', as: 'productFavourites' });
    }
  }
  products.init({
    name: DataTypes.STRING,
    value: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};
