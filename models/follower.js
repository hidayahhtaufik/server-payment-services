'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Follower.belongsTo(models.Member, {as: 'Member', foreignKey: 'memberId'})
    }
  }
  Follower.init({
    memberId: {
      type: DataTypes.INTEGER,
      references: {
        model: {tableName: 'Member'},
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Follower',
  });
  return Follower;
};