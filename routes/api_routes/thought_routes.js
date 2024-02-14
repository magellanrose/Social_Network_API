const { routesError } = require('../helpers');
const Thought = require('../../models/Thought');
const router = require('express').Router();

// GET ALL THOUGHT
router.get('/thoughts', async (req,res) => {
  try {
    
    const thoughts = await Thought.find();

    res.json(thoughts)
  } catch (err) {
    routesError(err,res)
  }
});

// GET THOUGHT BY ID
router.get('/thoughts/:thought_id', async(req,res) => {

  try {
    const thought = await Thought.findById(req.params.user_id);


    res.json(thought);
  } catch (error) {
    routesError(err,res)
  }
});

// Route to post new thought
router.post('/thoughts', async(req, res) => {
  try {
    const newThought = await Thought.create(req.body);

    res.json(newThought)
  } catch (err) {
    routesError(err,res)
  }
})

// Route to update thought by id
router.put('/thoughts/:thought_id', async(req, res) => {

})

// Route to delete thought by id
router.delete('/thoughts/:thought_id', async(req, res) => {


  try {
    await Thought.deleteOne({id: req.params.thought_id});

    res.json({
     message: 'User deleted successfully!'
    })
 } catch (err) {
   routesError(err,res)
 }

})




module.exports = router