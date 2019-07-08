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
      console.log(` ${this.word.English}  was clicked!!!!!`);
      eventBus.$emit("choice-button-clicked", this.word);
    }
  }
};
</script>

<style lang="css" scoped>
button {
  color: black;
  font-family: 'Sniglet', cursive;
  height: 50px;
  font-size: 20px;
  display: inline-block;
  background-color: #A5D1F3;
  border-radius: 5px;
  border: 2px solid #a5d8f3;
  margin: 2px;
}

button:hover {
  background-color: dodgerblue;
}
</style>
