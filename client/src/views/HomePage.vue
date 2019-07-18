<template>
  <div class="view-page">

    <div class="intro">
    <h2>WITAMY - Welcome &#128075;</h2>
    <p>
      Welcome to this Polish information page. Here you can find
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
        <p>Polish Culture and Customs</p>
        <a href="#/culture">
          <img border="3" src="https://i.ytimg.com/vi/qLWtTzOGOA4/maxresdefault.jpg" width="200" height="100">
        </a>
      </div>

      <div class="page-tab">
        <h3>Travel</h3>
        <p>Key information when travelling to Poland</p>
        <a href="#/travel">
          <img border="3" src="https://www.lta.gov.sg/content/dam/ltaweb/corp/PublicTransport/img/BCM_New%20Livery.JPG" width="200" height="100">
        </a>
      </div>

      <div class="page-tab">
        <h3>Language</h3>
        <p>Basic Polish vocabulary and pronunciation guide </p>
        <a href="#/language">
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
  width: 90%;
  margin: 20px 5% 20px 3.5%;
  border-radius: 4px;
  background: rgba(255,255,255,.85);
}

#page-tabs {
  display: flex;
}

#vocab-builder-button {
  width: 150px;
  height: 50px;
  line-height: 50px;
  background-color: #990000;
  border-radius: 5px;
  text-align: center;
  margin: 20px;

}
#vocab-builder-button a {
  text-decoration: none;
  color: White;
  font-size: 20px;
}

#vocab-builder-button:hover {
  background-color: #cc0000;
}

.page-tab {
  flex: 1;
}
p, h3 {
  font-size: 20px;
  margin: 20px;
  justify-content: space-between;
}

img {
  margin: 20px;
}
</style>
