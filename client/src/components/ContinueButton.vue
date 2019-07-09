<template>
  <button v-if="displayButton" v-on:click="handleClick">{{ text }}</button>
</template>

<script>
import { eventBus } from "@/main.js"

export default {
  name: "continue-button",
  computed:{
    displayButton: function(){
      if (this.builderState === "pause" || "start")
        return true
      else
        return false
    },
    text: function(){
      if (this.builderState === "start")
        return "Start"
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
  background-color: #80bfff;
  border-radius: 5px;
  border: 2px solid #a5d8f3;
  margin: 2px;
}

</style>
