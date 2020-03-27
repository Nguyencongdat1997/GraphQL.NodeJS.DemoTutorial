
const startServer = async () => {
  var express = require('express');
  const app = express();

  app.get('/', function(req, res) {
    res.status(200).send('Hello world');
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready`)
  );
};

startServer();