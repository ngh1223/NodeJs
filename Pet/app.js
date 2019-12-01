var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');
var memberRouter = require('./server/routes/member');
var adoptRouter = require('./server/routes/adopt');

const models = require('./models/index.js');
const session = require('express-session');


models.sequelize.sync().then(() => {
    console.log(" DB connection success");
}).catch(err => {
    console.log("DB connection fail");
    console.log(err);
});

var app = express();
app.use(session({
    key: 'sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
    }
}));
// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');
// static files
app.use(express.static(path.join(__dirname, './client')));
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/member', memberRouter);
app.use('/adopt', adoptRouter);


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

app.set('port', process.env.PORT || 3002);

var server = app.listen(app.get('port'), function () {
    console.log('Express server Listening on port' + server.address().port);
})