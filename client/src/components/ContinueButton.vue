<template>
  <button v-on:click="handleClick">Continue</button>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "continue-button",
  methods: {
    handleClick: function() {
      eventBus.$emit("continue-button-clicked");
    }
  }
};
</script>

<style scoped>

/* Restule button */
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
