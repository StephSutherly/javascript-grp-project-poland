<template lang="html">
  <div>
      <div v-if="displayPause" id="pause-screen">
        <h2>You've Paused!</h2>
      </div>
      <div v-if="displayStart" id="start-screen">
        <h2>Vocabulary Builder</h2>
      </div>
  </div>
</template>

<script>

export default {
  name: "pause-screen",
  computed:{
    displayPause: function(){
      if (this.builderState === "pause")
      return true
      else
      return false},
    displayStart: function(){
      if (this.builderState === "start")
      return true
      else
      return false
      }
  },
  props: ["builderState", "seenWords"],
}
</script>

<style lang="css" scoped>

h2 {
  text-align: center;
}
</style>


<!-- Polish flag window exists in VocabBuilder so no need to change window.  -->

<!-- Start Screen  -->
