<template>
	<div class="container">
		<nick-form></nick-form>
	</div>
</template>

<script type="text/javascript">
	import NickForm from './NickForm.vue'
	import Rooms from './Rooms.vue'
	import Game from './Game.vue'

	export default {
		components: {
			'nick-form': NickForm,
			'rooms' : Rooms,
			'game' : Game
		}
	}
</script>

<style type="text/css">
	
</style>