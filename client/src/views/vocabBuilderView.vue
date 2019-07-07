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
			this.getNextWord()
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
		getNextWord:function(){
				this.testingWords=this.getTestingWords()
				this.questionWord=this.getQuestionWord()
				this.buttonWords=this.getButtonWords()
				
		},
		getTestingWords: function(){
			return this.allWords.slice(0,6)
		},
		getButtonWords: function(){
			 let tempButtonWords = []
		 
			//let position = this.allWords.findIndex( (word) => {this.questionWord === word})
			let arrayWithoutQWord = this.allWords.filter( word => word!==this.questionWord )
			let i = 0 
			 while(i < 3){
					i++ 
					let wordToBeAdded = arrayWithoutQWord[Math.floor(Math.random() * arrayWithoutQWord.length)]
					tempButtonWords.push(wordToBeAdded)
					let pos = arrayWithoutQWord.indexOf(wordToBeAdded)
					arrayWithoutQWord.splice(pos,1)
			 }
			
			 tempButtonWords.push(this.questionWord)
			 return tempButtonWords
		},
		getQuestionWord: function(){
			return this.testingWords[Math.floor(Math.random() * this.testingWords.length)]
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
