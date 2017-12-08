<template>
	<form autocomplete="off">
		<div class="form-group row justify-content-center">
			<input class="form-control col-sm-6" type="text" name="nick" placeholder="Enter the nick" autocomplete="false" onkeypress="if(event.keyCode == 13) return false;" v-model="nickText">
		</div>		

		<div class="row justify-content-center">
			<button type="button" class="btn btn-primary col-sm-2" v-show="showButton" @click="setNick">OK</button>
		</div>
	</form>
</template>

<script type="text/javascript">
	export default {
		name: 'nick-form',
		
		data: function(){
			return {
				nickText: "",
			}
		},

		computed: {
			showButton: function(){
				if(this.nickText.length == 0){
					return false;
				}else{
					return true;
				}
			}
		},

		methods: {
			setNick: function(){
				this.$emit('setNick', this.nickText);
				this.nickText = '';

				axios({
					method: 'post',
					url: 'http://localhost:8000/rooms'
				})
					.then(function(res){
						location.replace('/#/rooms');
					})
					.catch(function(err){
						alert('error!!!');
					});
			}
		}
	}
</script>

<style scoped type="text/css">
	.form-group {
		padding: 10px 0px 10px 0px;
	}

	.btn{
		cursor: pointer;
	}
</style>