var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project-2-wayfarer");
var City = require('./city');
var Post = require('./posts');

module.exports.City = require('./city');
module.exports.Post = require('./posts');
