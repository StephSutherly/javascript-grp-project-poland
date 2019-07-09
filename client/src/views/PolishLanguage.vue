<template>
  <div>
    <view-header :title="title"></view-header>
    <view-content v-html="info" :content="content"></view-content>

  </div>
</template>

<script>
import ViewHeader from "@/components/ViewHeader.vue";
import ViewContent from "@/components/ViewContent.vue";

export default {
  name: "polish-language",
  components: {
    "view-header": ViewHeader,
    "view-content": ViewContent
  },
  data() {
    return {
      title: "Language",
      info: "<p>The official language of the country is Polish, and around 38.5 million people in Poland speak it (as well as it being spoken as a second language in several nearby countries).</p><p>A Slavic language, the Polish alphabet has 9 additional letters to those used in the basic Latin alphabet, making a total of 33. It is the second most spoken Slavic language after Russian, and some of its vocabulary is shared with the languages of other neighbouring Slavic countries – Czech, Slovak, Belarusian, and Ukrainian.</p><p>There are a number of officially recognised minority languages that are spoken in Poland; Belarusian, Czech, Lithuanian, German, Slovak, Russian, Ukrainian Armenian, Hebrew, and Yiddish, and there is also one regional language; Kashubian English is the most common foreign language spoken in Poland.</p>"
      
    }
  }
}
</script>

<style lang="css" scoped>
div {
  background: white;
  opacity: 0.8;
  margin: 70px;
  border: 2px solid black;
  padding: 15px;
  font-family: Arial;

}
p {
  font-size: 20px;
}

</style>
