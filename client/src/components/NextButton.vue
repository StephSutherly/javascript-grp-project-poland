<template>
  <div class="wrapper">
    <button v-on:click="handleClick">Next</button>
  </div>
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
