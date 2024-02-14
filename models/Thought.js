const { model, Schema } = require('mongoose');
const { hash, compare } = require('bcrypt');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
},

  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });



const Thought = model('User', userSchema);

module.exports = Thought;