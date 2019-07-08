<template>
  <div>
    <p v:if="word">What is {{ word }} ?</p>
  </div>
</template>

<script>
export default {
	name: "builder-question",
	computed:{
		word: function(){
			if (this.builderState==="testing" && this.questionWord)
				return this.questionWord.Polish
			else //if ( (this.builderState==="won"|| this.builderState==="lost") && this.feedbackWord)
				return this.feedbackWord.Polish
		}
	},
  props: ["questionWord","feedbackWord","builderState"]
};
</script>

<style scoped>
</style>
