// IMPORTS ------------------ //
const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const socketio = require('socket.io');


// TEMPLATING BOILERPLATE SETUP ------------------ //
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });


// LOGGING MIDDLEWARE ------------------ //
app.use(morgan('dev'));

// BODY-PARSING MIDDLEWARE
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));  // true? false?
// for ajax requests:
app.use(bodyParser.json());



// STYLES CONFIG ------------------ //
app.use(express.static('public'))


// LISTEN STATEMT ------------------ //
const server = app.listen(3000, function() {
  console.log('Server chillin on port 3000');
})
const io = socketio.listen(server);


// ROUTES ------&----------- //
// RENDERING ------------------ //
app.use('/', routes(io));


// SEED DATA ------------------ //
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
