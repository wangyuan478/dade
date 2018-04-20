var express =require('express');
var router = express.Router();
var UserModel = require("../model/user");

router.get('/',function(req,res,next){
   var list = "我是lonin11页面";
   res.send(list);
});

router.post("/",function(req,res,next){
	var israg = false;
	UserModel.find({
		password:req.body.password,
		username:req.body.username
	},function(err,data){
			if(!err){
	          if(data.length==0){	          	
	          	res.send(israg);
			}else{
				req.session.kerwin =data[0]; //开辟空间存储 信息
				console.log(data)
				israg = true;
	          	res.send(israg);
			}
		    }
	})

})



module.exports = router;