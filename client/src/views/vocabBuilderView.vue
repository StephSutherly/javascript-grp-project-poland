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
		eventBus.$on('choice-button-clicked', (word) => { 
		if (word === this.questionWord) 
			this.gotRight() 
		else 
			this.gotWrong()
		})
		this.getModule().then(
			this.get_next_word()
		)
	},
	methods:{
		getModule:function(){
			// to be replaced with db fetch ////////////////////////////////////
			this.allWords= [
				{
					Polish: "hello ",
					English: "Hello",
					timesRight: 5,
					timesWrong: 3,
					studyOrder: 1,
					wordKnown: false
				},
				{
					Polish: "goodbye ",
					English: "Goodbye",
					timesRight: 3,
					timesWrong: 3,
					studyOrder: 2,
					wordKnown: false
				},
				{
					Polish: "afternoon ",
					English: "Afternoon",
					timesRight: 1,
					timesWrong: 20,
					studyOrder: 2,
					wordKnown: false
				},
				{
					Polish: "go away ",
					English: "Go away!!!",
					timesRight: 2,
					timesWrong: 5,
					studyOrder: 2,
					wordKnown: false
				},
				{
					Polish: "see ya later ",
					English: "See ya later",
					timesRight: 2,
					timesWrong: 5,
					studyOrder: 2,
					wordKnown: false
				},
				{
					Polish: "smell you later ",
					English: "Smell you later",
					timesRight: 2,
					timesWrong: 5,
					studyOrder: 2,
					wordKnown: false
				},
				{
					Polish: "you suck ",
					English: "You suck!!!",
					timesRight: 2,
					timesWrong: 5,
					studyOrder: 2,
					wordKnown: false
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
		},
		gotRight: function(){
			console.log("Yey!")
			// CSS Green class
		},
		gotWrong: function(){
			console.log("Boo!")
			// CSS Red Class
		},
		updateWord: function(){
			console.log("updated")
		}
	

	},
	data(){
		return {
			allWords: [],
			testingWords: [],
			buttonWords: [],
			questionWord: {},
			previousWord: {}
		}
	}
}
</script>

<style scoped>

</style>
