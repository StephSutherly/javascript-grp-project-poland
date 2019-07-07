<template>
	<button v-on:click="handleClick" >{{word.English}}
		</button>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
	name: 'choice-button',
	props: ['word'],
	methods:{
		handleClick:function(){
			console.log(` ${this.word.English}  was clicked!!!!!`)
			eventBus.$emit('choice-button-clicked',this.word)
		}
	}
}
</script>

<style scoped>

</style>
