<template lang="html">
  <div>
    <div v-if="displayNewWord">
      <h2>You're ready for a new word!</h2>
      <!-- Display English and Polish -->
    </div>
  </div>
</template>

<script>
export default {
  name: "new-word",
  props: ["builderState"],
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
</style>
