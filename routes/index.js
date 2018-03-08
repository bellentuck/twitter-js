const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


module.exports = function(io) {

  router.get('/', function (req, res, next) {
    let allTweets = tweetBank.list();
    res.render( 'index', { title: 'Twitter.js', tweets: allTweets, showForm: true } );
  });

  router.get('/users/:name', function(req, res, next) {
    var userName = req.params.name;
    var tweetsForName = tweetBank.find({userName: userName});
    console.log(userName);
    res.render('index', { title: 'Twitter.js', tweets: tweetsForName, showForm: true, userName: userName });
  });

  router.get('/tweets/:id', function(req, res, next) {
    const tweetsWithThatId = tweetBank.find({ id: Number(req.params.id) });
    res.render('index', { title: 'Twitter.js', tweets: tweetsWithThatId })
  });

  router.post('/tweets', function(req, res, next) {
    var name = req.body.name;
    var text = req.body.text;
    // 'add' takes: name, content, userName
    tweetBank.add(name, text);
    // instruction for browser: go to a different location
    res.redirect('/');
  });

  // router.get('/stylesheets/style.css', function(req, res) {
    // res.sendFile(path.resolve('/public/stylesheets/style.css'), {root: '/Users/edisonalulema/Desktop/fullstack/twitter-js'});
  // })

  //module.exports = router;


  return router;
}
