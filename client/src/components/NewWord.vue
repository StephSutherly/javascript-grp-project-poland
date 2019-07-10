<template lang="html">
  <div>
    <div v-if="displayNewWord">
      <h2>You're ready for a new word!</h2>
        <h3>{{ questionWord.English }}: {{ questionWord.Polish }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-word",
  props: ["builderState", "questionWord"],
  computed:{
    displayNewWord: function(){
      if (this.builderState === "newWord")
      return true
      else
      return false
    }
  }
}
</script>

<style lang="css" scoped>

h3 {
  text-align: center;
  font-size: 40px;
  padding: 5px;
  height: 50px;
  border-radius: 5px;
  background-color: #80bfff;
}


</style>
