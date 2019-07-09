<template>
  <button v-on:click="handleClick">Pause</button>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "pause-button",
  methods: {
    handleClick: function() {
      eventBus.$emit("pause-button-clicked");
    }
  }
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
