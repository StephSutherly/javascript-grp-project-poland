<template>
  <nav>
    <router-link :to="{name: 'home-page'}">Home</router-link> |
    <router-link :to="{name: 'vocab-builder-view'}">Vocab builder</router-link> |
    <router-link :to="{name: 'culture-page'}">Polish Culture</router-link> |
    <router-link :to="{name: 'polish-language'}">Language</router-link> |
    <router-link :to="{name: 'travel'}">Travel</router-link> |
  </nav>
</template>

<script>
export default {
  name: "navigation-bar"
};
</script>

<style scoped>
</style>
