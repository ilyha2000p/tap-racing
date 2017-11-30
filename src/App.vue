<template>
	<div id="app">
		<navbar :nickText='this.nickText'></navbar>
		<main-container @setNick='setNick'></main-container>
	</div>
</template>

<script type="text/javascript">
	import Navbar from './components/Navbar.vue'
	import MainContainer from './components/MainContainer.vue'

	export default {
		name: 'app',

		data: function(){
			return {
				nickText: ''
			}
		},

		components: {
			Navbar,
			MainContainer
		},

		methods: {
			setNick: function(nickText){
				//alert('this.nickText:'+this.nickText);
				this.nickText = nickText;	

			}
		}
	}
</script>

<style type="text/css">

</style>