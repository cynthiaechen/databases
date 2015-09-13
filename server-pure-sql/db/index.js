var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

module.exports.queryMessages = function(queryString, queryArgs, callback){

  module.exports.dbConnection.query(queryString, queryArgs, function(err, results) {
    if(err) {throw err;}
    else{
      callback(results);
    }
  });

};