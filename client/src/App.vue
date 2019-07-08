<template lang="html">
	<div id="app">
		<body>
			<navigation-bar/>
			<router-view/>
	</body>
	<footer><h6> Copyright © 2019 BBCPolish</h6></footer>
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

body {
  background: url('https://live.staticflickr.com/7092/7232458062_861b20d86c_b.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

footer {
  background-color: #606060;
	color: white;
  position: absolute;
  bottom: 0;
	line-height: 50%;
  width: 100%;
  height: 3rem;
}

</style>
