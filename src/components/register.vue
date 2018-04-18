<template>
	<div id="register">
		<div class="register-header">
		<h3>注册</h3>
		</div>
		<div class="register-body">
			<ul class="register-input">
			<li><input type="text"  class="register-txt" value="" placeholder="请输入手机号或用户名" /></li>
			<li><input type="text"  class="register-txt" value="" placeholder="密码"/></li>
			<li><input type="text"  class="register-txt" value="" placeholder="确认密码"/></li>			
			</ul>
			<div class="btn-zc">
				注册
			</div>
			<div class="register-dl">
				<a href="">已有账号，去登陆</a>
			</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	
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
</style>