var models = require("../models/models.js");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graphql_node_mongoose_1', function (err) {
    if (err) {
      console.log('Database unsuccessfully connected');  
    }   
    console.log('Database successfully connected');  
  });


var createUser = function (req, res, next) {  
  var user = new models.User({
    _id: new mongoose.Types.ObjectId(),
    name: {
      firstName: req.body.name.firstName,
      lastName: req.body.name.lastName,
    },
    role : req.body.role
  });

  user.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(user);
    }
  });
};

var updateUser = function (req, res, next) {
  var id = req.params.userId;
  models.User.findByIdAndUpdate(id, req.body, {new: true}, function (err, user) {
    if (err) {
      next(err);
    } else {
      res.json(user);
    }
  });
};

var deleteUser = function (req, res, next) {
  req.user.remove(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(req.user);
    }
  });
};

var getAllUsers = function (req, res, next) {
  models.User.find(function (err, users) {
    if (err) {
      next(err);
    } else {
      res.json(users);
    }
  });
};

var getOneUser = function (req, res) {
  res.json(req.user);
};

var getByIdUser = function (req, res, next, id) {
  models.User.findOne({_id: id}, function (err, user) {
    if (err) {
      next(err);
    } else {
      req.user = user;
      next();
    }
  });
};

//Export
module.exports = {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    getAllUsers: getAllUsers,
    getOneUser: getOneUser,
    getByIdUser: getByIdUser,
};
