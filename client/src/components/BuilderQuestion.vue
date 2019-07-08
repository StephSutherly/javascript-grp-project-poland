<template>
  <div>
    <p v:if="word">What is <strong>{{ word.Polish }}</strong> ?</p>
  </div>
</template>

<script>
export default {
  name: "builder-question",
  props: ["word"]
};
</script>

<style scoped>

p {
  font-family: 'Sniglet', cursive;
  font-size: 20px;
}

</style>
