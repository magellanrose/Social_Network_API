const router = require('express').Router();
const thought_routes = require('./thought_routes')
const user_routes = require('./user_routes');
const reaction_routes = require('./reaction_routes')
router.use('/',[
  thought_routes,
  user_routes,
  reaction_routes
])



// module.exports = {
//   user_routes: require('./user_routes'),
//   thought_routes: require('./thought_routes')
// }

module.exports= router