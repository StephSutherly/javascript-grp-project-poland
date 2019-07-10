<template>
  <div class="wrapper">
    <button v-if="displayButton" v-on:click="handleClick">{{ text }}</button>
  </div>
</template>

<script>
import { eventBus } from "@/main.js"

export default {
  name: "continue-button",
  computed:{
    displayButton: function(){
      if (this.builderState === "pause" || this.builderState === "start" || this.builderState === "newWord")
        return true
      else
        return false
    },
    text: function(){
      if (this.builderState === "start")
        return "Start"
      else if (this.builderState === "newWord")
        return "Got it!"
      else (this.builderState === "pause")
        return "Continue"
    }
  },
  methods: {
    handleClick: function() {
      eventBus.$emit("continue-button-clicked");
    }
  },
  props: ["builderState"]
};
</script>

<style scoped>

/* Restyle button */
button {
  color: black;
  font-family: 'Quicksand', sans-serif;
  height: 40px;
  font-size: 20px;
  display: inline-block;
  background-color: yellow;
  border-radius: 5px;
  border: 2px solid green;
  margin: 2px;
  align: center;
  position: absolute;
  top: 40%;
}

.wrapper {
    text-align: center;
}

</style>
