<template>
	<main class="page-main">
		<div class="grid">
			<!--<crumbs :crumbs="crumbs" />-->
		</div>
		<catalog-used :page-title="pageTitle"/>
	</main>
</template>
<script>

import seoTags from "@/mixins/seoTags";
// import folders from "@/apollo/queries/folder/folders";
import {mapMutations} from "vuex";

export default {
	mixins:[seoTags],
	layout: 'catalog',
	methods:{
		...mapMutations({
			setFolders:'folders/folders/SET_FOLDERS'
		})
	},
	// async mounted() {
	// 	console.log(this.folders)
	// 	await this.setFolders(this.folders)
	// },
	// apollo: {
	// 	folders: {
	// 		query: folders,
	// 		variables () {
	// 			return {
	// 				site_id: this.$config.site_id,
	// 				mark_slug: this.$route.params.mark
	// 			}
	// 		},
	// 	}
	// },
}
</script>