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
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	validate(ctx) {
		if (ctx.store.getters.showComm) {
			return ctx.params.category === 'used' || ctx.params.category === 'commercial';
		} else {
			return ctx.params.category === 'used'
		}

	},
	mounted() {
		setTimeout(function () {window.scrollTo(0, -100);}, 1);
	},
}

</script>
