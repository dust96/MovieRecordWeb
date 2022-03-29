const LocalStrategy = require('passport-local').Strategy;
// const users = ('../data/users.json');
// const connection = ('../DBconnection/conn.js');

const mysql = require('mysql');

const connection = mysql.createConnection({
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



exports.config = (passport) => {

    
    passport.serializeUser((user,done)=>{
        done(null, user);
    });

    passport.deserializeUser((user,done)=>{

        done(null, user);
    });



    passport.use(new LocalStrategy({
            usernameField:'id',
            passwordField:'password',
            session:false
        },(id,password, done)=>{
            
            var sql = "select user_code,user_name, master from tb_user where user_id=? and user_pw =? and buse='1'";
            connection.query(sql,[id,password],function(err,result){
                
                if(err) console.log('mysql error');
               
                if(result.length>0){
                    return done(null, result[0],{message:"로그인 성공"})
                }
                else {
                    return done(null, false, {message:"가입되지 않은 회원"})
                }
            })
            
        }
    ));
}