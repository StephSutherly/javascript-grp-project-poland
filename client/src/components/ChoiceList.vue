<template>
  <div>
    <span>
    <choice-button v-if="displayChoiceButtons" :word="buttonWords[0]"></choice-button>
    <choice-button v-if="displayChoiceButtons" :word="buttonWords[1]"></choice-button>
    </span>
    <span>
    <choice-button v-if="displayChoiceButtons" :word="buttonWords[2]"></choice-button>
    <choice-button v-if="displayChoiceButtons" :word="buttonWords[3]"></choice-button>
    </span>
    <next-button v-if="displayNextButton"></next-button>
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

</style>
