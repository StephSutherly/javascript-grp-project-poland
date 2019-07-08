<template>
  <nav>
    <router-link :to="{name: 'vocab-builder-view'}">Vocab builder</router-link>
  </nav>
</template>

<script>
export default {
  name: "navigation-bar"
};
</script>

<style lang="css" scoped>
nav {
  background-color: #80bfff;
  height: 50px;
  line-height: 50px;
}
nav a {
  padding: 0px 8px;
  text-decoration: none;
  display: inline-block;
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  color: black;
}

nav a:hover {
  background-color: dodgerblue;
}
</style>
