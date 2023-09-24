var mysql = require('mysql')

var con = mysql.createConnection({
  username = 'epiz_21113631',
  password = 'leader01',
  dbname = 'epiz_21113631_books',
  dbhost = 'sql105.epizy.com',
})

con.connect(function(err) {
  if (err) throw err
  console.log('Connected!')
})
