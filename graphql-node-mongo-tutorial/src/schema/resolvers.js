var models = require("../models/models.js");
var mongoose = require('mongoose');
var ObejctId = mongoose.Schema.Types.ObjectId;

var resolvers = {

    Query: {
        hello: () => "hi",
        users: async (parent, args, context, info) => {
            var users = models.User.find(function (err, users) {        
                if (err) {
                    return [];
                } else {
                    return users;
                }
            });      
            return users;
        },
        user: async (parent, args, context, info) => {
            var user = models.User.findOne({_id: args._id}, function (err, user) {
                if (err) {
                    return null;
                } else {
                    return user;
                }
            });
            return user;
        },
        roles: async (parent, args, context, info) => {
            var roles = models.Role.find(function (err, roles) {        
                if (err) {
                    return [];
                } else {
                    return roles;
                }
            });      
            return roles;
        },
        role: async (parent, args, context, info) => {
            return  models.Role.findOne({_id: args._id});
        }
    },

    Mutation: {
        createUser: async (_, { name, role }) => {
            const newUser = new models.User({
                                                _id: new mongoose.Types.ObjectId(),
                                                name: {
                                                    firstName: name.firstName,
                                                    lastName: name.lastName,
                                                },
                                                role : role._id
                                            });
            await newUser.save();
            return newUser;
        }
    },

    User: {
        role: async (parent) => {
            return  models.Role.findOne({_id: parent.role});
        }
    },
};


//Export
module.exports = resolvers;
