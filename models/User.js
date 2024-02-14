const { model, Schema } = require('mongoose');
const { hash, compare } = require('bcrypt');

const userSchema = new Schema({

})



const User = model('User', userSchema);

module.exports = User;