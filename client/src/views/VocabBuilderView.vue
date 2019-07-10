<template>
  <div class="vocab-builder-view cf">
    <builder-question :builderState="builderState" :questionWord="questionWord" :feedbackWord="feedbackWord"></builder-question>
    <builder-feedback :builderState="builderState"></builder-feedback>
    <choice-list :builderState="builderState" :buttonWords="buttonWords"></choice-list>
    <pause-screen :builderState="builderState" :seenWords="seenWords"></pause-screen>
    <continue-button :builderState="builderState"></continue-button>
    <pause-button :builderState="builderState"></pause-button>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ChoiceList from "@/components/ChoiceList.vue";
import BuilderQuestion from "@/components/BuilderQuestion.vue";
import BuilderFeedback from "@/components/BuilderFeedback.vue";
import PauseScreen from "@/components/PauseScreen.vue";
import PauseButton from "@/components/PauseButton.vue";
import ContinueButton from "@/components/ContinueButton.vue";

export default {
  name: "vocab-builder-view",
  components: {
    "choice-list": ChoiceList,
    "builder-question": BuilderQuestion,
    "builder-feedback": BuilderFeedback,
    "pause-screen": PauseScreen,
    "pause-button": PauseButton,
    "continue-button": ContinueButton
  },
  mounted() {
    eventBus.$on("choice-button-clicked", word => {
      if (word === this.questionWord) this.gotRight(word);
      else this.gotWrong(word);
    });
    eventBus.$on("next-button-clicked", () => {
      console.log("next button clicked");
      this.builderState = "testing";
		});
    eventBus.$on("pause-button-clicked", () => {
      console.log("pause button clicked!");
      this.builderState = "pause";
    });
    eventBus.$on("continue-button-clicked", () => {
      console.log("continue button clicked!");
      this.builderState = "testing";
    });

		this.getModule();
	console.log(this.emojis[0])
  },
  methods: {
    getModule: function() {
      fetch("http://localhost:3000/api/words/")
        .then(res => res.json())
        .then(data => {
          this.allWords = data;
          this.updateWordLists();
        });
    },
    updateWordLists: function() {
			console.group('Find testing words')
			this.testingWords = this.getTestingWords();
			console.groupEnd()
			if (this.hasBeenRun==false)
			{
				this.questionWord=this.testingWords[Math.floor(Math.random() * this.testingWords.length)];
				console.log(`new session first word set to ${this.questionWord.English}`)
			}
			else
				this.questionWord = this.getQuestionWord();
				
			

      this.buttonWords = this.getButtonWords();
			this.hasBeenRun=true
      this.seenWords = this.getSeenWords();
			// let array = this.seenWords;
			// console.clear()
			// console.log("seenWords = ")
      // if (array.length === 0) console.log("seenWords empty");
			// for (let i = 0; i < array.length; i++)
			// console.log(array[i].English);
    },
    getTestingWords: function() {
			if (this.isNewModule())
			{
				let firstTwoWords =  this.allWords.filter( (word) => word.studyOrder<3 )
				console.log("new module, adding 2 words!",firstTwoWords[0].English,firstTwoWords[1].English)
				return firstTwoWords
			}
			else
			{
				console.log("not new module!")
				let allTouchedWordsNotKnownNotReady =  this.allTouchedWordsNotKnownNotReady()
				console.log("allTouchedWordsNotKnownNotReady=",allTouchedWordsNotKnownNotReady.map(word => (word.English + " " + word.studyOrder)).join(' '))

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
    getButtonWords: function() {
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

			//console.clear()
			console.log("possibleQuestionWords =")
			if (possibleQuestionWords.length === 0) console.log("possibleQuestionWords empty");
			else
			{
				for (let word of possibleQuestionWords)
					console.log(word.English,word.studyOrder);
			}

      return possibleQuestionWords[Math.floor(Math.random() * possibleQuestionWords.length)];
		},
    getSeenWords: function() {
      return this.allWords.filter(
        word => word.timesRight > 0 || word.timesWrong > 0);
    },
			isNewModule: function() {
			let numberOfTouchedWords = this.allWords.filter(word => (!this.wordUntouched(word)) ).length
			if (numberOfTouchedWords<2)
				return true
			return false
    },
    gotRight: function(word) {
			this.feedbackWord=this.questionWord
      this.updateWord(word, true);
      this.builderState = "won";
      // CSS Green class
    },
    gotWrong: function(word) {
			this.feedbackWord=this.questionWord
      this.updateWord(word, false);
      this.builderState = "lost";
      // CSS Red Class
    },
    updateWord: function(word, wasCorrect) {
      let id =  word._id;
      let payload;
      if (wasCorrect == true)
        payload = {'timesRight': word.timesRight + 1};
      else {
        payload = {'timesWrong': word.timesWrong + 1 };
			}
			fetch('http://localhost:3000/api/words/'+id, {
				method: 'PATCH',
				body: JSON.stringify(payload),
				headers: {'Content-Type':	'application/json'}
			})
				.then(this.getModule())
		},
		wordReady: function(word){
			if (word.timesRight > 3)
				return true
			return false
		},
		wordKnown: function(word) {
        if (
          (word.timesRight > 5 && word.timesRight > word.timesWrong) ||
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
    return {
      allWords: [],
      testingWords: [],
      buttonWords: [],
			questionWord: {},
			feedbackWord: {},
			hasBeenRun: false,
			seenWords: [],
			emojis: ['\u{1F4A9}'],
      builderState: "start" ///"testing" "won" "lost" "pause"
    };
  }
};
</script>

<style lang="css" scoped>

.vocab-builder-view {
  /* background: url('https://upload.wikimedia.org/wikipedia/commons/7/7d/National_Flag_of_Poland.png') no-repeat; */
  background: linear-gradient(to bottom, rgba(255,255,255,.95) 120px, rgba(220,20,60,.95) 120px );
  display: block;
  /* min-height: 240px; */
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Questrial', sans-serif;
}

</style>
