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
							<input type="text" placeholder="请输入手机号" />
						</div>
						<div class="login-tabs-validate">
							<input type="text" id="txt-yzm" placeholder="请输入验证码" /><input type="button"  id="btn-yzm" value="获取验证码" />
						</div>
						
					</div>
					
				</div>
				<div class="login-tabs-bd" v-show="!isShow" :key="1">
					<div class="login-tabs-panel">
						<div class="login-tabs-phone">
							<input type="text" placeholder="请输入手机号" />
						</div>
						<div class="login-tabs-phone">
							<input type="text" placeholder="密码" />
						</div>
						<!--<div class="login-tabs-yzm">
							<input type="text" id="txt-yzm2" placeholder="验证码" />
						</div>-->
					</div>
					
				</div>
				<div class="btn-dl">
					登陆
				</div>
				<div class="login-zc"><a href="">快速注册</a></div>
			</div>
		</div>
	</div>
	
</template>
<script>
export default {

  name: 'login',

  data () {
    return {
		ischoice:true,
		loginway:["验证码登录","密码登录"],
		currentIndex:0,
		isShow:true
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
  	}
  }
}
</script>
<style type="text/css">
	body,ul,li,h3,input{
		margin: 0;
		padding: 0;
	}
	#login{
		background: #f5f5f5;
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
	    background-color: #eee;
	}
	.login-tabs-nav li{
		height: 42px;
		-webkit-box-flex: 1;
		flex: 1;
		position: relative;
	    background-color: #fcfcfc;
	    border-bottom: 2px solid #0e90d2;
	    box-sizing: border-box;
	    line-height: 42px;       
        display: block;
	    word-wrap: normal;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	    
	}
	.login-tabs-nav li a{
		text-decoration: none;
		color: #222;
		font-size: 16px;
	}
	.login-tabs-bd{
		height: 150px;
		padding-top: 20px;
	    touch-action: pan-y;
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
	    width: 65%;
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
	#btn-yzm{
		float: left;
		width: 30%;
	    float: left;
	    margin-left: 5%;
	    background-color: #62d399;
	    color: #fff;
	    border-color: #62d399;
	    display: block;
	    font-size: 1.8rem;
	    font-weight: 400;
	    line-height: 1.2;
	    text-align: center;
	    white-space: nowrap;
	    border: 1px solid transparent;
	    border-radius: 2px;
	    cursor: pointer;
	    outline: 0;
	    margin-bottom: 0;
	    padding: .625em 1em;
	    vertical-align: middle;
	    padding-left: 0;
        padding-right: 0;
	}
	.btn-dl{
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
	.login-zc{
		float: right;
		font-size: 16px;
		margin-top: 10px;
		margin-right: 10px;
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
</style>