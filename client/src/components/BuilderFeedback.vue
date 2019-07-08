<template>
  <span>{{text}}</span>
</template>

<script>
export default {
  name: "builder-feedback",
  props: ["builderState"],
  computed: {
    text: function() {
      if (this.builderState === "won") return "correct!";
      else if (this.builderState === "lost") return "incorrect  :( ";
      else return "";
    }
  }
};
</script>

<style scoped>
* {
  font-family: 'Sniglet', cursive;
  font-size: 20px;
}
</style>
