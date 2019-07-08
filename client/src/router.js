import Vue from 'vue'
import Router from 'vue-router'
import VocabBuilderView from '@/views/VocabBuilderView'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/vocab_builder',
			name: 'vocab-builder-view',
			component: VocabBuilderView
		}

	]
})

export default router;
