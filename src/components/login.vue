<template>
	<div id="">
		<div class="login-header">
		<h3>手机登陆</h3>
		</div>
		<div class="login-body">
			<div id="login-tabs">
				<ul class="login-tabs-nav">
					<li>验证码登陆</li>
					<li>密码登陆</li>
				</ul>
				<div class="login-tabs-bd">
					<div class="login-tabs-panel">
						<div class="login-tabs-phone">
							<input type="text" placeholder="请输入手机号" />
						</div>
						<div class="login-tabs-validate">
							<input type="text" placeholder="请输入验证码" /><input type="button"  id="btn-va" value="获取验证码" />
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
	body{
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
		padding: .35em .625em .75em;
		
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
        color: #222;
        display: block;
	    word-wrap: normal;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	    font-size: 16px;
	}
	.login-tabs-bd{
		padding-top: 20px;
	    touch-action: pan-y;
	    -webkit-user-drag: none;
	    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	    background: red;
	    
	}
	.login-tabs-panel{
		position: relative;
	    z-index: 100;
	    visibility: visible;
        transform: translateX(0);
        float: left;
        width: 100%;
        padding: 10px 10px 15px;
        top: 0;
        transition: transform .3s;
        background: green;
	}
	.login-tabs-phone{
		margin-bottom: 1.5rem;
	}
	.login-tabs-validate{
		margin-bottom: 1.5rem;
	}
</style>