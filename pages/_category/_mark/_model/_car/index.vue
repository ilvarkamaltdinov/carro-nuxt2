<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<component :is="currentComponent"
		           :page-title="pageTitle" :description="description" />
	</main>
</template>
<script>
import {mapGetters} from "vuex";
import seoTags from "@/mixins/seoTags";

export default {
	layout: 'catalog',
	mixins: [seoTags],
	computed: {
		...mapGetters({
			chosen: 'filters/filters/chosen',
			componentCatalog: 'filters/filters/componentCatalog',
			marks: 'marks/marks/allMarks',
			folders: 'folders/folders/folders'
		}),
		currentComponent() {
			return this.componentCatalog === 'car' ? 'car' : 'catalog-used'
		},
		currentMark() {
			return this.marks.filter(item => this.$route.params.mark === item.slug)[0]
		},
		currentFolder() {
			return this.folders.filter(item => this.$route.params.model === item.slug)[0]
		},
		crumbs() {
			return [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Автомобили с пробегом',
					route: '/used',
					active: false
				},
				{
					name: this.currentMark.title,
					route: '/used/' + this.currentMark.slug,
					active: false
				},
				{
					name: this.currentFolder ? this.currentFolder.title : '',
					route: this.currentFolder ? ('/used/' + this.currentMark.slug + '/' + this.currentFolder.slug) : '',
					active: true
				}
			]
		}
	}
}
</script>
