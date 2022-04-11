const express = require('express');
const passport = require('passport');
const router = express.Router();
const upload = require('../upload/upload.js');

var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user: 'root',
  password: 'qaplwsok01',
  database : 'movierecord'
});

router.get('/opt', function(req,res){
    var select_sql = "select movie_code as value, movie_name as text from tb_movie  order by movie_name asc";

    connection.query(select_sql,function(err,result){
        if(err) return res.json({value:'', text:'영화선택'});
        result.unshift({value:'', text:'영화선택'})
        return res.json(result);
    });
});


router.post('/add', function(req,res){

    
    var selct_sql = "select movie_code from tb_movie order by idx desc limit 0,1";
    connection.query(selct_sql,function(err,result){
       
        if(result.length>0){
            var movie_code = Number(result[0].movie_code.replace('M',''))+1;
            movie_code = String(movie_code);//문자열 변환
            movie_code = movie_code.length >= 9 ? movie_code:new Array(9-movie_code.length+1).join('0')+movie_code;//남는 길이만큼 0으로 채움
            movie_code = 'M'+movie_code;
        }
        else {
            var movie_code = "M000000001";
        }
        var sql = "insert into tb_movie(movie_code, movie_name) values ?"
        var values = [[movie_code, req.body.name]];
        
        connection.query(sql,[values], function(err,result){
            if(err) return res.json({ result :false, message:"영화 추가 오류"});
            
            return res.json({ result : true, message:"영화 추가 완료"});
        })
    });
    
    
});


router.post('/addwithimg', upload.single("file"), function(req,res,next){

    const {body, file} = req;
    
    var selct_sql = "select movie_code from tb_movie order by idx desc limit 0,1";
    connection.query(selct_sql,function(err,result){
       
        if(result.length>0){
            var movie_code = Number(result[0].movie_code.replace('M',''))+1;
            movie_code = String(movie_code);//문자열 변환
            movie_code = movie_code.length >= 9 ? movie_code:new Array(9-movie_code.length+1).join('0')+movie_code;//남는 길이만큼 0으로 채움
            movie_code = 'M'+movie_code;
        }
        else {
            var movie_code = "M000000001";
        }
        var sql = "insert into tb_movie(movie_code, movie_name,movie_img) values ?"
        var values = [[movie_code, body.name, file.destination+file.originalname]];
     
        connection.query(sql,[values], function(err,result){
            if(err) return res.json({ result :false, message:"영화 추가 오류"});
            
            return res.json({ result : true, message:"영화 추가 완료"});
        })
    });
    
    
});

module.exports = router;
