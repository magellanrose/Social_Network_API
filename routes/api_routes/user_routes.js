const { routesError } = require('../helpers');
const { User } = require('../../models')
const router = require('express').Router();

// GET ALL USERS
router.get('/users', async (req, res) => {
  try {

    const users = await User.find();

    res.json(users)
  } catch (err) {
    routesError(err, res)
  }
});

// GET USER BY ID
router.get('/user/:user_id', async (req, res) => {
  try {
    const userId = await User.findById(req.params.user_id);

    if (userId) return res.status(404).json({
      message: 'User with ID not found'
    });

    res.json(userId);
  } catch (err) {

    routesError(err, res)
  }
});

// Route to post a new user
router.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.json(newUser)
  } catch (err) {
    routesError(err,res)
  }
})

// Route to update(put) a user by its ID
router.put('/users/:user_id', async (req, res) => {
  const { username, email, thoughts, friends } = req.body;
  try {

  } catch (err) {
    routesError(err,res)
  }

})

// Route to delete user by id
router.delete('/users/:user_id', async (req, res) => {
  try {
     await User.deleteOne({id: req.params.user_id});

     res.json({
      message: 'User deleted successfully!'
     })
  } catch (err) {
    routesError(err,res)
  }

})


module.exports = router