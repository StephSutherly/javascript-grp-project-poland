<template>
	<div>
		<choice-button v-if="buttonWords.length>0" :word="buttonWords[0]"></choice-button>
		<choice-button v-if="buttonWords.length>0" :word="buttonWords[1]"></choice-button>
		<choice-button v-if="buttonWords.length>0" :word="buttonWords[2]"></choice-button>
		<choice-button v-if="buttonWords.length>0" :word="buttonWords[3]"></choice-button>
	</div>
</template>

<script>
import ChoiceButton from "@/components/choiceButton.vue"

export default {
	name: 'choice-list',
	props: ['buttonWords'],
	components: {
		'choice-button' : ChoiceButton
	}
	
}
</script>

<style scoped>

</style>

