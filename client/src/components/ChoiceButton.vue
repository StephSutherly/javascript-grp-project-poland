<template>

  <button v-on:click="handleClick">{{word.English}}</button>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "choice-button",
  props: ["word"],
  methods: {
    handleClick: function() {
      console.log(` ${this.word.English}  was clicked!`);
      eventBus.$emit("choice-button-clicked", this.word);
    }
  }
};
</script>

<style lang="css" scoped>
button {
  color: black;
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  background-color: #80bfff;
  border-radius: 5px;
  border: 2px solid #a5d8f3;
  margin: 2px;
  flex: 1;
}
button:hover {
  background-color: dodgerblue;
  cursor: pointer;
}
</style>
