<template lang="html">
  <div>
    <h3>Subheading: {{info}}</h3>

    <p>Some random lorem ipsum</p>
  </div>
</template>

<script>
export default {
  name: "view-content",
  props: ["title", "info"]
}
</script>

<style lang="css" scoped>
</style>
