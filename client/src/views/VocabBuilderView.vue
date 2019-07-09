<template>
  <div class="vocab-builder-view">
    <builder-question :builderState="builderState" :questionWord="questionWord" :feedbackWord="feedbackWord"></builder-question>
    <builder-feedback :builderState="builderState"></builder-feedback>
    <choice-list :builderState="builderState" :buttonWords="buttonWords"></choice-list>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ChoiceList from "@/components/ChoiceList.vue";
import BuilderQuestion from "@/components/BuilderQuestion.vue";
import BuilderFeedback from "@/components/BuilderFeedback.vue";
export default {
  name: "vocab-builder-view",
  components: {
    "choice-list": ChoiceList,
    "builder-question": BuilderQuestion,
    "builder-feedback": BuilderFeedback
  },
  mounted() {
    eventBus.$on("choice-button-clicked", word => {
      if (word === this.questionWord) this.gotRight(word);
      else this.gotWrong(word);
    });
    eventBus.$on("next-button-clicked", () => {
      console.log("next button clicked");
      this.builderState = "testing";
		});

		this.getModule();

  },
  methods: {
    getModule: function() {
      fetch("http://localhost:3000/api/words/")
        .then(res => res.json())
        .then(data => {
          this.allWords = data;
          this.updateWordLists();
        });
    },
    updateWordLists: function() {
			
			this.testingWords = this.getTestingWords();
			if (this.hasBeenRun==false)
			{
				this.questionWord=this.testingWords[Math.floor(Math.random() * this.testingWords.length)];
			}
			else
      	this.questionWord = this.getQuestionWord();
      this.buttonWords = this.getButtonWords();
			this.hasBeenRun=true
    },
    getTestingWords: function() {
			if (this.isNewModule())
			{
				console.log("new module, adding 2 words!")
				return this.allWords.filter( (word) => word.studyOrder<3 )
			}
			else
			{
				console.log("not new module!")
				let allWordsExceptKnown =  this.allWordsExceptKnown()
				console.log("allWordsExceptKnown",allWordsExceptKnown)

				let allWordsReadyOrKnown = this.allWords.filter(word => {
					if (this.wordReady(word) || this.wordKnown(word))
						return true
					return false
				})


				let newTestingArray = allWordsExceptKnown

				console.log("allwordsNOTknownNOTready - start",newTestingArray)

				if (this.timeForNewWord(newTestingArray))
				{
					if (this.noMoreWordsToAdd(allWordsReadyOrKnown))
					{
							console.log("no more words to add!")
							return this.allWords
					}
					else
					{
							let orders = allWordsReadyOrKnown.map(word => word.studyOrder)
							let highestOrder = Math.max(...orders)
							let newWord = this.allWords.find(word => (word.studyOrder===highestOrder+1)) 
							newTestingArray.push(newWord)
							console.log(`adding new word ${newWord.English}`)
					}
				}

				if (this.allKnownWords()>2 && newTestingArray.length<3)  //if there aren't at least 3 words to cycle through, fill up with known words if possible
				{
					let i=0
					console.log(`new testing words is too short, length ${newTestingArray.length}, adding filler words`)
					while (  i< (3-newTestingArray.length)   )
					{
						i++
						this.addFillerWord(newTestingArray)
					}
				}
				return newTestingArray
			}
    },
    getButtonWords: function() {
      let tempButtonWords = [];
      let arrayWithoutQWord = this.allWords.filter(
        word => word !== this.questionWord
      );
      let i = 0;
      while (i < 3) {
        i++;
        let wordToBeAdded =
          arrayWithoutQWord[
            Math.floor(Math.random() * arrayWithoutQWord.length)
          ];
        tempButtonWords.push(wordToBeAdded);
        let pos = arrayWithoutQWord.indexOf(wordToBeAdded);
        arrayWithoutQWord.splice(pos, 1);
      }
      tempButtonWords.push(this.questionWord);
      return tempButtonWords;
    },
    getQuestionWord: function() {
			let previousWord = this.questionWord;
			console.log(`previous word is ${previousWord.English}`)
      let possibleQuestionWords = this.testingWords;
      let pos = possibleQuestionWords.indexOf(previousWord);
      possibleQuestionWords.splice(pos, 1);

			let array = possibleQuestionWords;
			//console.clear()
			console.log("possibleQuestionWords = ",possibleQuestionWords)
      // if (array.length === 0) console.log("possibleQuestionWords empty");
			// for (let i = 0; i < array.length; i++) 
			// console.log(array[i].English);
      return possibleQuestionWords[
        Math.floor(Math.random() * possibleQuestionWords.length)
      ];
		},
		isNewModule: function() {
					let totalAttempts = this.allWords.reduce((sum, word) => {
						return sum + word.timesRight + word.timesWrong;
					}, 0);
					if (totalAttempts === 0)
						return true
					return false
    },
    gotRight: function(word) {
			this.feedbackWord=this.questionWord
      this.updateWord(word, true);
      this.builderState = "won";
      // CSS Green class
    },
    gotWrong: function(word) {
			this.feedbackWord=this.questionWord
      this.updateWord(word, false);
      this.builderState = "lost";
      // CSS Red Class
    },
    updateWord: function(word, wasCorrect) {
      let id =  word._id;
      let payload;
      if (wasCorrect == true)
        payload = {'timesRight': word.timesRight+1};
      else {
        payload = {'timesWrong': word.timesWrong+1 };
			}
			fetch('http://localhost:3000/api/words/'+id, {
				method: 'PATCH',
				body: JSON.stringify(payload),
				headers: {'Content-Type':	'application/json'}
			})
				.then(this.getModule())
		},
		allKnownWords: function(){
			return this.allWords.filter( word =>(this.wordKnown(word)) )
		},
		allWordsExceptKnown: function(){
			return this.allWords.filter( word =>(!this.wordKnown(word)) )
		},
		timeForNewWord: function(currentTestingArray){
			if (currentTestingArray.every(word => (this.wordReady(word))))
			{
				console.log("time for new word!")
				return true
			}
			else
			{
				console.log("not ready for new word!")
				return false
			}
		},
		noMoreWordsToAdd: function(allWordsReadyOrKnown){
			let orders = allWordsReadyOrKnown.map(word => word.studyOrder)
			let highestOrder = Math.max(...orders)
			if (   highestOrder===(this.allWords.length-1)   )
				return true
			else
				return false
		},
		addFillerWord: function(arrayToAddTo){
						let possibleFillerWords = this.allKnownWords()
						console.log("possible filter words:",possibleFillerWords)
						let newWord = possibleFillerWords[Math.floor(Math.random() * possibleFillerWords.length)]
						//console.log("newword",newWord)
						arrayToAddTo.push(newWord)
						let pos = possibleFillerWords.indexOf(newWord)
						possibleFillerWords.splice(pos,1)
						console.log("filler word added to testing Words:", newWord.English)
		},
		wordReady: function(word){
			if (word.timesRight>4)
				return true
			return false
		},
		wordKnown: function(word) {
        if (
          (word.timesRight > 5 && word.timesRight > word.timesWrong) ||
          word.isKnown
        )
          return true;
        else return false;
		}
	},
  data() {
    return {
      allWords: [],
      testingWords: [],
      buttonWords: [],
			questionWord: {},
			feedbackWord: {},
			hasBeenRun: false,
      builderState: "testing" ///"testing" "won" "lost "statistics" "pause"
    };
  }
};
</script>

<style lang="css" scoped>

.vocab-builder-view {
  background: url('https://upload.wikimedia.org/wikipedia/commons/7/7d/National_Flag_of_Poland.png') no-repeat;
  display: block;
  height: 240px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
}

</style>
