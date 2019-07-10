<template lang="html">
	<div id="app">
		<!-- <body> -->
		<div class="container cf">
			<navigation-bar />
			<router-view/>
		<!-- </body> -->
		</div>
		<footer id="app-footer" class="cf">
			<h6>Copyright © 2019 BBCPolish</h6>
		</footer>
	</div>
</template>

<script>

import NavigationBar from '@/components/NavigationBar.vue'

export default {
	name: 'app',
	components: {
		'navigation-bar': NavigationBar
	}

}
</script>

<style lang="css" scoped>


#app {
  background: url('https://live.staticflickr.com/7092/7232458062_861b20d86c_b.jpg') no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
	background-attachment: fixed;
	opacity: 0.9;
}
#app > .container {
	min-height: 750px;
}
#app > .container,
#app-footer {
	clear: both;
}
.view-page {
	min-height: 700px;
	height: 100%;
	background: white;
	/* opacity: 0.9; */
	padding: 15px;
	font-family: Arial;
}
body {
	clear: both;
}
#app-footer {
	display: block;
  background-color: #606060;
	opacity: .9;
	font-family: 'Quicksand', sans-serif;
	color: white;
  /* position: absolute;
  bottom: 0; */
	line-height: 50%;
  width: 100%;
  height: 3rem;
	line-height: 3rem;
}
#app-footer h6 {
	margin: 0;
	text-indent: 25px;
}

</style>
