<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<featured-reviews :page-title="pageTitle"/>
		</div>
	</main>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
	mixins: [seoTags, jsonld],
	validate(ctx) {
		return ctx.store.getters.showReviews
	},
	mounted() {
		window.scrollTo(0, 0)
	},
}
</script>