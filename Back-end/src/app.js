var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');

var app = express();

const getUser = require('./firebaseAPI/user');
const createUserAccount = require('./firebaseAPI/createUserAccount');
const updateUser = require('./firebaseAPI/updateUser');
const login = require('./firebaseAPI/login');
const logout = require('./firebaseAPI/logout');
const createCow = require('./firebaseAPI/createMilk');
const createMilk = require('./firebaseAPI/createMilkyStat');

const db = require('./services/Firebase');
const getAllTasks = require('./firebaseAPI/getMilk');
const getAllCows = require('./firebaseAPI/getCow');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//это может потом надо будет закоментить
// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  next(createError(404));
//});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post('/user-sign-up', (req, res) => {
  console.log('user-sign-up');
  createUserAccount(req.body);
  res.sendStatus(200);
});

app.put('/user-update', (req, res) => {
  console.log('user-update');
  updateUser(req.body);
  res.sendStatus(200);
});

app.post('/login', (req, res) => {
  console.log('login');
   res.send(JSON.stringify(req.body));
  login(req.body);
  res.sendStatus(200);
 
});

app.get('/logout', (req, res) => {
  console.log('logout');
  logout(req.body);
  res.sendStatus(200);
});

app.post('/add-cow', (req, res) => {
  console.log('add cow');
  createCow(req.body);
  res.sendStatus(200);
});

app.post('/add-milk', (req, res) => {
  console.log('add milk');
  createMilk(req.body);
  res.sendStatus(200);
});


app.get('/all-milks', async (req, res) => {
  console.log('all tasks');
  console.log(req.body);
  const allTasks = await getAllTasks(req.body);
  console.log('12');
  console.log(allTasks);
  res.send(JSON.stringify(allTasks));
});

app.get('/all-cows', async (req, res) => {
  console.log('all cows');
  console.log(req.body);
  const allCows = await getAllCows(req.body);
  console.log('12');
  console.log(allCows);
  res.send(JSON.stringify(allCows));
});



module.exports = app;
