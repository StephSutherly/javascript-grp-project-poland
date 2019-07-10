<template>
	<select v-model="selected">
		<option v-for="module in this.modules"  v-bind:key="module" v-bind:value="module.collection"> {{module.label}} </option>
	</select>
</template>

<script>
export default {
	name: 'module-picker',
	props: ['modules'],
	data() {
		return {
			selected: ""
		}
	}
}
</script>

<style scoped>

</style>


