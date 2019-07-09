<template>
  <div class="view-page">

    <div class="intro">
    <h3>WITAMY - WELCOME</h3>
    <p>
      We cordially welcome you to the best website about Polishness.
      You will find here, all the necessary information about Poland
      thanks to which you will enrich your knowledge about this
      wonderful region of Europe as well as the culture and the
      customs that prevail in this country.</p>
    </div><!-- .intro -->

    <div id="page-tabs" class="cf">

      <div class="page-tab">
      <p>Polish culture-let's learn!</p>
        <a href="/Travel.vue#/culture">
          <img border="3" src="https://i.ytimg.com/vi/qLWtTzOGOA4/maxresdefault.jpg" width="200" height="100">
        </a>
      </div>
      <div class="page-tab">
      <p>The Travel section will help you find information on the
        current state of public transport in Poland.</p>
        <a href="/Travel.vue#/travel">
        <img border="3" src="https://www.lta.gov.sg/content/dam/ltaweb/corp/PublicTransport/img/BCM_New%20Livery.JPG" width="200" height="100">
        </a>
      </div>

      <div class="page-tab">
        <p>The section called Vocab-Builder will help you learn some basic words used in Polish language. </p>
        <a href="Travel.vue#/vocab_builder">
        <img border="0" src="https://images-na.ssl-images-amazon.com/images/I/51DYwhGbBYL._SY355_.png" width="150" height="150"></a>
      </div>
    </div><!-- #page-tabs -->
  </div>
</template>

<script>
export default {
  name: "home-page"
}
</script>

<style lang="css" scoped>
.view-page {
  background: white;
  opacity: 0.9;
  padding: 15px;
  font-family: Arial;
}
#page-tabs {
  display: flex;
}
.page-tab {
  flex: 1;
}
p {
  font-size: 20px;
  margin: 20px;
  justify-content: space-between;
}
</style>
