const { Reaction } = require('../../models/');
const { routesError } = require('../helpers/index');
const router = require('express').Router();


// Create Reaction
router.post('/reactions', async (req, res) => {
  try {
    const reactions = await Reaction.create(req.body);

    res.json(reactions)
  } catch (err) {
    routesError(err,res);
    
  }
});

// Delete Reaction by ID
router.delete('/reactions/:reactions_id', async (req, res) =>{
  try {
    await Reaction.deleteOne({id: req.params.reactions_id})

    res.json({
      message: 'User deleted succesfully'
    })
  } catch (err) {
    routesError(err,res)
  }
})

module.exports = router