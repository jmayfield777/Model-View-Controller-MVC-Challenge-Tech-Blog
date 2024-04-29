const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');
const blogPostSeeds = require('./blogPostSeeds');
const commentSeeds = require('./commentSeeds');
const userSeeds = require('./userSeeds');

const seedDb = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });

  for (const blogpost of blogPostSeeds) {
    await BlogPost.create({
      ...blogpost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentSeeds, {
    returning: true,
  });

  process.exit(0);
};

seedDb();