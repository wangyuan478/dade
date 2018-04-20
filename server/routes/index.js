var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  if(req.session.kerwin){
  	res.render('index', { currentUser:req.session.kerwin.telnum });
  	res.render('index', { currentUser:req.session.kerwin.username });
  }else{
  	res.redirect("/login");
  }	
  
});

router.get("/logout",function(req,res){

	req.session.destroy(function(error,data){
		if(!error){
			res.redirect("/login");
		}
	})

})
module.exports = router;
