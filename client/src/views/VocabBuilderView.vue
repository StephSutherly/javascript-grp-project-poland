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
      this.getModule();
      this.builderState = "testing";
    });

    this.getModule();
  },
  methods: {
    getModule: function() {
      fetch("http://localhost:3000/api/words/")
        .then(res => res.json())
        .then(data => (this.allWords = data));
    },
    updateWordLists: function() {
      this.testingWords = this.getTestingWords();
      this.questionWord = this.getQuestionWord();
      this.buttonWords = this.getButtonWords();
      this.previousWord = this.questionWord;
      let array = this.allKnownWords();
      if (array.length === 0) console.log("empty");
      for (let i = 0; i < array.length; i++) console.log(array[i]);
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
  computed: {
    testingWords: function() {
      return this.allWords.slice(0, 6);
    },
    buttonWords: function() {
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
    questionWord: function() {
      return this.testingWords[
        Math.floor(Math.random() * this.testingWords.length)
      ];
    }
  },
  data() {
    return {
      allWords: [],
      previousWord: {},
      builderState: "testing" ///"testing" "won" "lost "statistics" "pause"
    };
  }
};
</script>

<style scoped>
</style>
