const express = require('express');
const app = express();

const PORT = process.env.PORT || 4444;

const connection = require('./config/connection');


// Middleware
app.use(express.json());

connection.on('open', () => {
  app.listen(PORT, () => console.log('server started on port', PORT));
});
