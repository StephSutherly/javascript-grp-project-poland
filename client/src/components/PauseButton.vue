<template>
  <div class="wrapper">
    <button v-if="displayButton" v-on:click="handleClick">Pause &#9995;</button>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "pause-button",
  computed:{
    displayButton: function(){
      if (this.builderState === "testing")
      return true
      else
      return false
    }
  },
  methods: {
    handleClick: function() {
      eventBus.$emit("pause-button-clicked");
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
  background-color: #ffff66;
  border-radius: 5px;
  border: 2px solid green;
  margin: 2px;
  align: center;
  width: 100%;
}

.wrapper {
    text-align: center;
    position: absolute;
    top: 20px;
    right: 22px;
    min-width: 150px;
}

</style>
