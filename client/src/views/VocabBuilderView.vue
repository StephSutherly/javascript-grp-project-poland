<template>
	<div class="vocab-builder-view">
		<builder-question :word="questionWord"></builder-question>
		<choice-list :buttonWords="buttonWords"></choice-list>
	</div>
</template>

<script>
import { eventBus } from '@/main.js'
import ChoiceList from "@/components/ChoiceList.vue"
import BuilderQuestion from "@/components/BuilderQuestion.vue"

export default {
	name: "vocab-builder-view",
	components:{
		"choice-list": ChoiceList,
		"builder-question": BuilderQuestion
	},
	mounted(){
		eventBus.$on('choice-button-clicked',res => console.log(`choicebuttonclicked event for: ${res.English}`) )
		this.getModule().then(
			this.get_next_word()
		)
	},
	methods:{
		getModule:function(){
			// to be replaced with db fetch ////////////////////////////////////
			this.allWords = [
				{
					Polish: "hello ",
					English: "Hello",
					timesRight: 5,
					timesWrong: 3
				},
				{
					Polish: "goodbye ",
					English: "Goodbye",
					timesRight: 3,
					timesWrong: 3
				},
				{
					Polish: "afternoon ",
					English: "Afternoon",
					timesRight: 1,
					timesWrong: 20
				},
				{
					Polish: "go away ",
					English: "Go away!!!",
					timesRight: 2,
					timesWrong: 5
				},
				{
					Polish: "see ya later ",
					English: "See ya later",
					timesRight: 2,
					timesWrong: 5
				},
				{
					Polish: "smell you later ",
					English: "Smell you later",
					timesRight: 2,
					timesWrong: 5
				},
				{
					Polish: "you suck ",
					English: "You suck!!!",
					timesRight: 2,
					timesWrong: 5
				}
			]

		const promise = new Promise(function(resolve, reject) {
			if (true)
				resolve();
			else
				reject();
		});
		return promise

		},  ///////////////////////////
		get_next_word:function(){
				this.testingWords=this.get_testing_words()
				this.buttonWords=this.get_button_words()
				this.questionWord=this.get_question_word()
		},
		get_testing_words: function(){
			console.log(this.allWords.slice(0,6))
			return this.allWords.slice(0,6)
		},
		get_button_words: function(){
			return this.testingWords.slice(0,4)
		},
		get_question_word: function(){
			return this.buttonWords[0]
		}

	},
	data(){
		return {
			allWords: [],
			testingWords: [],
			buttonWords: [],
			questionWord: {}
		}
	}
}
</script>

<style scoped>

</style>
