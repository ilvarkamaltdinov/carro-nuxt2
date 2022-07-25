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
	mounted() {
		localStorage.removeItem('foldersTabsLeft');
	},
	methods: {
		...mapMutations({
			setFolders: 'folders/folders/SET_FOLDERS'
		})
	},
}
</script>