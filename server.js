const express = require('express');
const app = express();

const PORT = process.env.PORT || 4444;

const connection = require('./config/connection');

const user_routes = require('./routes/api_routes');
// const { thought_routes } = require('./routes/api_routes');
// const  = require('./routes/api_routes')

// MIDDLEWARE
app.use(express.json());

app.use('/api', 
  user_routes
)

// LOAD ROUTES
connection.on('open', () => {
  app.listen(PORT, () => console.log('server started on port', PORT));
});
