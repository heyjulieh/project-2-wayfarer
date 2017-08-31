var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project-2");

module.exports.City = require('./city');
module.exports.Posts = require('./posts');
