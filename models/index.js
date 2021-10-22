// import all models
const Game = require("./Game");
const User = require("./User");
const Comment = require("./Comment");

// create associations
User.hasMany(Game, {
  foreignKey: "user_id",
});

Game.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Game, {
  foreignKey: "game_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Game.hasMany(Comment, {
  foreignKey: "game_id",
});

module.exports = { User, Game, Comment };
