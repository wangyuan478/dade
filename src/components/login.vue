<template>
	<div id="login">
		<div class="login-header">
		<h3>手机登陆</h3>
		</div>
		<div class="login-body">
			<div id="login-tabs">
				<ul class="login-tabs-nav">
					<li v-for="data,index in loginway"><a href="#" :class="currentIndex==index?'active':''"  @click="handleClick(index)" :key="index">{{data}}</a></li>					
				</ul>
				<div class="login-tabs-bd" v-show="isShow" :key="0">
					<div class="login-tabs-panel">
						<div class="login-tabs-phone">
							<input  v-model="telNum" type="text" placeholder="请输入手机号" />
						</div>
						<div class="login-tabs-validate">
							<input  v-model="password1" type="text" id="txt-yzm" placeholder="请输入密码" />
						</div>
						
					</div>
					<div class="btn-dl" @click="loginBtn1">
					   登陆
				    </div>
				</div>
				<div class="login-tabs-bd" v-show="!isShow" :key="1">
					<div class="login-tabs-panel">
						<div class="login-tabs-phone">
							<input v-model="userName" type="text" placeholder="请输入用户名" />
						</div>
						<div class="login-tabs-phone">
							<input v-model="password2" type="text" placeholder="请输入密码" />
						</div>
					</div>
					<div class="btn-dl" @click="loginBtn2">
					      确定
				    </div>
				</div>				
				<div class="login-zc"><router-link to="/register" tag="a" >快速注册</router-link></div>
				<div class="errmessage" v-show="err">
				<span>{{errspan}}</span>
			    </div>
			</div>
		</div>
	</div>
	
</template>
<script>
import axios from "axios";
export default {

  name: 'login',

  data () {
    return {
		ischoice:true,
		loginway:["手机登录","用户名登录"],
		currentIndex:0,
		isShow:true,
		telNum:'',
		userName:'',
		password1:'',
	    password2:'',
		errspan:"",
		err:false
    }
  },
  methods:{
  	handleClick:function(index){
		this.currentIndex = index;
		if(this.currentIndex == 0){
			this.isShow = true;
		}
		if(this.currentIndex == 1){
			this.isShow = false;
		}
  	},
  	loginBtn1:function(){
	  	var telnum = this.telNum;
	  	var password = this.password1;
  		if(/^1[3|5|7|8][0-9]\d{4,8}$/.test(this.telNum)&&/^[A-Za-z0-9]{6,20}$/.test(this.password)){ 		    
		axios.post('/login111',{
			telnum,
			password
	  	}).then((res)=>{
	  		console.log(res);
	  		if(res.data==false){
	  			this.err = true;
	  			this.errspan="手机号或者密码错误，请重新登陆";
	  			console.log("登陆失败");
	  			
	  		}else{
	  			this.err = true;
	  			this.errspan="登陆成功";
	  			setTimeout(()=>{
				  this.$router.push("/home")
				},1500)
	  		}
	  	}).catch(function(err){
	  		console.log(err);
	  	})
  	}
  		},
  		loginBtn2:function(){
  			var username = this.userName;
	  	    var password = this.password2;
  			if(/^[\u4E00-\u9FA5]{1,5}$/.test(this.userName)&&/^[A-Za-z0-9]{6,20}$/.test(this.password2)){
  				console.log("222");
  			axios.post('/login11',{
			username,
			password
		  	}).then((res)=>{
		  		console.log(res);
		  		if(res.data==false){
		  			this.err = true;
		  			this.errspan="用户名或者密码错误，请重新登陆";
		  			console.log("登陆失败");
		  			
		  		}else{
		  			this.err = true;
		  			this.errspan="登陆成功";
		  			setTimeout(()=>{
					  this.$router.push("/home")
					},1500)
		  		}
		  	}).catch(function(err){
		  		console.log(err);
		  	})
  		}
  		}
  		
   
  }
  
}
</script>
<style type="text/css">
	body,ul,li,h3,input{
		margin: 0;
		padding: 0;
	}	
	.login-header{
		position: fixed;
	    top: 0;
	    width: 100%;
	    height: 43px;
	    border-bottom: 1px solid #dedede;
	    background-color: #fff;
	}	
	.login-header h3{
		margin: 0 40px;
		font-size: 1.8rem;
	    font-weight: 700;
	    line-height: 43px;
	    text-align: center;
	    color: #333;
	    display: block;
	    word-wrap: normal;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.login-body{		
		border: none;
		background: #fcfcfc;
		margin: .35em  .625em .75em;
	}	
	.login-tabs-nav{
		width: 100%;		
	    padding: 0;
	    margin: 0;
	    list-style: none;
	    text-align: center;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	}
	.login-tabs-nav li{
		width: 50%;
		height: 42px;
		-webkit-box-flex: 1;
		flex: 1;
		position: relative;
	    background-color: #eeeeee;	    
	    box-sizing: border-box;
	    line-height: 42px;       
        
	    
	}
	.active{
		position: relative;
		border-bottom: 2px solid #62d399;
		color: #62d399;
		background: #fcfcfc;
		height: 42px;
		-webkit-box-flex: 1;
		flex: 1;
	}
	.login-tabs-nav li a{
		text-decoration: none;
		color: #222;
		font-size: 16px;
        display: block;
	    word-wrap: normal;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.login-tabs-bd{
		height: 150px;
		padding-top: 20px;
	    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	    border-left: 1px solid #dddddd;
	    border-right: 1px solid #dddddd;
	    border-bottom: 1px solid #dddddd;
	}
	.login-tabs-panel{
	    position: relative;
	    visibility: visible;
	    top: 0;
	    float: left;
	    width: 100%;
	    padding: 10px 10px 15px;  
	    box-sizing: border-box;                        
	}
	.login-tabs-phone{
		margin-bottom: 1.5rem;	
	}
	.login-tabs-phone input{
		display: block;
	    width: 100%;
	    padding: .625em;
	    line-height: 1.2;
	    color: #555;
	    vertical-align: middle;
	    background-color: #fff;
	    background-image: none;
	    border: 1px solid #ccc;
	    border-radius: 2px;
	    -webkit-appearance: none;
	    font-size: 1.8rem;
	    box-sizing: border-box;
	}
	.login-tabs-validate{
		margin-bottom: 1.5rem;
		
	}
	#txt-yzm{
		float: left;
		display: block;
	    width: 100%;
	    padding: .625em;
	    line-height: 1.2;
	    color: #555;
	    vertical-align: middle;
	    background-color: #fff;
	    border: 1px solid #ccc;
	    border-radius: 2px;
	    -webkit-appearance: none;
	    font-size: 1.8rem;
	    box-sizing: border-box;
	}
	.btn-dl{
	    margin-top: 163px;
		background-color: #62d399;
	    color: #fff;
	    border-color: #62d399;
		display: block;
	    padding-left: 0;
	    padding-right: 0;
	    font-size: 1.8rem;
	    margin-bottom: 0;
	    padding: .625em 1em;
	    vertical-align: middle;
	    font-weight: 400;
	    line-height: 1.2;
	    text-align: center;
	    white-space: nowrap;
	    border: 1px solid transparent;
	    border-radius: 2px;
	    cursor: pointer;
	    outline: 0;
	    -webkit-appearance: none;
	}
	.login-zc{
		float: right;
		font-size: 1.5rem;
		margin-top: 6.5rem;
		margin-right: 1rem;
		cursor: pointer;		
	}
	.login-zc a{
		text-decoration:none;
	
	}
	.login-tabs-yzm{
		margin-bottom: 1.5rem;
	}
	#txt-yzm2{
	display: block;
    padding: .625em;
    font-size: 1.8rem;
    line-height: 1.2;
    color: #555;
    vertical-align: middle;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    -webkit-appearance: none;
	}
	.errmessage{
		margin-top: 9rem;
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		background: red;
		opacity: 0.3;
		border-radius: 1rem;
	}
	.errmessage span{

		font-size:2rem ;
		text-align: center;
		color: white;
	}
</style>