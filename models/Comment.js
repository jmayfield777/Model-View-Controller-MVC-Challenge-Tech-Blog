const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    userId: {
      type: Datatypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    blogPostId: {
      type: Datatypes.INTEGER,
      references: {
        model: 'blogpost',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;