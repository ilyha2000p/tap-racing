<template>
	<div class="container">
		<nick-form  @setNick="setNick"></nick-form>
	</div>
</template>

<script type="text/javascript">
	import NickForm from './mainContainer/NickForm.vue'
	import Rooms from './mainContainer/Rooms.vue'
	import Game from './mainContainer/Game.vue'

	export default {
		name: 'main-container',

		components: {
			NickForm,
			Rooms,
			Game
		},

		methods: {
			setNick: function(nickText){
				this.$emit('setNick', nickText);
			}
		}
	}
</script>

<style type="text/css">
	
</style>