<template>
  <div class="wrapper">
    <button v-on:click="handleClick">Next {{"\u{27A1}"}}</button>
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
    position: absolute;
    display: block;
    top: 20px;
    right: 22px;
    min-width: 150px;

}
button {
  color: black;
  font-family: 'Quicksand', sans-serif;
  height: 40px;
  font-size: 20px;
  display: inline-block;
  background-color: #ffff66;
  border-radius: 5px;
  border: 2px solid green;
  margin: 2px;
  align: center;
  width: 100%;
}

</style>
