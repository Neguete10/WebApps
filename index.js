var mysql = require('mysql');
//import * as indexHtml from  './index.html'
//let counter = 0;

var con = mysql.createConnection({  
host: "recruiters.cyoeeorjxg6q.us-east-2.rds.amazonaws.com",  
user: "admin",  
password: "mydatabase",  
database: "recruiters"  
});  

con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  



var sql = "INSERT INTO recruiters (recid, fname, lname, phone, email) VALUES ('2672498', 'Henrique', 'Lima', '937-919-4413', 'henriquemlima@hotmail.com')";  
con.query(sql,function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
})


})