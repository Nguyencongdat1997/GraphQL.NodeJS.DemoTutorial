var models = require("../models/models.js");

var resolvers = {
  Query: {
    hello: () => "hi"
  }
};


//Export
module.exports = resolvers;
