var utils = require('./utils');
var query = require('../db/index.js');

var actions = {
  'GET': function(request, response) {
    //get messages from DB
    query.queryMessages(queryString, queryArgs, function(messages){
      utils.sendResponse(response, {results: messages});
    });

  },
  'POST': function(request, response, queryString, queryArgs) {

    query.queryMessages(queryString, queryArgs, function(messages){
      utils.sendResponse(response, {results: messages});
    });

  },
  'OPTIONS': function(request, response) {
    utils.sendResponse(response, null);
  }
};

exports.requestHandler = utils.makeActionHandler(actions);
