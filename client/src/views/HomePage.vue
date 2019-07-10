<template>
  <div class="view-page">

    <div class="intro">
    <h3>WITAMY - WELCOME</h3>
    <p>
      Welcome to the best website about Polishness. Here you can find
      lots of useful information about Poland that will enrich your
      knowledge about this wonderful region of Europe, its culture and
      the customs that prevail in this country.</p>
    </div>

    <div id="vocab-builder">
      <h2>Vocab Builder</h2>
      <p>Explore our Polish Vocab Builder</p>

      <div id="vocab-builder-button">
        <a href="#/vocab_builder">Vocab Builder</a>
      <!-- <img border="0" src="https://images-na.ssl-images-amazon.com/images/I/51DYwhGbBYL._SY355_.png" width="150" height="150"></a> -->
    </div>
    </div>

    <div id="page-tabs" class="cf">

      <div class="page-tab">
        <h3>Culture</h3>
        <p>Polish culture-let's learn!</p>
        <a href="#/culture">
          <img border="3" src="https://i.ytimg.com/vi/qLWtTzOGOA4/maxresdefault.jpg" width="200" height="100">
        </a>
      </div>

      <div class="page-tab">
        <h3>Travel</h3>
        <p>The Travel section will help you find information on the
        current state of public transport in Poland.</p>
        <a href="#/travel">
          <img border="3" src="https://www.lta.gov.sg/content/dam/ltaweb/corp/PublicTransport/img/BCM_New%20Livery.JPG" width="200" height="100">
        </a>
      </div>

      <div class="page-tab">
        <h3>Language</h3>
        <p>The section called Vocab-Builder will help you learn some basic words used in Polish language. </p>
        <a href="#/vocab_builder">
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
#page-tabs {
  display: flex;
}
#vocab-builder-button {
  width: 150px;
  height: 50px;
  line-height: 50px;
  background-color: Maroon;
  opacity: 1;
  border-radius: 4px;
  text-align: center;
}
#vocab-builder-button a {
  text-decoration: none;
  color: Black;
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
