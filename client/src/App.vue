<template lang="html">
	<div id="app">
		<navigation-bar/>
		<router-view/>
	</div>
</template>

<script>

import NavigationBar from '@/components/navigationBar.vue'

export default {
	name: 'app',
	components: {
		'navigation-bar': NavigationBar
	}
	
}
</script>

<style lang="css" scoped>
</style>
