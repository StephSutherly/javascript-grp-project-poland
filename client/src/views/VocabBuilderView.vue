<template>
  <div class="vocab-builder-view">
    <builder-question :word="questionWord"></builder-question>
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
      if (word === this.questionWord) this.gotRight();
      else this.gotWrong();
    });

    eventBus.$on("next-button-clicked", () => {
      console.log("next button clicked");
      this.getModule().then(this.updateWordLists());
      this.builderState = "testing";
    });

    this.getModule().then(this.updateWordLists());
  },
  methods: {
    getModule: function() {
      // to be replaced with db fetch ////////////////////////////////////
      this.allWords = [
        {
          Polish: "hello ",
          English: "Hello",
          timesRight: 5,
          timesWrong: 3,
          studyOrder: 1,
          isKnown: false
        },
        {
          Polish: "goodbye ",
          English: "Goodbye",
          timesRight: 3,
          timesWrong: 3,
          studyOrder: 2,
          isKnown: false
        },
        {
          Polish: "afternoon ",
          English: "Afternoon",
          timesRight: 1,
          timesWrong: 20,
          studyOrder: 2,
          isKnown: false
        },
        {
          Polish: "go away ",
          English: "Go away!!!",
          timesRight: 2,
          timesWrong: 5,
          studyOrder: 2,
          isKnown: false
        },
        {
          Polish: "see ya later ",
          English: "See ya later",
          timesRight: 2,
          timesWrong: 5,
          studyOrder: 2,
          isKnown: true
        },
        {
          Polish: "smell you later ",
          English: "Smell you later",
          timesRight: 2,
          timesWrong: 5,
          studyOrder: 2,
          isKnown: true
        },
        {
          Polish: "you suck ",
          English: "You suck!!!",
          timesRight: 2,
          timesWrong: 5,
          studyOrder: 2,
          isKnown: false
        }
      ];

      const promise = new Promise(function(resolve, reject) {
        if (true) resolve();
        else reject();
      });
      return promise;
    }, ///////////////////////////
    updateWordLists: function() {
      this.testingWords = this.getTestingWords();
      this.questionWord = this.getQuestionWord();
      this.buttonWords = this.getButtonWords();
      this.previousWord = this.questionWord;
      let array = this.allKnownWords();
      if (array.length === 0) console.log("empty");
      for (let i = 0; i < array.length; i++) console.log(array[i]);
    },
    getTestingWords: function() {
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
      return this.testingWords[
        Math.floor(Math.random() * this.testingWords.length)
      ];
    },
    gotRight: function() {
      console.log("Yey!");
      this.builderState = "won";
      // CSS Green class
    },
    gotWrong: function() {
      console.log("Boo!");
      this.builderState = "lost";
      // CSS Red Class
    },
    updateWord: function() {
      console.log("database updated! but not really."); ///replace with patch request
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
      previousWord: {},
      builderState: "testing" ///"testing" "won" "lost "statistics" "pause"
    };
  }
};
</script>

<style lang="css" scoped>

.vocab-builder-view {
  background-color: white;
  margin: 20px;
  padding: 10px;
}

</style>
