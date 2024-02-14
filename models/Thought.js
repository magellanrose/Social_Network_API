const { model, Schema } = require('mongoose');
const { hash, compare } = require('bcrypt');

const thoughtSchema = new Schema({

})



const Thought = model('User', userSchema);

module.exports = Thought;