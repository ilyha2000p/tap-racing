<template>
	<nav class="navbar navbar-expand-lg navbar-dark">
	  <a class="navbar-brand" href="/">
	  	<img src="../assets/images/car.png" height="64" width="64">
	  	<span>tap-racing</span>
	  </a>

	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse">
	    <div class="navbar-nav">
	      
	    </div>
	  </div>

	  <span class="navbar-text">
	  	{{nickText}}
	  </span>
	</nav>
</template>

<script type="text/javascript">
	export default {
		name: 'navbar',

		props: ['nickText'],
		
		data: function(){
			return {
				
			}
		},

		methods: {
			
		}
	}
</script>

<style scoped type="text/css">
	@import url('https://fonts.googleapis.com/css?family=Righteous');

	.navbar{
		background-color: #094253FF;

		padding-top: 0px;
		padding-bottom: 0px;
	}

	.navbar-brand{
		font-family: 'Righteous', cursive;
		font-size: 2em;
	}
</style>