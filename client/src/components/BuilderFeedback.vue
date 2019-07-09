<template>
  <span>{{text}}</span>
</template>

<script>
export default {
  name: "builder-feedback",
  props: ["builderState"],
  computed: {
    text: function() {
      if (this.builderState === "won") return "Yey, that is correct!";
      else if (this.builderState === "lost") return "Sorry, that's not correct";
      else return "";
    }
  }
};
</script>

<style scoped>
* {
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
}
</style>
