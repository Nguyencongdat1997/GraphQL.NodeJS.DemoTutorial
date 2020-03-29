//'http://localhost:4000'

import express, { Request } from 'express';
import graphqlHTTP from 'express-graphql';
import { createSchema, CallBackendArguments } from 'swagger-to-graphql';

const app = express();

const pathToSwaggerSchema = `./swagger.json`;

// Define your own http client here
async function callBackend({
  context,
  requestOptions,
}: CallBackendArguments<Request>) {
  return 'Not implemented';
}

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
  