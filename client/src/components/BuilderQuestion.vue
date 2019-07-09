<template>
  <div>
    <p v-if="word && displayQuestion">What is the English for <strong>{{ word }}</strong> ?</p>
  </div>
</template>

<script>
export default {
	name: "builder-question",
	computed:{
		word: function(){
			if (this.builderState==="testing" && this.questionWord)
				return this.questionWord.Polish
			else if ( (this.builderState==="won"|| this.builderState==="lost") && this.feedbackWord)
				return this.feedbackWord.Polish
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
