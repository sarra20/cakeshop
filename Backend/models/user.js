const mongoose= require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{type:String,unique:true},
    pwd:String
});
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
const user=mongoose.model("User",userSchema);
module.exports=user;