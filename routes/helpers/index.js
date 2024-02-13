function routesError (err, res) {
  console.log(err)
  
  if (err.code === 11000) {
    // Duplicate entry error
    res.status(403).json({
      message: 'A user already exists with that email address'
    });
  }

  if(err.kind === 'ObjectId') {
    return res.status(404).json({
      message: 'user with that id cannot be found'
    })
  }

  if(!err.errors){
    return res.status(500).json({
      message: 'the server encountered an error'
    })
  }

  let messages = [];

  for (let prop in err.errors) {
    messages.push(err.errors[prop].message)

  }

  res.json({
    error: 403,
    messages
  });
}

module.exports = {
  routesError
}