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

/* GET users listing. */


router.post('/',function(req,res){
  const user = {
    'userid':req.body.user.id,
    'password':req.body.user.password
  };

  connection.query('select * from tb_user where user_id ="'+user.userid+'"', function(err, row){
    if(err){

      res.json({
        success:false,
        message : "login fail"
      })
    }
    res.json({
        success : true,
        message : "login successful"
      }
    );

    // if(row[0] != undefined && row[0].user_id === user.userid){
    //   bcrypt.compare(user.password, row[0].user_pw, function(err, res2){
    //     if(res2){
    //       res.json({
    //         success : true,
    //         message : "login successful"
    //       })
    //     }
    //     else{
    //       res.json({
    //         message : "login failed"
    //       })
    //     }
    //   })
    // }
  })
})

module.exports = router;
