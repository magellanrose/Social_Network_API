const { model, Schema } = require('mongoose');
const { hash, compare } = require('bcrypt');



const reactionSchema = new Schema({});



const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;