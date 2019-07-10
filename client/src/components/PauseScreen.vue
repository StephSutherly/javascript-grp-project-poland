<template lang="html">
  <div>
      <div v-if="displayPause" id="pause-screen">
        <h2>Review</h2>
        <h3 v-if="totalRight + totalWrong > 0">You got {{this.percentageRight}}% Correct</h3>
        <h3 v-else>No words to review - Keep going, you've got this! &#128522;</h3>
        <h5>Word List</h5>
        <!-- <ul>

        </ul> -->
        <table>
          <tr>
            <th>English</th>
            <th>Polish</th>
            <th>Times Correct</th>
            <th>Times Incorrect</th>
          </tr>
          <tr v-for="word in this.seenWords">
            {{ word.English }}
          </tr>
        </table>
      </div>
      <div v-if="displayStart" id="start-screen">
        <h2>Vocabulary Builder</h2>
				<module-picker :modules="modules"></module-picker>
      </div>
  </div>
</template>

<script>
import ModulePicker from '@/components/ModulePicker.vue'
export default {
  name: "pause-screen",
  computed:{
    displayPause: function(){
      if (this.builderState === "pause")
      return true
      else
      return false
    },
    displayStart: function(){
      if (this.builderState === "start")
      return true
      else
      return false
    },
    totalRight: function(){
      return this.seenWords.reduce((sum, word) => {
        return sum + word.timesRight
      }, 0);
    },
    totalWrong: function(){
      return this.seenWords.reduce((sum, word) => {
        return sum + word.timesWrong
      }, 0);
    },
    percentageRight: function(){
      let total = this.totalRight + this.totalWrong;
      return Math.round((this.totalRight / total)*100);
    },
    sortedSeenWords: function(){
      return this.seenWords.sort((firstWord, secondWord) => ( firstWord.timesRight / (firstWord.timesRight + firstWord.timesWrong) ) - ( secondWord.timesRight / (secondWord.timesRight + secondWord.timesWrong) ) );
    }
  },
	props: ["builderState", "seenWords","modules"],
	components: {
		'module-picker' : ModulePicker
	}
}
</script>

<style lang="css" scoped>

h2 {
  text-align: left;
}

ul {
  list-style: none;
}

table {
  width: 70%;
  background-color: white;
}
</style>


<!-- Polish flag window exists in VocabBuilder so no need to change window.  -->
