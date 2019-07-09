<template>
  <div class="navbar">

    <router-link :to="{name: 'home-page'}">Home</router-link>

    <router-link :to="{name: 'vocab-builder-view'}">Vocab Builder</router-link>

    <div class="dropdown">

      <button class="dropbtn">More Info</button>

        <div class="dropdown-content">

          <router-link :to="{name: 'culture-page'}">Polish Culture</router-link>

          <router-link :to="{name: 'polish-language'}">Language</router-link>

          <router-link :to="{name: 'travel'}">Travel</router-link>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "navigation-bar"
};
</script>

<style lang="css" scoped>
.navbar {
  overflow: hidden;
  background-color: #80bfff;
  height: 50px;
  line-height: 50px;
}
.navbar a {
  float: left;
  padding: 0px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  color: black;
}
.dropdown {
  float: left;
  overflow: hidden;
}
.dropdown .dropbtn {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  display: block;
  border: none;
  outline: none;
  color: black;
  padding: 0px 8px;
  background-color: #80bfff;
  font-family: 'PT Sans', sans-serif;
  margin: 0;
}
.dropbtn:hover {
  cursor: pointer;
}
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: dodgerblue;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #990000;
  min-width: 160px;
  /* top: 58px; */
}
.dropdown-content a {
  float: none;
  color: white;
  padding: 0px 8px;
  display: block;
  text-align: left;
}
.dropbtn,
.dropdown-content {
  min-width: 200px;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #cc0000;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.navbar > div,
.navbar > div .dropdown {
  height: 50px;
  overflow: hidden;
}
</style>
