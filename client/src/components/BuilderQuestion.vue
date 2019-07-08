<template>
  <div>
    <p v:if="word">What is {{ word.Polish }} ?</p>
  </div>
</template>

<script>
export default {
  name: "builder-question",
  props: ["word"]
};
</script>

<style scoped>
</style>
