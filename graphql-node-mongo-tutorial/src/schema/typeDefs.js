var { ApolloServer, gql } = require('apollo-server-express');

var typeDefs = gql`
  type Query {
    hello: String!
    
  }

`;

//Export
module.exports = typeDefs;

