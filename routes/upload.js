/* 모듈 */
var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
var fs = require('fs');
var tar = require('tar-fs');
var unzip = require('unzip');
var path = require('path');

var user_directory = '';
router.use(function (req, res, next){
  if (!req.session.user) return res.redirect('/login');
  user_directory = __dirname + '/../uploads/' + req.session.user.user_id;
  dir_check();
  next();
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, user_directory);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({
  storage: storage,
  limits: { fieldSize: 104857600 }
});

/* 라우팅 */

// 특정 파일의 내용
router.get('/uploded_file', function(req, res, next) {
  var file_name = req.query.file_name;
  /* 로직 구현 */
  res.send(/* data */);
});

// 업로드 된 파일 목록
router.get('/uploded_files', function(req, res, next) {
  /* 로직 구현 */
  res.send({/* data */});
});

// 압축파일 업로드
router.post('/', upload.any(), function(req, res, next) {
  /* 로직 구현 */
  res.send(/* data */);
});

// 파일 저장
router.put('/', function(req, res, next) {
  var file_name = req.body.file_name;

  /* 로직 구현 */
  res.send(/* data */);
});

module.exports = router;