const express = require('express');
const app = express();

const PORT = process.env.PORT || 4444;

const connection = require('./config/connection');

// const { api_routes } = require('./routes')


// MIDDLEWARE
app.use(express.json());

// LOAD ROUTES
// app.use('/api', [
//   api_routes
// ])

connection.on('open', () => {
  app.listen(PORT, () => console.log('server started on port', PORT));
});
