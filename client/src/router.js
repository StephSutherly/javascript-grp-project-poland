import Vue from 'vue'
import Router from 'vue-router'
import VocabBuilderView from '@/views/VocabBuilderView'
import CulturePage from '@/views/CulturePage'
import HomePage from '@/views/HomePage'
import PolishLanguage from '@/views/PolishLanguage'
import Travel from '@/views/Travel'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/vocab_builder',
			name: 'vocab-builder-view',
			component: VocabBuilderView
		},
		{
			path: '/culture',
			name: 'culture-page',
			component: CulturePage
		},
		{
			path: '/home',
			name: 'home-page',
			component: HomePage
		},
		{
			path: '/language',
			name: 'polish-language',
			component: PolishLanguage
		},
		{
			path: '/travel',
			name: 'travel',
			component: Travel
		}
	]
})

export default router;
