var utils = require('./utils');

var objectIdCounter = 1;
var messages = [
  // Note: an initial message is useful for debugging purposes.
  
  {
    text: 'hello world',
    username: 'fred',
    objectId: objectIdCounter
  }
  
];

var actions = {
  'GET': function(request, response) {
    utils.sendResponse(response, {results: messages});
  },
  'POST': function(request, response) {
    
    var message = request.body;
    message.objectId = ++objectIdCounter;
    messages.push(message);
    utils.sendResponse(response, {objectId: message.objectId}, 201);

  },
  'OPTIONS': function(request, response) {
    utils.sendResponse(response, null);
  }
};

exports.requestHandler = utils.makeActionHandler(actions);
