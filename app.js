// IMPORTS ------------------ //
const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();

// MORGAN CONFIG ------------------ //
app.use(morgan('dev'));
/// vs.:
// app.use(function(req, res, next){
//   console.log(req.method, res.statusCode, req.url);
//   next()
// });

// ROUTES ------&----------- //
// RENDERING ------------------ //
app.get('/', function(req, res, next) {
  //res.send('Welcome!');
  res.render('index', {title: 'hall of fame', people: people});
  // nunjucks.render('index.html', people, function(err, template) {
  //   if (err) throw err;
  //   //console.log(data);
  //   res.send(template);
  // });
})

// LISTEN STATEMT ------------------ //
app.listen(3000, function() {
  console.log('Server chillin on port 3000');
})

// DATA ------------------ //
const data = {
  title: 'An Example',
  people: [
    {
      name: 'Gandalf',
    },
    {
      name: 'Frodo',
    },
    {
      name: 'Hermione'
    }
  ]
}
const people = [
  {name: 'Full'},
  {name: 'Stacker'},
  {name: 'Son'}
];

// TEMPLATING VIA NUNJUCKS ------------------ //
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  noCache: true
});

