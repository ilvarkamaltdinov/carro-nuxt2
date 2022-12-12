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
import categoryValidate from "@/mixins/categoryValidate";

export default {
	mixins: [seoTags, jsonld, categoryValidate],
	mounted() {
		setTimeout(function () {window.scrollTo(0, -100);}, 1);
		localStorage.removeItem('foldersTabsLeft');
	},
	methods: {
		...mapMutations({
			setFolders: 'folders/folders/SET_FOLDERS'
		})
	},
}
</script>
