var mysql = require('mysql');

    var connection = mysql.createConnection({
    host: 'sql105.epizy.com',
    user: 'epiz_21113631',
    password: 'leader01',
    database: 'epiz_21113631_books'
}),
  
connection.connect();

 connection.query("SELECT * FROM users", (err, rows, fields) => {
     console.log("I think we fetched users successfully")
     res.json(rows)
 })

