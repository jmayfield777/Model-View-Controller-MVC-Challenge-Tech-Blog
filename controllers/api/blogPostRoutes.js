const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');


// create a blogpost
router.post('/', async (req, res) => {
  try {
    const blogData = await BlogPost.create({
        blog_title: req.body.blog_title,
        blog_text: req.body.blog_text,
        user_id: req.session.user_id
    });

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a blogpost
router.put('/:id', async (req, res) => {
  try {
    const blogData = await BlogPost.update(
    {
      blog_title: req.body.blog_title,
      blog_text: req.body.blog_text,
    },
    {
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res
        .status(404)
        .json({ message: 'No blogpost found with this id' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a blogpost
router.delete('/:id', async (req, res) => {
  try {
    const blogData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res
        .status(404)
        .json({ message: 'No blogpost found with this id' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;