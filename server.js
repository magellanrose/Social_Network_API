const express = require('express');
const app = express();

const PORT = process.env.PORT || 4444;

const connection = require('./config/connection');

const { user_routes, thought_routes } = require('./routes/api_routes')


// MIDDLEWARE
app.use(express.json());

// LOAD ROUTES
app.use('/api', [
  user_routes,
  thought_routes
])

connection.on('open', () => {
  app.listen(PORT, () => console.log('server started on port', PORT));
});
