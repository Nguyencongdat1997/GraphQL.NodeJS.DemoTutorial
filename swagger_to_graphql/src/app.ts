import express from 'express';
import graphqlHTTP from 'express-graphql';
import { callBackend } from './node-fetch';
import { createSchema } from 'swagger-to-graphql';

const app = express();

const pathToSwaggerSchema = `./swagger.json`;

createSchema({
  swaggerSchema: pathToSwaggerSchema,
  callBackend,
})
  .then(schema => {
    app.use(
      '/graphql',
      graphqlHTTP(() => {
        return {
          schema,
          graphiql: true,
        };
      }),
    );

    app.listen(3009, 'localhost', () => {
      console.info('http://localhost:3009/graphql');
    });
  })
  .catch(e => {
    console.log(e);
  });