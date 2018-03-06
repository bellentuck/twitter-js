const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');



router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var userName = req.params.name;
  var list = tweetBank.find({userName: userName});
  console.log(list);
  res.render('index', { tweets: list});
});


// router.get('/stylesheets/style.css', function(req, res) {
  // res.sendFile(path.resolve('/public/stylesheets/style.css'), {root: '/Users/edisonalulema/Desktop/fullstack/twitter-js'});
// })

module.exports = router;
