<template>

	<div>
		<h3>>Home</h3>
		<button @click="handleclick">list</button>
	</div>
	
</template>

<script type="text/javascript">
import router from "../router";
	export default{
		data(){
			return{

			}
		},
		methods:{
			handleclick(){
				router.push("/list")
			}
		}
	}
</script>

<style type="text/css">
	
</style>