var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var Message = sequelize.define('Message', {
  userid: Sequelize.INTEGER,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

// var Room = sequelize.define('Room', {
//   roomname: Sequelize.STRING
// });

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();
// Room.sync();

module.exports.User = User;
module.exports.Message = Message;
// module.exports.Room = Room;
