var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

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

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req,next)
  res.render('index', { title: 'Express' });
  // res.sendFile(path.join(__dirname, '../public', 'index.html'));
});



module.exports = router;
