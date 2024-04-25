const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/withAuth');

// get all blogpost
router.get('/', async (req, res) => {
  try {
    const blogData = await BlogPost.findAll({
      include: [{
        model: User,
        attributes: ['name'],
      }],
    });

    const blogs = blogData.map((blog) => blog.get({
      plain: true,
    }));

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  
// get one blogpost
router.get('/blogpost/:id', async (req, res) => {
  try {
    const blogData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          include: [
            User
          ],
        },
      ],
    });

    const blog = blogData.get({
      plain: true
    });

    res.render('blogPost', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// dashboard route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password']
      },
        include: [{
          model: BlogPost
        }],
    });

    const loggedInUser = userData.get({
      plain: true,
    });

    res.render('dash', {
      ...loggedInUser,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  } else {
    res.render('login');
  }
});

// signup route
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
  } else {
    res.render('signup');
  }
});

module.exports = router;