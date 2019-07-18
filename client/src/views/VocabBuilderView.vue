<template>
<div class="vocab-builder-view cf">
  <builder-question :builderState="builderState" :questionWord="questionWord" :feedbackWord="feedbackWord"></builder-question>
  <builder-feedback :builderState="builderState"></builder-feedback>
  <choice-list :builderState="builderState" :buttonWords="buttonWords"></choice-list>
  <pause-screen :builderState="builderState" :seenWords="seenWords" :modules="modules"></pause-screen>
  <continue-button :builderState="builderState"></continue-button>
  <pause-button :builderState="builderState"></pause-button>
  <new-word :builderState="builderState" :questionWord="questionWord"></new-word>
</div>
</template>

<script>
import {
  eventBus
} from "@/main.js";
import ChoiceList from "@/components/ChoiceList.vue";
import BuilderQuestion from "@/components/BuilderQuestion.vue";
import BuilderFeedback from "@/components/BuilderFeedback.vue";
import PauseScreen from "@/components/PauseScreen.vue";
import PauseButton from "@/components/PauseButton.vue";
import ContinueButton from "@/components/ContinueButton.vue";
import NewWord from "@/components/NewWord.vue";
import Speech from 'speak-tts'

export default {
  name: "vocab-builder-view",
  components: {
    "choice-list": ChoiceList,
    "builder-question": BuilderQuestion,
    "builder-feedback": BuilderFeedback,
    "pause-screen": PauseScreen,
    "pause-button": PauseButton,
    "continue-button": ContinueButton,
    "new-word": NewWord
  },
  mounted() {
    eventBus.$on("module-select-changed", module => (this.currentModule = module))
    eventBus.$on("choice-button-clicked", word => {
      if (word === this.questionWord) this.gotRight(word);
      else this.gotWrong(word);
    });
    eventBus.$on("next-button-clicked", () => {
      console.log("next button clicked");
      if (this.builderState === "won")
        this.updateWord(this.questionWord, true);
      else if (this.builderState === "lost")
        this.updateWord(this.questionWord, false);
      this.builderState = "testing";
    });
    eventBus.$on("pause-button-clicked", () => {
      console.log("pause button clicked!");
      this.builderState = "pause";
    });
    eventBus.$on("continue-button-clicked", () => {
      console.log("continue button clicked!");
      if (this.builderState === "start")
        this.getModule();
      this.builderState = "testing";
    });


    this.speech = new Speech()
    this.speech.init({
      'volume': 1,
      lang: "en-GB", //'lang': 'pl-PL',
      'rate': 1,
			'pitch': 1,
			'voice': 'Zosia',
      'splitSentences': true
    }).then((data) => {
      console.log("TTS ok") //, data)
    }).catch(err => {
      console.error("tts - an error occured while initializing : ", err)
    })
  },

  methods: {
    getModule: function () {
      console.log(`fetching from http://localhost:3000/api/${this.currentModule.path}/`)
      fetch(`http://localhost:3000/api/${this.currentModule.path}/`)
        .then(res => res.json())
        .then(data => {
          this.allWords = data;
          this.updateWordLists();
        });
    },
    updateWordLists: function () {
      console.group('Find testing words')
      this.testingWords = this.getTestingWords();
      console.groupEnd()
      if (this.hasBeenRun == false) {
        this.questionWord = this.testingWords[Math.floor(Math.random() * this.testingWords.length)];
        console.log(`new session first word set to ${this.questionWord.English}`)
      } else
        this.questionWord = this.getQuestionWord();
      console.log(`trying to play tts for ${this.questionWord.Polish}`)
      this.speech.speak({
        text: this.questionWord.Polish
      }).then(() => {
        console.log(`TTS for ${this.questionWord.Polish} played `)
      }).catch(e => {
        console.error("TTS error : ", e)
      })
      if (this.wordUntouched(this.questionWord))
        this.builderState = "newWord";
      this.buttonWords = this.getButtonWords();
      this.hasBeenRun = true
      this.seenWords = this.getSeenWords();
    },

    getTestingWords: function () {
      if (this.isNewModule()) {
        let firstTwoWords = this.allWords.filter((word) => word.studyOrder < 3)
        console.log("new module, adding 2 words!", firstTwoWords[0].English, firstTwoWords[1].English)
        return firstTwoWords
      } else {
        console.log("not new module!")
        let allTouchedWordsNotKnownNotReady = this.allTouchedWordsNotKnownNotReady()
        console.log("allTouchedWordsNotKnownNotReady=", allTouchedWordsNotKnownNotReady.map(word => (word.English + " " + word.studyOrder)).join(' '))

        let allWordsReadyOrKnown = this.allWords.filter(word => {
          if (this.wordReady(word) || this.wordKnown(word))
            return true
          return false
        })
        let newTestingArray = allTouchedWordsNotKnownNotReady

				if (this.timeForNewWord(newTestingArray))
				{
					if (this.noMoreWordsToAdd(allWordsReadyOrKnown))
					{
							console.log("no more words to add!")
							return this.allWords
					}
					else //add new word
					{
							let orders = allWordsReadyOrKnown.map(word => word.studyOrder)
							let highestOrder = Math.max(...orders)
							let newWord = this.allWords.find(word => (word.studyOrder===highestOrder+1))
							newTestingArray.push(newWord)
							console.log(`adding new word ${newWord.English}`)
					}
				}
				if (newTestingArray.length<3)  //if there aren't at least 3 words to cycle through, fill up with ready words if possible
				{
					console.group("ready fillers needed")
					let i=0
					let fail=false
					while (  i< (3-newTestingArray.length)  && fail===false )
					{
						console.log(`new testing words is too short, length ${newTestingArray.length}, adding filler ready words`,`i=${i}`)
						if (!this.addFillerReadyWordTo(newTestingArray))
							{
								console.log("no possible unready fillers")
								fail=true
							}
						i++
					}
					console.log("finished adding unready fillers",`newTestingArray length = ${newTestingArray.length}`,`i=${i}`,`fail=${fail}`)
					console.groupEnd()
				}
				else
					console.log(`newTestingArray length is ${newTestingArray.length}, no unready fillers required`)
				if (newTestingArray.length<3)  //if there still aren't at least 3 words to cycle through, fill up with  Knownwords if possible
				{
					console.group("known fillers needed")
					let i=0
					let fail=false
					while (  i< (3-newTestingArray.length)  && fail===false )
					{
						console.log(`new testing words is too short, length ${newTestingArray.length}, adding filler known words`)
						if (!this.addFillerKnownWordTo(newTestingArray))
							{
								console.log("no possible known fillers")
								fail=true
							}
						i++
					}
					console.log("finished adding known fillers",`newTestingArray length = ${newTestingArray.length}`,`i=${i}`,`fail=${fail}`)
					console.groupEnd()
				}
				else
					console.log(`newTestingArray length is ${newTestingArray.length}, no ready fillers required`)
				return newTestingArray
			}
    },
    getButtonWords: function () {
      let tempButtonWords = [];
      let arrayWithoutQWord = this.allWords.filter(
        word => word !== this.questionWord
      );
      let i = 0;
      while (i < 3) {
        i++;
        let wordToBeAdded =
          arrayWithoutQWord[
            Math.floor(Math.random() * arrayWithoutQWord.length)
          ];
        tempButtonWords.push(wordToBeAdded);
        let pos = arrayWithoutQWord.indexOf(wordToBeAdded);
        arrayWithoutQWord.splice(pos, 1);
      }
			tempButtonWords.push(this.questionWord);
			tempButtonWords=this.shuffle(tempButtonWords);
      return tempButtonWords;
    },
    getQuestionWord: function() {
			let previousWord = this.questionWord;
			console.log(`previous word is ${previousWord.English}`)
			let possibleQuestionWords = this.testingWords;
			console.log("possible q words (from testingwords) before previous cut:")
			for (let word of possibleQuestionWords)
			{
				console.log(word.English,word.studyOrder)
			}
			let pos = possibleQuestionWords.findIndex(word => (word.English==previousWord.English));
			console.log("position of previousword to cut:",pos)
			if (pos!=-1)
				possibleQuestionWords.splice(pos, 1);
			else
				console.log("previous word not in possible question words")
			console.log("possibleQuestionWords =")
			if (possibleQuestionWords.length === 0) console.log("possibleQuestionWords empty");
			else
			{
				for (let word of possibleQuestionWords)
					console.log(word.English,word.studyOrder);
			}
      return possibleQuestionWords[Math.floor(Math.random() * possibleQuestionWords.length)];
    },
    getSeenWords: function () {
      return this.allWords.filter(
        word => word.timesRight > 0 || word.timesWrong > 0);
    },
    isNewModule: function () {
      let numberOfTouchedWords = this.allWords.filter(word => (!this.wordUntouched(word))).length
      if (numberOfTouchedWords < 2)
        return true
      return false
    },
    gotRight: function (word) {
      this.feedbackWord = this.questionWord;
      this.builderState = "won";
      // CSS Green class
    },
    gotWrong: function (word) {
      this.feedbackWord = this.questionWord;
      this.builderState = "lost";
      // CSS Red Class
    },
    updateWord: function (word, wasCorrect) {
      let id = word._id;
      let payload;
      if (wasCorrect == true)
        payload = {
          'timesRight': word.timesRight + 1
        };
      else {
        payload = {'timesWrong': word.timesWrong + 1 };
			}
			console.log(`patching to http://localhost:3000/api/${this.currentModule.path+id}/`)
			fetch(`http://localhost:3000/api/${this.currentModule.path}/`+id, {
				method: 'PATCH',
				body: JSON.stringify(payload),
				headers: {'Content-Type':	'application/json'}
			})
				.then(this.getModule())
		},
		wordReady: function(word){
			if (word.timesRight > 2)
				return true
			return false
		},
		wordKnown: function(word) {
        if (
          (word.timesRight > 4 && word.timesRight > word.timesWrong) ||
          word.isKnown
        )
          return true;
        else return false;
		},
		wordUntouched: function(word){
			if (word.timesRight===0 && word.timesWrong===0)
				return true
			return false
		},
		allTouchedWordsKnown: function(){
			return this.allWords.filter( word =>(!this.wordUntouched(word) && this.wordKnown(word)) )
		},
		allTouchedWordsNotKnownReady: function(){
			return this.allWords.filter( word =>(!this.wordUntouched(word) && !this.wordKnown(word) && this.wordReady(word)  ) )
		},
		allTouchedWordsNotKnownNotReady: function(){
			let allWordsExceptKnown=this.allWords.filter(word => (!this.wordKnown(word)))
			console.log("allWordsExceptKnown=",allWordsExceptKnown.map(word => (word.English + " " + word.studyOrder)).join(' '))
			let allTouchedWords=this.allWords.filter(word => (!this.wordUntouched(word)))
			console.log("allTouchedWords=",allTouchedWords.map(word => (word.English + " " + word.studyOrder)).join(' '))
			let allWordsExceptReady=this.allWords.filter(word => (!this.wordReady(word)))
			console.log("allWordsExceptReady=",allWordsExceptReady.map(word => (word.English + " " + word.studyOrder)).join(' '))
			return this.allWords.filter( word =>(!this.wordKnown(word) && !this.wordUntouched(word) && !this.wordReady(word)  ) )
		},
		timeForNewWord: function(currentTestingArray){
			if (currentTestingArray.every(word => (this.wordReady(word))))
			{
				console.log("time for new word!")
				return true
			}
			else
			{
				console.log("not ready for new word!")
				return false
			}
		},
		noMoreWordsToAdd: function(allWordsReadyOrKnown){
			let orders = allWordsReadyOrKnown.map(word => word.studyOrder)
			let highestOrder = Math.max(...orders)
			if (   highestOrder===(this.allWords.length-1)   )
				return true
			else
				return false
		},
		addFillerReadyWordTo: function(arrayToAddTo){
			let possibleFillerWords = this.allTouchedWordsNotKnownReady()
			if (possibleFillerWords.length===0)
			{
				return false;
			}

			console.log("possible ready filter words:",possibleFillerWords.map(word=>(word.English+" "+word.studyOrder)).join(' ,'))

			let newWord = possibleFillerWords[Math.floor(Math.random() * possibleFillerWords.length)]
			//console.log("newword",newWord)
			arrayToAddTo.push(newWord)
			let pos = possibleFillerWords.indexOf(newWord)
			possibleFillerWords.splice(pos,1)
			console.log("filler word added to testing Words:", newWord.English)
			return true
		},
		addFillerKnownWordTo: function(arrayToAddTo){
			let possibleFillerWords = this.allTouchedWordsKnown()
			if (possibleFillerWords.length===0)
			{
				return false;
			}

			console.log("possible known filter words:",possibleFillerWords.map(word=>(word.English+" "+word.studyOrder)).join(' ,'))

			let newWord = possibleFillerWords[Math.floor(Math.random() * possibleFillerWords.length)]
			//console.log("newword",newWord)
			arrayToAddTo.push(newWord)
			let pos = possibleFillerWords.indexOf(newWord)
			possibleFillerWords.splice(pos,1)
			console.log("filler word added to testing Words:", newWord.English)
			return true
		},
		shuffle:function(a){     ///taken from wikipedia
    var j, x, i;
			for (i = a.length - 1; i > 0; i--) {
					j = Math.floor(Math.random() * (i + 1));
					x = a[i];
					a[i] = a[j];
					a[j] = x;
			}
    	return a;
		}
	},
  data() {
    let modulesarray= [{
      label: "Basic Vocabulary and Greetings \u{1F308}",
      path: 'basicwords'
    }, {
      label: "Food and Drink \u{1f374}",
      path: 'foodwords'
    }]
    return {
      allWords: [],
      testingWords: [],
      buttonWords: [],
      questionWord: {},
      feedbackWord: {},
      hasBeenRun: false,
      seenWords: [],
      newWord: {},
      builderState: "start", ///"testing" "won" "lost" "pause" "start" "newWord"
      modules: modulesarray,
      currentModule: modulesarray[0],
      speech: {}
    };
  }
};
</script>

<style lang="css" scoped>
.vocab-builder-view {
  background: linear-gradient(to bottom, rgba(255,255,255,.95) 120px, rgba(220,20,60,.95) 120px );
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Quicksand', sans-serif;
  position: relative;
}
</style>
