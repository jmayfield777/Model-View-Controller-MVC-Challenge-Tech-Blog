const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');

// get all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll();

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a comment
router.post('/', async (req, res) => {
  try {
   const comments = await Comment.create({
    text: req.body.text,
    user_id: req.body.user_id,
    blog_id: req.body.blog_id
   });

   res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const comments = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!comments) {
      res
        .status(404)
        .json({ message: 'Not found' });
      return;
    }

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;