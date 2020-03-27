var models = require("../models/models.js");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graphql_node_mongoose_1', function (err) {
    if (err) {
      console.log('Database unsuccessfully connected');  
    }   
    console.log('Database successfully connected');  
  });

var createRole = function (req, res, next) {
  var role = new models.Role({
    _id: new mongoose.Types.ObjectId(),
    name: {
      firstName: req.body.name.firstName,
      lastName: req.body.name.lastName,
    }
  });

  role.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(role);
    }
  });
};

var updateRole = function (req, res, next) {
  models.Role.findByIdAndUpdate(req.body._id, req.body, {new: true}, function (err, role) {
    if (err) {
      next(err);
    } else {
      res.json(role);
    }
  });
};

var deleteRole = function (req, res, next) {
  req.role.remove(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(req.role);
    }
  });
};

var getAllRoles = function (req, res, next) {
  models.Role.find(function (err, roles) {
    if (err) {
      next(err);
    } else {
      res.json(roles);
    }
  });
};

var getOneRole = function (req, res) {
  res.json(req.role);
};

var getByIdRole = function (req, res, next, id) {
  models.Role.findOne({_id: id}, function (err, role) {
    if (err) {
      next(err);
    } else {
      req.role = role;
      next();
    }
  });
};

//Export
module.exports = {
    createRole: createRole,
    updateRole: updateRole,
    deleteRole: deleteRole,
    getAllRoles: getAllRoles,
    getOneRole: getOneRole,
    getByIdRole: getByIdRole,
};
