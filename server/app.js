var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var register = require('./routes/register');
var login = require('./routes/login');
//---------------自定义的路由-----------------------

//-------------连接数据库---------------------------------
var mongoose = require("mongoose");//第三方模块
mongoose.connect("mongodb://localhost:27017/dadi");
//-------------连接数据库---------------------------------
var session = require("express-session");//中间件

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//配置session-------------
app.use(session({
	name:"anNodeSessionId",
	secret:"frtrdtv",
	cookie:{maxAge:1000*3600},//一小时
	resave:true,
	saveUninitialized:true
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register111',register);
app.use("/login111",login);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
