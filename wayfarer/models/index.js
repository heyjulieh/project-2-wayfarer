var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project-2");
var City = require('./city');
var Posts = require('./posts');

module.exports.City = require('./city');
module.exports.Posts = require('./posts');
