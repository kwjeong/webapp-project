var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var session = require('express-session');
var mongoose = require('mongoose');
var moment = require('moment-timezone');

var app = express();
var port = process.env.PORT || 3000;
var db = mongoose.connection;
  db.on('error', console.error);
  db.once('open', function(){
      console.log("Connected to mongod server");
  });
  mongoose.connect('mongodb://localhost:27017/missiondb');

var index = require('./routes/index');
var compiler = require('./routes/compiler');
var login = require('./routes/login');
var main = require('./routes/main');
var upload = require('./routes/upload');
var users = require('./routes/users');
var chat = require('./routes/chat');

var Chat = require('./models/chat_model');

app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '!@#my_goorm_ide321',
  resave: false,
  saveUninitialized: true
}));

app.use('/', index);
app.use('/compiler', compiler);
app.use('/login', login);
app.use('/main', main);
app.use('/upload', upload);
app.use('/users', users);
app.use('/signup', users);
app.use('/chat', chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.set('server', server);

var io = require('socket.io').listen(server);
var user_list = [];
var socket_list = {};
io.sockets.on('connection', function (socket) {
  socket.on('connected_user_name', function (data) {

    /* 접속 중인 사용자 목록 구해서 업데이트 하도록 구현 */

    io.emit('update_user_list', { user_list: user_list });
  });
 
  socket.on('send_msg', function (data) {

    /* 채팅 전송 버튼을 눌렀을 때 대상(전체/귓속말)을 구분하여 전달하고 db에 저장 구현 */
	
  });
	
  socket.on('disconnect', function () {
    /* 사용자가 떠났을 때 구현 */
  });
	
});

