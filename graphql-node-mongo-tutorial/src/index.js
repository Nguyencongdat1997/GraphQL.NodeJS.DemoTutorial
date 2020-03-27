var express = require('express');

var models = require("./models/models.js");
var userController = require("./controllers/userController.js");
var roleController = require("./controllers/roleController.js");

const startServer = async () => {  
	//Create app
	const app = express();

	//Register swagger
	//  1) Using expressOasGenerator to generate swagger tempate
	const expressOasGenerator = require('express-oas-generator');
	expressOasGenerator.init(
		app,
		function(spec) { return spec; },
		'swagger.json'		
	) // to overwrite generated specification's values use second argument.
	//  2) Using Swagger-ui-express to show to the Web UI
	var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../swagger.json');
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

	//Create router
	const router = require('express').Router();

	//Register apis
	app.get('/', function(req, res) {
		res.status(200).send('Hello world');
	});

	router.route('/users')
		.post(userController.createUser)
		.get(userController.getAllUsers);

	router.route('/users/:userId')
		.get(userController.getOneUser)
		.put(userController.updateUser)
		.delete(userController.deleteUser);

	router.param('userId', userController.getByIdUser);


	router.route('/roles')
		.get(roleController.getAllRoles);

	router.route('/roles/:roleId')
		.get(roleController.getOneRole);

	router.param('roleId', roleController.getByIdRole);
	
	app.use('/api/v1', router);

	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready`)
	);
};

startServer();