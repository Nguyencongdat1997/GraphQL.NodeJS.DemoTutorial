var { ApolloServer, gql } = require('apollo-server-express');

var typeDefs = gql`
    type Query {
        hello: String!
        role(_id: ID!): Role
        roles: [Role]!
        user(_id: ID!): User
        users: [User]!
    
    }

    type Mutation {
        createUser(name: InputCreateUser_UserName!, role: InputCreateUser_Role!): User!
    }  

    type Role{
        _id: ID!
        title: String
    }

    type User {
        _id: ID!
        name: UserName!
        role: Role!
    }
    type UserName{
        firstName: String!
        lastName: String!
    }
    input InputCreateUser_Role{
        _id: ID!
    }
    input InputCreateUser_UserName{
        firstName: String!
        lastName: String!
    }

`;

//Export
module.exports = typeDefs;

