<template>
	<select v-on:change="handleChange" v-model="selected" >
		<option v-for="module in this.modules" v-bind:value="module"> {{module.label}} </option>
	</select>
</template>

<script>
import {eventBus} from "@/main.js"

export default {
	name: 'module-picker',
	methods: {
		handleChange: function(){
			eventBus.$emit( 'module-select-changed',this.selected)
		}
	},
	props: ['modules'],
	data() {
		return {
			selected: {label: "Basic Vocabulary and Greetings", path: 'basicwords'}
		}
	}
}
</script>

<style scoped>

</style>


