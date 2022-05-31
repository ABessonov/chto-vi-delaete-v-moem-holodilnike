const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ roles, products }) {
      this.belongsTo(roles, { foreignKey: 'role_id' });
      this.hasMany(products, { foreignKey: 'user_id' });
      this.belongsToMany(products, { through: 'favourites', foreignKey: 'user_id', as: 'userFavourites' });
    }
  }
  users.init({
    name: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
