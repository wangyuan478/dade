var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var obj = {
	telnum:Number,
	password:String
}

var model = mongoose.model("uesr",new Schema(obj));
module.exports = model;