const router = require('express').Router();
const { User, BlogPost } = require('../../models');

// get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: {
        exclude: ['password']
      }
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// get single user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findOne({
      attributes: {
        exclude: ['password']
      },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: BlogPost,
          attributes: ['id', 'blog_title', 'blog_text']
        },
        {
          model: Comment,
          attributes: ['id', 'text'],
          include: {
            model: BlogPost,
            attributes: ['blog_title']
          },
        },
      ]
    });

    if (!userData) {
      res
        .status(404)
        .json({ message: 'No user found with this id' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to login a user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email }});

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to logout a user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;