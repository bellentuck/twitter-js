// IMPORTS ------------------ //
const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');


// MORGAN CONFIG ------------------ //
app.use(morgan('dev'));
app.use(express.static('public'))


// ROUTES ------&----------- //
// RENDERING ------------------ //
app.use('/', routes);

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


