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
</style>


