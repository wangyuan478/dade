var express =require('express');
var router = express.Router();
var UserModel = require("../model/user");

router.get('/',function(req,res,next){
   var list = "我是login111页面";
   res.send(list);
});

router.post("/",function(req,res,next){
	var istag = false
	UserModel.find({
		telnum:req.body.telnum,		
		password:req.body.password,
	},function(err,data){
			if(!err){
	          if(data.length==0){	          	
	          	res.send(istag);
			}else{
				req.session.kerwin =data[0]; //开辟空间存储 信息
				console.log(data);
				
				istag = true;
	          	res.send(istag);
			}
		    }
	})

})



module.exports = router;