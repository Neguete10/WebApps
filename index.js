var mysql = require('mysql');
import * as indexHtml from  './index.html'
let counter = 0;

var con = mysql.createConnection({  
host: "recruiters.cyoeeorjxg6q.us-east-2.rds.amazonaws.com",  
user: "admin",  
password: "mydatabase",  
database: "recruiters"  
});  

con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  



var sql = "INSERT INTO recruiters (recid, fname, lname, phone, email) VALUES (?,?,?,?,?)";  
con.query(sql, [counter++, indexHtml.info[0], indexHtml.info[1], indexHtml.info[2], indexHtml.info[3]],function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
})


})