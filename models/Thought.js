const { model, Schema } = require('mongoose');
const reactionSchema = require('./Reaction');
const { hash, compare } = require('bcrypt');
const dayjs = require('dayjs')



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
    get: function(time) {
      return dayjs(time).format('MMM/DD/YYYY hh:mm a')}
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
},

  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;