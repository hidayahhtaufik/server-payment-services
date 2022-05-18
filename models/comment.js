'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Member, {as: 'Member', foreignKey: 'memberId'})
      Comment.belongsTo(models.Organization, {as: 'Organization', foreignKey: 'organizationId'})
    }
  }
  Comment.init({
    comment: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    memberId: {
      type: DataTypes.INTEGER,
      references: {
        model: {tableName: 'Member'},
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    organizationId: {
      type: DataTypes.INTEGER,
      references: {
        model: {tableName: 'Organization'},
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};