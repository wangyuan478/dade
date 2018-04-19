<template>
	<div id="register">
		<div class="register-header">
		<h3>注册</h3>
		</div>
		<div class="register-body">
			<ul class="register-input">
			<li><input @change="changetel" v-model="telNum" type="text"  class="register-txt" value="" placeholder="请输入手机号" /></li>
			<li><input @change="changePassword1" v-model="password1" type="text"  class="register-txt" value="" placeholder="密码"/></li>
			<li><input @change="changePassword2" v-model="password2" type="text"  class="register-txt" value="" placeholder="确认密码"/></li>			
			</ul>
			<div @click="registerBtn" class="btn-zc">
				注册
			</div>
			<div class="register-dl">
				<router-link to="/login" tag="a" >已有账号，去登陆</router-link>
			</div>
			<div class="errmessage" v-show="err">
				<span>{{errspan}}</span>
			</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
import axios from "axios";

	export default{
		
		name:'register',
		

		data () {
		    return {
				telNum:'',
				password1:'',
				password2:'',
				isTel:false,
				isPassword:false,
				isSame:false,
				errspan:'',
                err:false
		    }
		},
		methods:{
			
			changetel:function(){
				var regex= /^1[3|5|7|8][0-9]\d{4,8}$/;
				if(regex.test(this.telNum)){
					this.isTel = true;
					this.err = false;
				}else{
					this.isTel=false;
					this.err=true
					this.errspan="请输入11位手机号";
					console.log("请输入11位手机号");
				}
			},
			changePassword1:function(){
				var reg = /^[A-Za-z0-9]{6,20}$/;
				if(reg.test(this.password1)){
					this.isPassword = true;
					this.err = false;
				}else{
					this.isPassword = false;
					this.err=true
					this.errspan="请输入6-20位字母数字组合";
					console.log("请输入6-20位字母数字组合");
				}
			},changePassword2:function(){
				if(this.password2==this.password1){
					this.isSame = true;
					this.err = false;
				}else{
					this.isSame = false;
					this.err=true
					this.errspan="密码不一致";
					console.log("密码不一致");
				}
			},
			registerBtn:function(){
				if(this.isTel==true&&this.isPassword == true&&this.password2==this.password1){
					
					var telnum = this.telNum;
		      	    var password = this.password2;
				
				
				axios.post('/register111',{
					telnum,
					password
			  	}).then(function(res){
			  		if(res.data==false){
			  			this.errspan="注册成功"
			  			this.err = true;
			  			
			  		}else{
			  			this.err = true;
			  			this.errspan="该账号已注册"
			  		}
			  		console.log(res.data);
			  	}).catch(function(err){
			  		console.log("err");
			  	})
			  	}
				else{
			  		this.err = true;
			  		this.errspan="请完善注册信息"
			  	}
			}
			
		}
	}
</script>
<style type="text/css">
	body,h3,ul,li,input,a{
		margin: 0;
		padding: 0;
	}
	.register-header{
		position: fixed;
	    top: 0;
	    width: 100%;
	    height: 43px;
	    border-bottom: 1px solid #dedede;
	    background-color: #fff;
	}	
	.register-header h3{
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
	.register-body{		
		margin: .35em  .625em .75em;
		background: #fcfcfc;
		padding: 20px 10px 20px 10px;
	}
	.rigister-input{
		border: 1px solid #dddddd;
	}
	.register-input li{
		list-style: none;
		width: 100%;
		margin-bottom: 1.5rem;
	}
	.register-txt{
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
	.btn-zc{
		margin-top: 13px;
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
	.register-dl{
		float: right;
		font-size: 1.5rem;
		margin-top: 10px;
		margin-right: 10px;
		cursor: pointer;		
	}
	.register-dl a{
		text-decoration:none;
	
	}
	.errmessage{
		margin-top: 4rem;
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