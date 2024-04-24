const User = require('../models/User');
const BlogPost = require('../models/BlogPost');
const Comment = require('../models/Comment');

// create relationship between users and blogposts
User.hasMany(BlogPost, {
  foreignKey: 'user_id',
});

// create relationship between users and comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
  });

// use belongsto to connect blogposts to users
BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

// create relationship between blogposts and comments
BlogPost.hasMany(Comment, {
    foreignKey: 'blog_id',
  });

// use belongsTo to connect comments to users
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// use belongsTo to connect comments to blogposts
Comment.belongsTo(BlogPost, {
  foreignKey: 'blog_id'
});

module.exports = {
  User,
  BlogPost,
  Comment
};