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
.wrapper {
    text-align: center;
    position: relative;
    display: block;
    width: 100%;
    float: right;
    bottom: 0;
}
button {
  color: black;
  font-family: 'Quicksand', sans-serif;
  height: 40px;
  width: 120px;
  font-size: 20px;
  display: block;
  background-color: yellow;
  border-radius: 5px;
  border: 2px solid green;
  float: right;
  align: center;
  float: right;
  position: absolute;
  top: 40%;
}

</style>
