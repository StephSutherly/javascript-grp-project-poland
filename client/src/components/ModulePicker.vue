<template>
	<select v-on:change="handleChange" v-model="selected">
		<option v-for="(module, index) in this.modules" v-bind:value="module"> {{module.label}} </option>
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
			selected: this.modules[0]
		}
	}
}
</script>

<style scoped>

select {
 width: 350px;
 height: 35px;
 padding: 5px 35px 5px 5px;
 margin: 15px 0;
 font-size: 20px;
 border: 1px solid #99ccff;
}

</style>
