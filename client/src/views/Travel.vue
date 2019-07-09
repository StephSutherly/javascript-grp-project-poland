<template>
  <div class="view-page" id="travel">

    <h2>Travel</h2>

    <img src="https://thumbs.dreamstime.com/z/poland-political-map-detailed-map-poland-vector-illustration-poland-political-map-145121595.jpg" alt="Map of Poland" width="460" height="345">

    <div class="section inline">
      <h3>Accommodation</h3>

      Twelve-bed hostel dorms can be found for as little as 25 PLN per night, while 4-6 bed dorms will cost closer to 45 PLN. Private rooms generally cost 100-150 PLN, although this price varies by city. Free wifi is pretty much standard, though only a few hostels include free breakfast. Most hostels will have a kitchen so you can cook your own food.</p>

      <p>For those traveling with a tent, there are plenty of campgrounds all around the country. You can expect to pay 25-60 PLN per night for a basic plot. Budget hotels range from 110-250 PLN for a room with either single or double occupancy. Airbnb is an option in the larger cities (though selection is usually limited). For shared accommodation, you can expect prices to average around 95 PLN per night. An entire apartment will cost around 150 PLN per night.</p>
    </div>

    <div class="section inline">
      <h3>Food</h3>

      <p>While almost everything in Poland is incredibly affordable, eat with the locals at a milk bar (bar mleczny) for the best value. These restaurants were popular during communism as an affordable way to push nutrition on residents. They serve up cheap traditional fare in a cafeteria style atmosphere for around 25 PLN per meal. In my opinion, they are the best place to get a good meal in the country!</p>

      <p>If you’re looking for fast food, pizza calzones or burgers, expect to pay under 20 PLN. A more mid-range meal in a sit-down restaurant with table service will cost about 60 PLN for a meal with a drink. For a week’s worth of groceries, expect to pay 80-100 PLN for basic food stuffs (i.e. chicken, pasta, rice, veggies, bread, etc).</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "travel"
}
</script>

<style lang="css" scoped>
.view-page {
  background: white;
  opacity: 0.9;
  font-family: Arial;
  padding: 15px;
  margin: 0;
}
.section.inline {
  display: inline;
}
ul{
  list-style-type: none;
}

li{
  font-size: 20px;
}

img{
  float: left;
  padding: 20px;
}
</style>
