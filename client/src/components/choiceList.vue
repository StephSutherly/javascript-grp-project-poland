<template>
	<div>
		<choice-button></choice-button>
	</div>
</template>

<script>
import ChoiceButton from "@/components/choiceButton.vue"

export default {
	name: 'choice-list',
	props: ['words'],
	components: {
		'choice-button' : ChoiceButton
	}
	
}
</script>

<style scoped>

</style>

