var models = require('../models');
var requestHandler = require('../chatterbox/request-handler');

module.exports = {
  messages: {
    get: function (req, res) {
      requestHandler.requestHandler(req,res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      requestHandler.requestHandler(req,res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

