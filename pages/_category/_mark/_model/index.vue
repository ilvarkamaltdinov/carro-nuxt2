<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<catalog-used :page-title="pageTitle" />
	</main>
</template>
<script>

import seoTags from "@/mixins/seoTags";
import {mapGetters} from "vuex";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	layout: 'catalog',
	computed: {
		...mapGetters({
			marks: 'marks/marks/allMarks',
			folders: 'folders/folders/folders'
		}),
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