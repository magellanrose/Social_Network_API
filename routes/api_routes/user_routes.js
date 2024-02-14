const { routesError } = require('../helpers');

const router = require('express').Router();

// GET ALL USERS
router.get('/users', async (req,res) => {
  try {
    
    const users = await User.find();

    res.json(users)
  } catch (err) {
    routesError(err,res)
  }
});

// GET USER BY ID
router.get('/user/:user_id', async (req,res) => {
  try {
    const userId = await User.findById(req.params.user_id);

    if(userId) return res.status(404).json({
      message: 'User with ID not found'
    });

    res.json(userId);
  } catch (err) {
    
    routesError(err, res)
  }
});