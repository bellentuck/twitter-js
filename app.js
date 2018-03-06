const express = require('express');
const app = express();

app.use(function(req, res, next){
  console.log(req.method, res.statusCode, req.originalUrl);
  next()

});

app.get('/', function(req, res, next) {
  res.send('Welcome!');
})

app.listen(3000, function() {
  console.log('Server chillin on port 3000');
})
