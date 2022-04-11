const express = require('express');
const passport = require('passport');
const router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user: 'root',
  password: 'qaplwsok01',
  database : 'movierecord'
});


/* GET users listing. */
router.get('/',function(req,res,next){
    let month = req.query.month;
    let year = req.query.year;
    const usercode = req.query.usercode;
    if(req.query.month <10){
        month = '0' + String(month);
    }
    else {
        month = String(month);
    }
    let ilja = String(year) + String(month);
   
    var sql = "select * from tb_calendar_log where user_code=? and substr(ilja,1,6) =? ";
    connection.query(sql,[usercode,ilja],function(err,result){
        

        if(err) console.log('mysql error');
        
        if(result.length>0){
            let data = new Map();
            result.forEach(function(item,index){
                data.set(item.ilja, item);
            });

            return res.json({success:true, data:Array.from(data)});
        }
        else {
            return res.json({success:false, data:''});
        }
    })
})

router.post('/', function(req,res){

    const {user_code, form} = req.body;
   
    var sql = "insert into tb_calendar_log(user_code,ilja,movie_code,theater_code,viewing_start,viewing_end,hall_number,seat_row,seat_number,write_datetime) values ?"
    var values = [[user_code, form.ilja.replace(/\-/gi,""), form.movie, form.theater, form.viewing_start.replace(/\:/gi,""), 
    form.viewing_end.replace(/\:/gi,""), form.hall_number, form.seat.substring(0,1), form.seat.substring(1), new Date()]];

    
    connection.query(sql,[values], function(err,result){
       
        if(err) return res.json({ result :false, message:"기록 추가 오류"});
        
        return res.json({ result : true, message:"기록 추가 완료"});
    });
    
    
});

module.exports = router;
