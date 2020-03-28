var express = require('express');
var routerRegistor = require("./routers/routerRegistor.js");


const startServer = async () => {  
	//Create app
	const app = express();

	//Register swagger
	/*
	//  1) Using expressOasGenerator to generate swagger tempate. 
	//     Note: Uncomment this lines for running in the 1st time. Keep this lines in the later running will reset the manually-fixed swagger.json
	const expressOasGenerator = require('express-oas-generator');
	expressOasGenerator.init(
		app,
		function(spec) { return spec; },
		'swagger.json'		
	) // to overwrite generated specification's values use second argument.
	*/
	//  2) Using Swagger-ui-express to show to the Web UI
	var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../swagger.json');
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

	//Create router
	const router = require('express').Router();

	//Register apis
	routerRegistor.registerAPIs(app, router);		
	
	//Register body-parser
	var bodyParser = require('body-parser')
	// 	 for parsing application/json
	app.use(bodyParser.json()); 
	// 	 for parsing application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true })); 

	app.use('/api/v1', router);
	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready`)
	);
};

startServer();