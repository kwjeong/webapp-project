var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var path = require('path');
var fs = require('fs');

var user_directory = '';
router.use(function (req, res, next){
  if (!req.session.user) return res.redirect('/login');
  /* 전처리 구현 () */
  next();
});

// 파일을 컴파일&실행하고 결과 반환
router.get('/:file_name', function(req, res, next) {
  var file_path = __dirname + '/../uploads/' + req.session.user.user_id + '/';
  var file_name = req.params.file_name;

  /* 구현 */
  /* Hint - 리눅스 커맨드 실행은 child_process 모듈을 참고 */
	
  res.send({/* 데이터 */});
});

module.exports = router;