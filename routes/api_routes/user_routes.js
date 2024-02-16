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

    if (!userId) return res.status(404).json({
      message: 'User with that ID not found'
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
  const { password, email, newPassword } = req.body;
  try {
    if(email) {
      const userUpdate = await User.findByIdAndUpdate(req.params.user_id, {
        $set: {
          email: email
        }
      }, { new: true});

      res.json(userUpdate);
    }

    if (password) {
      const userPass = await User.findById(req.params.user_id);
      if (!userPass) return res.status(404).json({
        message: 'User with ID not found'
      })

      const pass_correct = await userUpdate.validatePass(password);
      if (!pass_correct) return res.status(401).json({
        message: 'The old password is incorrect'
      });
      userPass.password = newPassword;
      userPass.save();
      res.json(userPass)
    }
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

// Create friend
router.get('/friends', async (req, res) => {
  try {
    const friend = await User.create(req.body);

    res.json(friend)
  } catch (err) {
    routesError(err,res);
    
  }
});

// Delete Friend by ID
router.delete('/friends/:friend_id', async (req, res) =>{
  try {
    await User.deleteOne({id: req.params.friend_id})

    res.json({
      message: 'User deleted succesfully'
    })
  } catch (err) {
    routesError(err,res)
  }
})



module.exports = router