<template>
  <button v-on:click="handleClick">next!</button>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "next-button",
  methods: {
    handleClick: function() {
      eventBus.$emit("next-button-clicked");
    }
  }
};
</script>

<style scoped>
button {
  color: black;
  font-family: 'Sniglet', cursive;
  height: 40px;
  font-size: 20px;
  display: inline-block;
  background-color: #80bfff;
  border-radius: 5px;
  border: 2px solid #a5d8f3;
  margin: 2px;
}
</style>
