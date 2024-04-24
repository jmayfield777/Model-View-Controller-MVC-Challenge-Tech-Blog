const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');


// get all blogpost
router.get('/', async (req, res) => {
  try {
    const blogData = await BlogPost.findAll({
      attributes: ['id', 'blog_title', 'blog_text'],
      include: [{
        model: User,
        attributes: ['username'],
      },
      {
        model: Comment,
        attributes: ['id', 'text', 'user_id', 'blog_id'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
    ],
    });

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one blogpost
router.get('/:id', async (req, res) => {
  try {
    const blogData = await BlogPost.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ['id', 'blog_title', 'blog_text'],
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'blog_id'],
            include: {
              model: User,
              attributes: ['username'],
            },
          },
        ]
    });

    if (!blogData) {
      res
        .status(404)
        .json({ message: 'No post found with this id' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});