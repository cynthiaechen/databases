var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({include: [db.User]}).success(function(err, results){
        res.json(results);
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}}).then(function(user){
        db.Message.create({
          message: req.body.message,
          userId: user.id,
          roomname: req.body.roomname
        }).then(function(message) {
          res.sendStatus(201);
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
       db.User.findAll()
        .then(function(err, users){
        res.json(users);
      });

    },
    post: function (req, res) {
      db.User.create({username: req.body.username})
        .then(function(user) {
        res.sendStatus(201);
      });
    }
  }
};

