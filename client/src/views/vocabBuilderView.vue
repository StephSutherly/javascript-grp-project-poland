<template>
	<div class="vocab-builder-view">
		<choice-list :buttonWords="buttonWords"></choice-list>
	</div>
</template>

<script>
import ChoiceList from "@/components/choiceList.vue"

export default {
	name: "vocab-builder-view",
	components:{
		"choice-list": ChoiceList
	},
	mounted(){

		this.getModule().then(
			this.get_next_word()  
		)
	},
	methods:{
		getModule:function(){
			// to be replaced with fetch  ////////////////////////////////////
			this.allWords= [
				{
					Polish: "Hello in polish",
					English: "Hello",
					timesRight: 5,
					timesWrong: 3
				},
				{
					Polish: "Goodbye in Polish",
					English: "Goodbye",
					timesRight: 3,
					timesWrong: 3
				},
				{
					Polish: "Afternoon in polish",
					English: "Afternoon",
					timesRight: 1,
					timesWrong: 20
				},
				{
					Polish: "Go away in Polish",
					English: "Go away!!!",
					timesRight: 2,
					timesWrong: 5
				},
				{
					Polish: "See ya later in Polish",
					English: "See ya later",
					timesRight: 2,
					timesWrong: 5
				},
				{
					Polish: "Smell you later in Polish",
					English: "Smell you later",
					timesRight: 2,
					timesWrong: 5
				},
				{
					Polish: "you suck in Polish",
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
			return this.buttonWords.slice(0,1)
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

