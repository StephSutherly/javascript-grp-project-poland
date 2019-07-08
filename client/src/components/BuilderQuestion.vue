<template>
  <div>
    <p v:if="word">What is <strong>{{ word }}</strong> ?</p>
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
		}
	},
  props: ["questionWord","feedbackWord","builderState"]
};
</script>

<style scoped>

p {
  font-family: 'Sniglet', cursive;
  font-size: 20px;
}

</style>
