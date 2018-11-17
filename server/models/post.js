'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      DataTypes.STRING,
      allowNull: false
    },
    body: {
      DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
