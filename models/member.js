'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Member.belongsTo(models.Organization, {as: 'Organization', foreignKey: 'organizationId'})
      Member.hasMany(models.Follower)
      Member.hasMany(models.Comment)
    }
  }
  Member.init({
    username: DataTypes.STRING,
    avatarUrl: {
      type : DataTypes.STRING,
      defaultValue: 'https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png'
    },
    followers: DataTypes.STRING,
    following: DataTypes.STRING,
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
    modelName: 'Member',
  });
  return Member;
};