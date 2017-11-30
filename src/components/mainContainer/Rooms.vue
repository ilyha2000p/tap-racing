<template>
	<div id="rooms" class="conteiner">
		<form>
			<div class="form-group row justify-content-center">
				<label for="roomName" class="col-sm-2">Create a new room:</label>

				<input id="roomNameInput" class="form-control col-sm-6" type="text" name="roomNameInput" placeholder="Enter the room-name" autocomplete="false" v-model="roomNameText">
			</div>		

			<div class="row justify-content-center">
				<button type="button" class="btn btn-primary col-sm-2" v-show="showButton">Create a room</button>
			</div>
		</form>

		<div class="row justify-content-center">
			<p class="col-sm-2 center-text-align">Rooms:</p>
		</div>

		<div class="row justify-content-center">
			<div class="list-group col-sm-8" id="rooms-group">
				<ul type="none" class="list-group">
					<li v-for="room in rooms" class="list-group-item list-group-item-action">
						{{room.roomName}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'rooms',
		
		data: function(){
			return {
				roomNameText: "",

				rooms: [
					{roomName: 'First'},
					{roomName: 'Firssssst'}
				]
			}
		},

		computed: {
			showButton: function(){
				if(this.roomNameText.length == 0){
					return false;
				}else{
					return true;
				}
			}
		}
	}
</script>

<style scoped type="text/css">
	.form-group {
		padding: 10px;
	}

	.center-text-align{
		text-align: center;
	}
</style>