import Vue from 'vue'
import Router from 'vue-router'
import vocabBuilderView from '@/views/vocabBuilderView.vue'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/vocab_builder',
			name: 'vocab-builder-view',
			component: vocabBuilderView
		}

	]
})

export default router;