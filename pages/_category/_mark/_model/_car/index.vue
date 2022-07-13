<template>
	<main class="page-main">
		<div class="grid">
			<!--<crumbs :crumbs="crumbs"/>-->
		</div>
		<component :is="currentComponent" :page-title="pageTitle"/>
	</main>
</template>
<script>
import {mapGetters} from "vuex";
import seoTags from "@/mixins/seoTags";

export default {
	layout: 'catalog',
	mixins:[seoTags],
	computed: {
		...mapGetters({
			chosen: 'filters/filters/chosen',
      componentCatalog: 'filters/filters/componentCatalog'
		}),
		currentComponent() {
			return this.componentCatalog === 'car' ? 'car' : 'catalog-used'
		}
		// crumbs() {
		// 	return [
		// 		{
		// 			name: 'Главная',
		// 			route: '/',
		// 			active: false
		// 		},
		// 		{
		// 			name: 'С пробегом',
		// 			route: '/used',
		// 			active: false
		// 		},
		// 		{
		// 			name: this.chosen.mark[0].title,
		// 			route: '/used/' + this.chosen.mark[0].slug,
		// 			active: false
		// 		},
		// 		{
		// 			name: this.chosen.folder[0].title,
		// 			route: '/used/' + this.chosen.folder[0].slug,
		// 			active: false
		// 		}
		// 	]
		// }
	}
}
</script>
