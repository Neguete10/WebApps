var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.recruiters.cyoeeorjxg6q.us-east-2.rds.amazonaws.com,
  user     : process.env.admin,
  password : process.env.mydatabase,
  port     : process.env.3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');

  var sql =
    "INSERT INTO recruiters (recid, fname, lname, phone, email) VALUES ('2672498', 'Henrique', 'Lima', '937-919-4413', 'henriquemlima@hotmail.com')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

});

connection.end();