var models = require('../models');
var requestHandler = require('../chatterbox/request-handler');
var dateFormat = require('dateformat');

module.exports = {
  messages: {
    get: function (req, res) {
      var queryString = 'SELECT m.message, u.username, m.id, m.timeCreated, r.roomname \
                       FROM messages m INNER JOIN users u \
                       ON m.userId = u.id \
                       INNER JOIN rooms r \
                       ON m.roomId = r.id;';
      var queryArgs = [];
      requestHandler.requestHandler(req, res, queryString, queryArgs);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body;
      var queryString = 'INSERT INTO messages (message,timeCreated,userId,roomId) \
                         values (?,?,?,?);';
      var date = new Date();
      date = dateFormat(date, "yyyy-mm-dd h:MM:ss");
      var queryArgs = [message.message, date.toString(), 1, 1];
      requestHandler.requestHandler(req,res, queryString, queryArgs);
    } // a function which handles posting a message to the database
  },

  users: {

    get: function (req, res) {
    },
    post: function (req, res) {
      var queryString = 'INSERT IGNORE INTO users (username) VALUES (?);';
      var queryArgs = [req.body.username];
      requestHandler.requestHandler(req,res, queryString, queryArgs);

    }
  }
};

