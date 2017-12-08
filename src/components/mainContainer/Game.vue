<template>
	<div class="row justify-content-center" id="gameDiv">
		<div class="col-sm-auto" id="redName">name1</div>
		<iframe src="./src/game.html" width="608" height="508" frameborder="no" scrolling="auto"></iframe>
		<div class="col-sm-auto" id="blueName">name2</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'game',
		
		data: function(){
			return {

			}
		}
	}
</script>

<style scoped type="text/css">
	#gameDiv{
		padding: 10px;
	}

	#redName{
		color: red;
	}

	#blueName{
		color: blue;
	}
</style>