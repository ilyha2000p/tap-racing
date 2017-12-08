<template>
	<div id="app">
		<navbar :nickText='this.nickText'></navbar>
		<router-view @setNick='setNick'></router-view>
	</div>
</template>

<script type="text/javascript">
	import Navbar from './components/Navbar.vue'

	export default {
		name: 'app',

		data: function(){
			return {
				nickText: ''
			}
		},

		components: {
			Navbar
		},

		methods: {
			setNick: function(nickText){
				this.nickText = nickText;	
			}
		}
	}
</script>

<style type="text/css">

</style>