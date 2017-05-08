var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project-2");
var City = require('./city');
var Post = require('./post');

module.exports.City = require('./city');
module.exports.Post = require('./post');
