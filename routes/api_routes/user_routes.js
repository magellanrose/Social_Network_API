const { routesError } = require('../helpers');

const router = require('express').Router();

// GET ALL USERS
router.get('/users', async (req,res) => {
  try {
    
  } catch (error) {
    
  }
});

// GET USER BY ID
router.get('/user/:user_id', async (req,res) => {
  try {
    const userId = await User.findById(rec.params.user_id);

    res.json(userId);
  } catch (error) {
    
    routesError(error, res)
  }
});