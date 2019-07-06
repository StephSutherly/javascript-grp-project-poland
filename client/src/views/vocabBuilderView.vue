<template>
	<div class="vocab-builder-view">
		<choice-list :words="words"></choice-list>
	</div>
</template>

<script>
import ChoiceList from "@/components/choiceList.vue"

export default {
	components:{
		"choice-list": ChoiceList
	},
	mounted(){
		this.words=this.getModule()
	},
	methods:{
		getModule:function(){
			// to be replaced with fetch
			return [
				{
					Polish: "Hello in polish",
					English: "Hello",
					timesRight: 5,
					timesWrong: 3
				},
				{
					Polish: "Goodbye in Polish",
					English: "Goodbye",
					timesRight: 3,
					timesWrong: 3
				},
				{
					Polish: "Afternoon in polish",
					English: "Afternoon",
					timesRight: 1,
					timesWrong: 20
				}
			]
		}
	},
	data(){
		return {
			words: []
		}
	}
}
</script>

<style scoped>

</style>

