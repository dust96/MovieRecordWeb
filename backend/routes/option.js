const express = require('express');
const router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user: 'root',
  password: 'qaplwsok01',
  database : 'movierecord'
});

router.get('/movie', function(req,res){
    
    var select_sql = "select movie_code as value, movie_name as text from tb_movie  order by movie_name asc";

    connection.query(select_sql,function(err,result){
        if(err) return res.json({value:'', text:'영화선택'});
        result.unshift({value:'', text:'영화선택'})
        return res.json(result);
    });

});

router.get('/theater', function(req,res){
    
  var select_sql = "select theater_code as value, theater_name as text from tb_theater  order by theater_name asc";

  connection.query(select_sql,function(err,result){
      if(err) return res.json({value:'', text:'극장선택'});
      result.unshift({value:'', text:'극장선택'})
      return res.json(result);
  });
  
});

module.exports = router;
