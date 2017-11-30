<template>
	<form>
		<div class="form-group row justify-content-center">
			<input class="form-control col-sm-6" type="text" name="nick" placeholder="Enter the nick" autocomplete="false" v-model="nickText">
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
			}
		}
	}
</script>

<style scoped type="text/css">
	.form-group {
		padding: 10px;
	}

	.btn{
		cursor: pointer;
	}
</style>