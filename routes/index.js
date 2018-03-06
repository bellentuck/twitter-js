const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


module.exports = function(io) {

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get('/users/:name', function(req, res) {
    var userName = req.params.name;
    var list = tweetBank.find({userName: userName});
    console.log(userName);
    res.render('index', { tweets: list, showForm: true, userName: userName });
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

  // router.get('/stylesheets/style.css', function(req, res) {
    // res.sendFile(path.resolve('/public/stylesheets/style.css'), {root: '/Users/edisonalulema/Desktop/fullstack/twitter-js'});
  // })

  //module.exports = router;


  return router;
}
