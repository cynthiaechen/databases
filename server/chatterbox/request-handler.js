var utils = require('./utils');
var query = require('../db/index.js');
var dateFormat = require('dateformat');
var objectIdCounter = 1;

var actions = {
  'GET': function(request, response) {
    //get messages from DB
    var queryString = 'SELECT m.message, u.name, m.id, m.timeCreated \
                       FROM messages m INNER JOIN users u \
                       ON m.userId = u.id;';
    var queryArgs = [];
    query.queryMessages(queryString, queryArgs, function(messages){
      utils.sendResponse(response, {results: messages});
    });

  },
  'POST': function(request, response) {
    var message = request.body;
    console.log(message);//username & text
    //REPLACE INTO users VALUES (##ID##,name)
    var queryString = 'INSERT INGORE INTO users VALUES (2,?); ';
    //                     INSERT INTO messages (message,timeCreated,userId,roomId) \
    //                     values (?,?,?,?);';
    var date = new Date();
    date = dateFormat(date, "yyyy-mm-dd h:MM:ss");
    var queryArgs = [message.username];//, message.text, date.toString(), 1, 1];
    query.queryMessages(queryString, queryArgs, function(messages){
      utils.sendResponse(response, {results: messages});
    });
    // utils.sendResponse(response, {id: message.id}, 201);

  },
  'OPTIONS': function(request, response) {
    utils.sendResponse(response, null);
  }
};

exports.requestHandler = utils.makeActionHandler(actions);
