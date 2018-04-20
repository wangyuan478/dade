var express = require('express');
var router = express.Router();
var UserModel = require("../model/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
	var list = [1,2,3,4];
   res.send(list);
});
router.post('/', function(req, res, next) {
	var isrepct = false;
	UserModel.find({
		telnum:req.body.telnum,
	},function(err,data){
		if(data.length==0){
			UserModel.create({
			telnum:req.body.telnum,
			password:req.body.password,
			username:req.body.username
		},function(err,data){
			if(!err){
	            isrepct = true;
	            res.send(isrepct);
			}
		})
		}else{
			isrepct = false;
	        res.send(isrepct);
		}
	})
  
   
});

module.exports = router;