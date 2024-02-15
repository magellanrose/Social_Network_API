const { model, Schema } = require('mongoose');
const { hash, compare } = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/]
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    },
    id: false
  });

userSchema.pre('save', async (next) => {
  if (this.isNew) {
    this.password = await hash(this.password, 10);
  }
  next();
});

userSchema.methods.validatePass = async function (formPassword) {
  const is_valid = await compare(formPassword, this.password);

  return is_valid
};

userSchema.set('toJSON', {
  transform: (_, user) => {
    delete user.password;
    delete user.__v;
    return user;
  }
});

const User = model('User', userSchema);

module.exports = User;