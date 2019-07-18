<template>
  <div>
    <p v-if="text && displayQuestion">What is the English for <strong>{{ text }}</strong> ?</p>
  </div>
</template>

<script>
export default {
	name: "builder-question",
	computed:{
		text: function(){
			if (this.builderState==="testing" && this.questionWord)
				return this.questionWord.Polish + " " + this.questionWord.emoji
			else if ( (this.builderState==="won"|| this.builderState==="lost") && this.feedbackWord)
				return this.feedbackWord.Polish + " " + this.questionWord.emoji
			else
				return ""
		},
    displayQuestion: function(){
      if (this.builderState !=="pause")
      return true
      else
      return false
    }
	},
  props: ["questionWord","feedbackWord","builderState"]
};
</script>

<style scoped>

p {
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
}

</style>
