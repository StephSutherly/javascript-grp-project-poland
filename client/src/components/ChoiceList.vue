<template>
  <div>
  <div id="button-list" v-if="displayChoiceButtons">
    <choice-button :word="buttonWords[0]"></choice-button>
    <choice-button :word="buttonWords[1]"></choice-button>
    <choice-button :word="buttonWords[2]"></choice-button>
    <choice-button :word="buttonWords[3]"></choice-button>
  </div>
  <div id="button-list" v-if="displayNextButton">
    <next-button ></next-button>
  </div>
</div>
</template>

<script>
import ChoiceButton from "@/components/ChoiceButton.vue";
import NextButton from "@/components/NextButton.vue";

export default {
  name: "choice-list",
  props: ["buttonWords", "builderState"],
  computed: {
    displayChoiceButtons: function() {
      if (this.builderState === "testing" && this.buttonWords.length > 0)
        return true;
      else return false;
    },
    displayNextButton: function() {
      if (this.builderState === "won" || this.builderState === "lost")
        return true;
      else return false;
    }
  },
  components: {
    "choice-button": ChoiceButton,
    "next-button": NextButton
  }
};
</script>

<style scoped>

#button-list {
  display: flex;
  margin-bottom: 20px;
}

/* choice-button {
  flex: 2
} */
</style>
