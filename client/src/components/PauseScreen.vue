<template lang="html">
  <div>
      <div v-if="displayPause" id="pause-screen">
        <h2>Review</h2>
        <h3 v-if="totalRight + totalWrong > 0">You got {{this.percentageRight}}% Correct &#128076;</h3>
        <h3 v-else>No words to review - Keep going, you've got this! &#128522;</h3>
        <h2>Words Studied</h2>
        <!-- <ul>

        </ul> -->
        <div class="table-wrapper cf">
        <table>
          <tr>
            <th>English</th>
            <th>Polish</th>
            <th>Times Correct</th>
            <th>Times Incorrect</th>
          </tr>
          <tr v-for="word in this.seenWords">

            <td>{{ word.English }}</td>
            <td>{{ word.Polish }}</td>
            <td>{{ word.timesRight }}</td>
            <td>{{ word.timesWrong }}</td>
          </tr>
        </table>
      </div><!-- .table-wrapper -->
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

#pause-screen, #start-screen  {
  height: flex;
}

h2 {
    text-align: left;
}

h3 {
  margin: 20px;
}

ul {
  list-style: none;
}

.table-wrapper {
  display: block;
}

table {
  width: 90%;
  background-color: white;
  border-spacing: 0;
  opacity: 0.8;
  table-layout: fixed;
  margin: 20px;
}

td {
  width: 25%;
  font-size: 20px;
}

th {
  text-align: left;
  font-size: 22px;
  border-bottom: 1px solid #606060;
}
</style>


<!-- Polish flag window exists in VocabBuilder so no need to change window.  -->
