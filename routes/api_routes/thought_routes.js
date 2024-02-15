const { routesError } = require('../helpers');
const { Thought } = require('../../models/Thought');
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
    const thought = await Thought.findById(req.params.thought_id);
    if(!thought) return res.status(404).json({
      message: 'ID Thought not found'
    })

    res.json(thought);
  } catch (err) {
    routesError(err,res)
  }
});

// Route to post new thought
router.post('/thoughts', async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);

    res.json(newThought)
  } catch (err) {
    routesError(err,res)
  }
})

// Route to update thought by id
router.put('/thoughts/:thought_id', async(req, res) => {
  const { thoughtText } = req.body
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thought_id, {
      $set: {
        thoughtText: thoughtText
      }
    }, { new: true});

    if(!thought) {
      return res.status(404).json({ 
        message: 'ID Thought not found'
      })
    }
  } catch (err) {
    routesError(err, res)
  }
})

// Route to delete thought by id
router.delete('/thoughts/:thought_id', async(req, res) => {

  try {
    await Thought.deleteOne({id: req.params.thought_id});

    res.json({
     message: 'Thought deleted successfully!'
    })
 } catch (err) {
   routesError(err,res)
 }

})




module.exports = router