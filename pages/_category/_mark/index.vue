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
import {mapGetters, mapMutations} from "vuex";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	layout: 'catalog',
	computed: {
		...mapGetters({
			marks: 'marks/marks/allMarks',
		}),
		currentMark() {
			return this.marks.filter(item => this.$route.params.mark === item.slug)[0]
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
					name: this.currentMark ? this.currentMark.title : '',
					route: '/used/' + (this.currentMark ? this.currentMark.slug : ''),
					active: true
				}
			]
		}
	},
	methods: {
		...mapMutations({
			setFolders: 'folders/folders/SET_FOLDERS'
		})
	},
}
</script>