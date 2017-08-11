var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://<heyjulieh@gmail.com>:<Rotten1!>@ds033143.mlab.com:33143/heroku_12xmzgqj");
var City = require('./city');
var Post = require('./posts');

module.exports.City = require('./city');
module.exports.Post = require('./posts');
