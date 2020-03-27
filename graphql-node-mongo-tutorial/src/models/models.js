var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graphql_node_mongoose_1', function (err) {
    if (err) {
      console.log('Database unsuccessfully connected');  
    }   
    console.log('Database successfully connected');  
  });

//Define Schemas
var roleSchema = mongoose.Schema({
    _id: { type: mongoose.SchemaTypes.ObjectId, required: true, index: true },
    title: String
});

var userSchema = mongoose.Schema({
    _id: { type: mongoose.SchemaTypes.ObjectId, required: true, index: true },
    name: {
        firstName: String,
        lastName: String
    },
    role: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role'
     }
 });

//Define Models
const Role = mongoose.model('Role', roleSchema);
const User = mongoose.model('User', userSchema);


//Export
module.exports = {
    Role: Role,
    User: User,
};

