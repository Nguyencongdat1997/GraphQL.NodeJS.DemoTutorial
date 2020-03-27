var mongoose = require('mongoose');
var models = require("./models/models.js")

mongoose.connect('mongodb://localhost/graphql_node_mongoose_1', function (err) {
    if (err) {
    	console.log('Database unsuccessfully connected');  
    }  	
    console.log('Database successfully connected');  
});

//Initialize DB -create Roles
var managerRole = new models.Role({
	_id: new mongoose.Types.ObjectId(),
	title: 'The Great Manager'
});
managerRole.save(function(err) {
	if (err) {
    	console.log('1 Role unsuccessfully saved: managerRole');  
    } 
	console.log('1 Role successfully saved: managerRole');
});

var iosRole = new models.Role({
     _id: new mongoose.Types.ObjectId(),
     title: 'Master IOS'
});

iosRole.save(function(err) {
	if (err) {
    	console.log('1 Role unsuccessfully saved: iosRole');  
    } 
	console.log('1 Role successfully saved: iosRole');
});

var androidRole = new models.Role({
     _id: new mongoose.Types.ObjectId(),
     title: 'Master Android'
});

androidRole.save(function(err){
	if (err) {
    	console.log('1 Role unsuccessfully saved: androidRole');  
    } 
	console.log('1 Role successfully saved: androidRole');
});


