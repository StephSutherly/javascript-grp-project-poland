<template>
  <div class="view_page">
    <view-header :title="title"></view-header>

    <view-content v-html="info" :content="content"></view-content>
  </div>

</template>

<script>
import ViewHeader from "@/components/ViewHeader.vue";
import ViewContent from "@/components/ViewContent.vue";

export default {
  name: "culture-page",
  components: {
    "view-header": ViewHeader,
    "view-content": ViewContent
  },
  data() {
    return {
      title: "Culture",
      info: "<p>Capital: Warsaw</p><p>Population: 38,628,927 (2016 est.)</p><p>Climate: July is the warmest month (27°C), and December the coldest (-10°C).</p><p>Nationality:Polish 93.52%, Silesian 1.09%, German 0.28%, Belarusian 0.12%, Ukrainian 0.12%, Kashubian 0.04%, Romani 0.03%, Other 4.80% (2011 census)</p><p>Religions: (Based on 2011 survey of 91.2% of the population) Roman Catholic 87.5% (around 75% who are practicing), Opting out of responding 7.1%, Non-believer 2.4%, Not stated 1.6%, Eastern Orthodox 1.3%, Other religions 1%.</p><p>Government: Republic</p><p>Currency: Polish Zloty</p><p>Local time: GMT+01:00</p><p>National Holidays: Constitution Day, 1 May (1791), Independence Day, 11 November (1918).</p><p>With a rich history that can be traced back over hundreds of years, Poland has a unique and diverse culture. As a country the minority populations are concentrated around the borders with the German minority mainly residing near the city of Opole in the southwest. In Warsaw and other major cities there has been a recent increase in the inward migration of other nationalities.</p><p>When it comes to local culture, religion plays a vital role in society and an even bigger part in Polish culture. It is common for most businesses to close on religious holidays – they are considered to be national holidays in Poland.</p><p>Christmas is considered the religious holiday that holds the most importance, with celebrations lasting a full 2 1/2 days.</p><p>November 1st, All Saints Day is another very important religious holiday on the Polish calendar. It is a time to honour loved ones who are no longer with them, with many Poles visiting cemeteries.</p><p>Baptisms, weddings, first communions, confirmations, and funerals are all very much influenced by religion; Poland is one of the most devoutly religious countries in Europe.</p>"
    }
  }
}
</script>

<style lang="css" scoped>
.div1 {
  background: white;
  opacity: 0.9;
  margin: 40px;
  border: 2px solid black;
  padding: 15px;
  font-family: Arial;
  float: left;
  width: 500px;
}
p {
  font-size: 20px;
}

</style>
