var userController = require("../controllers/userController.js");
var roleController = require("../controllers/roleController.js");


var registerAPIs = (app, router) => {
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
}

module.exports = {
    registerAPIs: registerAPIs,
};

