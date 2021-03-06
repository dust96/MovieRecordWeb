var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const history = require('connect-history-api-fallback');




/*============mysql 연동===================== */

var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user: 'root',
  password: 'qaplwsok01',
  database : 'movierecord'
});

connection.connect(function(err){
  if(err){
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
});

/*============mysql 연동===================== */

/*============세션===================== */
var session = require('express-session');
var passport = require('passport');
require('./passport').config(passport);
require('dotenv').config();
/*============세션===================== */




/*============라우터===================== */
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var calendarRouter = require('./routes/calendar');
var movieRouter = require('./routes/movie');
var optionRouter = require('./routes/option');
/*============리우터===================== */

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*============세션===================== */
app.use(cookieParser());
app.use(session({
  resave : false,
  saveUninitialized : true,
  secret:'keyboard',
  cookie:{
    httpOnly:true
  }
}));
app.use(passport.initialize());
app.use(passport.session());

/*============세션===================== */
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });


/*============라우터===================== */
app.use('/', indexRouter);
app.use('/api/login',loginRouter);
app.use('/api/calendar',calendarRouter);
app.use('/api/movie',movieRouter);
app.use('/api/option',optionRouter);

app.use(history()); //새로고침/뒤로가기 404 에러 방지
app.use(express.static(path.join(__dirname, 'public')));

/*============라우터===================== */

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
