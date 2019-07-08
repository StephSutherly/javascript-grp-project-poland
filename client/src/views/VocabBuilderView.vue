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
			console.log("words updated!");
			//this.feedbackWord=this.questionWord
      this.testingWords = this.getTestingWords();
      this.questionWord = this.getQuestionWord();
      this.buttonWords = this.getButtonWords();
      let array = this.allKnownWords();
      // if (array.length === 0) console.log("empty");
      // for (let i = 0; i < array.length; i++) console.log(array[i]);
    },
    isNewModule: function() {
			return true
      let totalAttempts = this.allWords.reduce((sum, word) => {
        return sum + word.timesRight + word.timesWrong;
      }, 0);
			if (totalAttempts === 0)
				return true
			return false
    },
    getTestingWords: function() {
			if (this.isNewModule())
				return this.allWords.filter( (word) => word.studyOrder<3 )

      return this.allWords.slice(0, 6);
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
    allKnownWords: function() {
      return this.allWords.filter(word => {
        if (
          (word.timesRight > 5 && word.timesRight > word.timesWrong) ||
          word.isKnown
        )
          return true;
        else return false;
      });
    }
  },
  data() {
    return {
      allWords: [],
      testingWords: [],
      buttonWords: [],
			questionWord: {},
			feedbackWord: {},
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
