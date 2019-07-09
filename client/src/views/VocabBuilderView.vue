<template>
  <div class="vocab-builder-view">
    <builder-question :builderState="builderState" :questionWord="questionWord" :feedbackWord="feedbackWord"></builder-question>
    <builder-feedback :builderState="builderState"></builder-feedback>
    <choice-list :builderState="builderState" :buttonWords="buttonWords"></choice-list>
    <pause-screen :builderState="builderState" :seenWords="seenWords"></pause-screen>
    <continue-button :builderState="builderState"></continue-button>
    <pause-button :builderState="builderState"></pause-button>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ChoiceList from "@/components/ChoiceList.vue";
import BuilderQuestion from "@/components/BuilderQuestion.vue";
import BuilderFeedback from "@/components/BuilderFeedback.vue";
import PauseScreen from "@/components/PauseScreen.vue";
import PauseButton from "@/components/PauseButton.vue";
import ContinueButton from "@/components/ContinueButton.vue";

export default {
  name: "vocab-builder-view",
  components: {
    "choice-list": ChoiceList,
    "builder-question": BuilderQuestion,
    "builder-feedback": BuilderFeedback,
    "pause-screen": PauseScreen,
    "pause-button": PauseButton,
    "continue-button": ContinueButton
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
    eventBus.$on("pause-button-clicked", () => {
      console.log("pause button clicked!");
      this.builderState = "pause";
    })

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
      this.questionWord = this.getQuestionWord();
      this.buttonWords = this.getButtonWords();
      this.seenWords = this.getSeenWords();
			let array = this.seenWords;
			console.clear()
			console.log("seenWords = ")
      if (array.length === 0) console.log("seenWords empty");
			for (let i = 0; i < array.length; i++)
			console.log(array[i].English);
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
				let readyAndKnown = allWordsExceptKnown.filter( word => (this.wordReady(word))  )
				return readyAndKnown
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
      let possibleQuestionWords = this.allWords;
      let pos = possibleQuestionWords.indexOf(previousWord);
      possibleQuestionWords.splice(pos, 1);

      return possibleQuestionWords[
        Math.floor(Math.random() * possibleQuestionWords.length)
      ];
		},
    getSeenWords: function() {
      return this.allWords.filter(
        word => word.timesRight > 0 || word.timesWrong > 0);
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
        payload = {'timesRight': word.timesRight + 1};
      else {
        payload = {'timesWrong': word.timesWrong + 1 };
			}
			fetch('http://localhost:3000/api/words/'+id, {
				method: 'PATCH',
				body: JSON.stringify(payload),
				headers: {'Content-Type':	'application/json'}
			})
				.then(this.getModule())
    },
		allWordsExceptKnown: function(){
			return this.allWords.filter( word =>(!this.wordKnown(word)) )
		},
		timeForNewWord: function(){
			return false
		},
		wordReady: function(word){
			if (word.timesRight > 4)
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
      seenWords: [],
      builderState: "start" ///"testing" "won" "lost" "pause"
    };
  }
};
</script>

<style lang="css" scoped>

.vocab-builder-view {
  /* background: url('https://upload.wikimedia.org/wikipedia/commons/7/7d/National_Flag_of_Poland.png') no-repeat; */
  background: linear-gradient(to bottom, rgba(255,255,255,.95) 50%, rgba(220,20,60,.95) 50%);
  display: block;
  height: 240px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Questrial', sans-serif;
}

</style>
